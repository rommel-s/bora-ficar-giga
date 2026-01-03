import "./styles.css";

const WorkoutPlaceholder = ({ name, weight, sets, img }) => {
  return (
    <main className="workout-placeholder">
      <div className="imgplace"></div>
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
