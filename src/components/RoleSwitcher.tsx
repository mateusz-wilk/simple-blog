"use client";

import { Switch } from "@radix-ui/themes";
import { useRole } from "../context/RoleContext";

const RoleSwitcher = () => {
  const { role, switchRole } = useRole();

  return (
    <div className="flex items-center gap-4">
      <span className="font-bold">
        {role === "reader" ? "Reader" : "Author"}
      </span>
      <Switch
        checked={role === "author"}
        onCheckedChange={switchRole}
        color="crimson"
      />
    </div>
  );
};

export default RoleSwitcher;
