import Image from "next/image";

import "./styles.css";

const WorkoutPlaceholder = ({ name, weight, sets, img }) => {
  return (
    <main className="workout-placeholder">
      <div className="imgplace">
        <Image
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjYwcDdlNGl3Zm00a3N0dGs5aHgydHh2cG9naDNwZGw4cGhpdmt5NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kDQAwPe2owJrONdtUE/giphy.gif"
          alt="Minha animação"
          width="100"
          height="100"
          unoptimized
        />
      </div>
      <div className="workout-info">
        <h2 className="workout-name">{name}</h2>
        <h4 className="workout-details">
          {weight} kg - {sets} séries de 12
        </h4>
        <div className="sets-checkbox">
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </main>
  );
};
export default WorkoutPlaceholder;
