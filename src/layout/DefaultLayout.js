import React from "react";
import HeaderComponent from "./partials/HeaderComponent";
import FooterComponent from "./partials/FooterComponent";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <div className="default-layout">
        <header className="header">
          <HeaderComponent />
        </header>
        <main className="main">{children}</main>
        <footer classname="footer">
          <FooterComponent />
        </footer>
      </div>
    </div>
  );
}
