import Link from "next/link";
import Image from "next/image";

import WorkoutPlaceholder from "@/components/Workout-placeholder";

import urlGist from "@/public/api.js";
import "@/styles/workout-pages.css";
import TimerCountdown from "@/components/Timer";

async function getTreinos() {
  const URL = urlGist;

  const res = await fetch(URL, { cache: "no-store", next: { revalidate: 0 } });

  return res.json();
}

export default async function Superiores() {
  const data = await getTreinos();

  const treinos = data.superiores || [];

  return (
    <main>
      <div className="workout-pages-header">
        <h1>Treino de Superiores</h1>
        <TimerCountdown duration={90} />
      </div>
      <div className="workout-container">
        {treinos.map((treino) => (
          <WorkoutPlaceholder
            key={treino.id}
            name={treino.name}
            weight={treino.weight}
            sets={treino.sets}
            img={treino.img}
          />
        ))}
      </div>
    </main>
  );
}
