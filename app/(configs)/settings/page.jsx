import Link from "next/link";

import { SettingsItemsButton } from "@/components/Buttons";

const SettingsPage = () => {
  return (
    <>
      <h1>Settings Page</h1>
      <div>
        <Link href="/settings/licences">
          <button>Licenças</button>
        </Link>
      </div>
    </>
  );
};

export default SettingsPage;
