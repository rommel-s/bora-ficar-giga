import WorkoutPlaceholder from "@/components/Workout-placeholder";
import Link from "next/link";

import urlGist from "@/public/api.js";
import "@/styles/workout-pages.css";

// Como é um Server Component, podemos fazer o fetch direto
async function getTreinos() {
  const URL = urlGist;

  // 'no-store' garante que ele busque a versão nova sempre que atualizar o Gist
  const res = await fetch(URL, { cache: "no-store", next: { revalidate: 0 } });

  return res.json();
}

export default async function PeitoECosta() {
  const data = await getTreinos();

  const treinos = data.peito_e_costa || [];

  return (
    <main>
      <h1>Treino de Peito e Costa</h1>
      <div className="workout-container">
        {treinos.map((treino) => (
          <WorkoutPlaceholder
            key={treino.id}
            name={treino.name}
            weight={treino.weight}
            sets={treino.sets}
          />
        ))}
      </div>
      <Link href="/">
        <button>Voltar</button>
      </Link>
    </main>
  );
}
