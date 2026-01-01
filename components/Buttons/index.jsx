import Link from "next/link";

import "./styles.css";

export const WorkoutButton = ({ btnTitle, btnLink }) => {
  return (
    <Link href={btnLink}>
      <button>{btnTitle}</button>
    </Link>
  );
};

export const SettingsItemsButton = ({ btnTitle, btnLink }) => {
  return (
    <Link href={btnLink}>
      <button>{btnTitle}</button>
    </Link>
  );
};

// HEADER BUTTONS

import { IoMdSettings } from "react-icons/io";

export const SettingsButton = ({ btnLink }) => {
  return (
    <Link href={btnLink}>
      <button className="settings-button">
        <IoMdSettings size={30} />
      </button>
    </Link>
  );
};

import { IoIosArrowBack } from "react-icons/io";

export const BackButton = ({ btnLink }) => {
  return (
    <Link href={btnLink}>
      <button className="back-button">
        <IoIosArrowBack size={30} />
      </button>
    </Link>
  );
};
