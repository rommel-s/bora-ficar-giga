import { SettingsButton, BackButton } from "../Buttons";
import "./styles.css";

export const MainHeader = () => {
  return (
    <div className="header-container">
      <p>add header text here</p>
      <SettingsButton btnLink="/settings" />
    </div>
  );
};

export const SecondaryHeader = () => {
  return (
    <div className="secondary-header-container">
      <BackButton btnLink="/" />
      <p>Configurações</p>
    </div>
  );
};
