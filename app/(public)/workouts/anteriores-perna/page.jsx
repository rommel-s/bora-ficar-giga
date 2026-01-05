import WorkoutPlaceholder from "@/components/Workout-placeholder";
import Link from "next/link";

import urlGist from "@/public/api.js";
import TimerCountdown from "@/components/Timer";

import "@/styles/workout-pages.css";

async function getTreinos() {
  const URL = urlGist;

  const res = await fetch(URL, { cache: "no-store", next: { revalidate: 0 } });

  return res.json();
}

export default async function Perna() {
  const data = await getTreinos();

  const treinos = data.pernas || [];
  return (
    <main>
      <div className="workout-pages-header">
        <h1>Treino de Perna</h1>
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
