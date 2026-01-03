import Link from "next/link";

import WorkoutPlaceholder from "@/components/Workout-placeholder";
import "@/styles/workout-pages.css";

export default function Superiores() {
  return (
    <main>
      <h1>Treino de Superiores</h1>
      <div className="workout-container">
        <WorkoutPlaceholder name="Supino Reto" weight="80" sets="3" />
        <WorkoutPlaceholder name="Supino Reto" weight="80" sets="3" />
        <WorkoutPlaceholder name="Supino Reto" weight="80" sets="3" />
        <WorkoutPlaceholder name="Supino Reto" weight="80" sets="3" />
        <WorkoutPlaceholder name="Supino Reto" weight="80" sets="3" />
        <WorkoutPlaceholder name="Supino Reto" weight="80" sets="3" />
      </div>
      <Link href="/">
        <button>Voltar</button>
      </Link>
    </main>
  );
}
