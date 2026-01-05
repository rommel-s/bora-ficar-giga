import Link from "next/link";

import WorkoutPlaceholder from "@/components/Workout-placeholder";
import "@/styles/workout-pages.css";
import urlGist from "@/public/api";

async function getTreinos() {
  const url = urlGist;

  const res = await fetch(url, { cache: "no-store", next: { revalidate: 0 } });
  return res.json();
}

export default async function Ombros() {
  const data = await getTreinos();
  const treinos = data.ombros || [];

  return (
    <main>
      <h1>Treino de Ombros</h1>
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
      <Link href="/">
        <button>Voltar</button>
      </Link>
    </main>
  );
}
