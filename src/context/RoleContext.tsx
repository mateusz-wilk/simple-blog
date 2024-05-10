"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type Role = "author" | "reader";

interface RoleContextProps {
  role: Role;
  switchRole: () => void;
}

// const ROLE_STORAGE_KEY = "userRole";

const RoleContext = createContext<RoleContextProps | undefined>(undefined);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  // const getInitialRole = (): Role => {
  //   const storedRole =
  //     typeof window !== "undefined"
  //       ? localStorage.getItem(ROLE_STORAGE_KEY)
  //       : false;

  //   if (storedRole === "author" || storedRole === "reader") {
  //     return storedRole;
  //   }
  //   return "reader";
  // };

  // const [role, setRole] = useState<Role>(getInitialRole());

  const [role, setRole] = useState<Role>("reader");

  const switchRole = () => {
    // const newRole = role === "reader" ? "author" : "reader";
    // setRole(newRole);
    setRole((prev) => (prev === "reader" ? "author" : "reader"));
    // localStorage.setItem(ROLE_STORAGE_KEY, newRole);
  };

  // useEffect(() => {
  //   const storedRole = localStorage.getItem(ROLE_STORAGE_KEY);
  //   if (storedRole && storedRole !== role) {
  //     setRole(storedRole as Role);
  //   }
  // }, []);

  return (
    <RoleContext.Provider value={{ role, switchRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
