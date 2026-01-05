import { SettingsButton, BackButton } from "../Buttons";
import "./styles.css";

export const MainHeader = () => {
  return (
    <div className="header-container">
      <BackButton btnLink="/" />
      <SettingsButton btnLink="/settings" />
    </div>
  );
};

export const SecondaryHeader = () => {
  return (
    <div className="secondary-header-container">
      <BackButton btnLink="/" color="800080" />
      <p>Configurações</p>
    </div>
  );
};
