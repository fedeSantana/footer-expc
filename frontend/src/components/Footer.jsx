import React from "react";
import Social from "./Social";
import Logo from "./Logo";

export default function Footer({ dataSecciones, socialNetworks }) {
  return (
    <footer className="ExpCFooter">
        <div className="SectionsContainer">
      <div className="footer-container container">
          <div>
            <a alt-text="pagina principal" href="/">
              <Logo />
            </a>
          </div>
          <div className="footer-sections">
            <div className="footer-section podcasts">
              <p className="footer-titulo">Secciones</p>
              {dataSecciones.map((section) => (
                <a key={section.label} href={section.link}>
                  {section.label}
                </a>
              ))}
            </div>
            <div className="footer-section podcasts">
              <p className="footer-titulo">Redes Sociales</p>
                {socialNetworks.map((socialElement) => (
                  <a key={socialElement.alt} href={socialElement.href}>
                      {socialElement.name}
                    </a>
                ))}
            </div>
          </div>
        </div>
        <section className="legales" alt="avisos legales y creadores">
          <hr />
          <div className="creadores">
            <p>
              {" "}
              Copyright © 2022 <strong> Expedición Ciencia </strong>. All rights
              reserved
            </p>
            <p className="flexEnd">
              {" "}
              Hecho con 🖤 por <strong> Suyi Sago</strong>, <strong> Victor Salaberry</strong>, <strong> Fede Santana</strong>
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}
