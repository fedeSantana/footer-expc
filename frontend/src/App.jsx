import Footer from "./components/Footer";

export default function App() {
  const dataSecciones = [
    {
      label: "Campamentos científicos",
      link: "https://expedicionciencia.org.ar/campamentos-cientificos/",
    },
    {
      label: "Programas educativos",
      link: "https://expedicionciencia.org.ar/otras-actividades-y-programas-educativos/",
    },
    {
      label: "Biblioteca ExpC",
      link: "https://expedicionciencia.org.ar/comunidad-educativa/",
    },
    {
      label: "Donaciones",
      link: "https://expedicionciencia.org.ar/donaciones-2/",
    },
    {
      label: "Quiénes somos",
      link: "https://expedicionciencia.org.ar/quienes-somos/",
    },
    {
      label: "Contacto",
      link: "https://expedicionciencia.org.ar/contacto/",
    },
  ];

  const redesSociales = [
    {
      name: "Twitter",
      alt: "Twitter",
      href: "https://twitter.com/Exp_Ciencia",
    },
    {
      name: "Facebook",
      alt: "Facebook",
      href: "https://www.facebook.com/Expedicion.Ciencia/",
    },
    {
      name: "Instagram",
      alt: "Instagram",
      href: "https://www.instagram.com/expedicionciencia/",
    },
  ];

  return (
    <div className="expC-Footer">
      <Footer dataSecciones={dataSecciones} socialNetworks={redesSociales}/>
    </div>
  );
}
