"use client";

import { WorkoutButton } from "@/components/Buttons";
import styles from "./page.module.css";
import Link from "next/link";

import { MainTitle, SubtitleText } from "@/components/Titles";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titlecontainer}>
        <MainTitle titleText="Bora ficar gigante?" />
        <SubtitleText subtitleText="o que treinaremos hoje?" />
      </div>
      <div className={styles.buttonContainer}>
        <WorkoutButton
          btnTitle="Peito e Costas"
          btnLink="/workouts/peito-e-costa"
        />

        <WorkoutButton btnTitle="Pernas" btnLink="/workouts/anteriores-perna" />

        <WorkoutButton btnTitle="Superiores" btnLink="/workouts/superiores" />

        <WorkoutButton
          btnTitle="Posteriores de coxas"
          btnLink="/workouts/posteriores-perna"
        />
        <WorkoutButton btnTitle="Ombros" btnLink="/workouts/ombros" />
      </div>
    </div>
  );
}
