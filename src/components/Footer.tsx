import React from "react";

interface FooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return <footer>{children}</footer>;
};

export default Footer;
