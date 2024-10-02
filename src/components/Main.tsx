import React from "react";
interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <main className="main">{children}</main>;
};
