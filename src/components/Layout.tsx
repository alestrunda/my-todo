import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className="page">
    <div className="page-content container">{children}</div>
  </div>
);

export default Layout;
