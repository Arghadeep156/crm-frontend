import React from "react";
import HeaderComponent from "./partials/HeaderComponent";
import FooterComponent from "./partials/FooterComponent";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <div className="default-layout">
        <header className="header mb-2">
          <HeaderComponent />
        </header>
        <main className="main">{children}</main>
        <footer className="footer">
          <FooterComponent />
        </footer>
      </div>
    </div>
  );
}
