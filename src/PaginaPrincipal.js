import React ,{useState}from "react";
import "./estilos.css";
import MenuBar from "./Componentes/MenuBar.js";
import  BannerPrincipal from "./Componentes/BannerPrincipal.js";





function Menu() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

   const banner = [
    { titulo: 'Conciertazo!', descripcion: 'Concierto gratis, solo programadores', fecha: '07/07/24 - Centro de Lima' },
    { titulo: 'Charla Networking', descripcion: 'Conferencia sobre networking', fecha: '15/07/24 - Online' },
    { titulo: 'Rock and Roll Night', descripcion: 'Festival de música rock', fecha: '21/07/24 - Estadio Nacional' },
    { titulo: 'Club de Carros', descripcion: 'Exposición de autos clásicos', fecha: '30/07/24 - Plaza Mayor' }
  ];


  return (
    <div className="menu">
      <div> 
        <MenuBar/>
      </div>
    
      <main className="contenido">
      <div className="contenedor-banner">
            <div className="superpuesto-banner">
              <h2 className="titulo-banner">{banner[currentSlide].titulo}</h2>
              <p className="descripcion-banner">{banner[currentSlide].descripcion}</p>
              <p className="fecha-banner">{banner[currentSlide].fecha}</p>
              <button className="boton-vermas">Ver Más</button>
            </div>
            <div className="imagen-banner">
              <BannerPrincipal onSlideChange={handleSlideChange} />
            </div>
          </div>

        <h2 className="titulo-eventos">Eventos destacados</h2>
        <div className="grid-eventos">
          {/* Ejemplo de un evento destacado */}
          <div className="evento">
            <img
              src="/placeholder.svg"
              alt="Momentos"
              className="imagen-evento"
            />
            <div className="contenido-evento">
              <h3 className="titulo-evento">MOMENTOS</h3>
              <p className="fecha-evento">DEL 31 AL 30.06</p>
              <p className="lugar-evento">EL GRAN TEATRO LA VOZ HUMANA</p>
              <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-green-600">Desde S/ 567.00</span>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Comprar</button>
            </div>
            </div>
          </div>

          <div className="evento">
            <img
              src="/placeholder.svg"
              alt="Momentos"
              className="imagen-evento"
            />
            <div className="contenido-evento">
              <h3 className="titulo-evento">MOMENTOS</h3>
              <p className="fecha-evento">DEL 31 AL 30.06</p>
              <p className="lugar-evento">EL GRAN TEATRO LA VOZ HUMANA</p>
              <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-green-600">Desde S/ 567.00</span>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Comprar</button>
            </div>
            </div>
          </div>


          <div className="evento">
            <img
              src="/placeholder.svg"
              alt="Momentos"
              className="imagen-evento"
            />
            <div className="contenido-evento">
              <h3 className="titulo-evento">MOMENTOS</h3>
              <p className="fecha-evento">DEL 31 AL 30.06</p>
              <p className="lugar-evento">EL GRAN TEATRO LA VOZ HUMANA</p>
              <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-green-600">Desde S/ 567.00</span>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Comprar</button>
            </div>
            </div>
          </div>
        </div>


        
      </main>

      
      <div className="container mx-auto p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://placehold.co/600x400" alt="Event Image" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">ZONA DE ESPUMA PARA NIÑOS EN PACHACAMAC</h3>
            <div className="flex items-center text-zinc-600 mt-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a2 2 0 00-2 2v2H3a1 1 0 000 2h1v6H3a1 1 0 000 2h1v2a2 2 0 002 2h8a2 2 0 002-2v-2h1a1 1 0 000-2h-1V8h1a1 1 0 000-2h-1V4a2 2 0 00-2-2H6zm0 2h8v2H6V4zm0 4h8v6H6V8zm0 8h8v2H6v-2z" />
              </svg>
              <span>jueves 20 jun. - 11:00 am</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-green-600">Desde S/ 59.90</span>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Comprar</button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://placehold.co/600x400" alt="Event Image" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">TORNEO DE FUTBOL F6</h3>
            <div className="flex items-center text-zinc-600 mt-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a2 2 0 00-2 2v2H3a1 1 0 000 2h1v6H3a1 1 0 000 2h1v2a2 2 0 002 2h8a2 2 0 002-2v-2h1a1 1 0 000-2h-1V8h1a1 1 0 000-2h-1V4a2 2 0 00-2-2H6zm0 2h8v2H6V4zm0 4h8v6H6V8zm0 8h8v2H6v-2z" />
              </svg>
              <span>domingo 23 jun. - 2:00 pm</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-green-600">Desde S/ 20.00</span>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Comprar</button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://placehold.co/600x400" alt="Event Image" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Retiro de Yoga en Rivera Maya - México</h3>
            <div className="flex items-center text-zinc-600 mt-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a2 2 0 00-2 2v2H3a1 1 0 000 2h1v6H3a1 1 0 000 2h1v2a2 2 0 002 2h8a2 2 0 002-2v-2h1a1 1 0 000-2h-1V8h1a1 1 0 000-2h-1V4a2 2 0 00-2-2H6zm0 2h8v2H6V4zm0 4h8v6H6V8zm0 8h8v2H6v-2z" />
              </svg>
              <span>jueves 07 nov. - 11:00 am</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-green-600">Desde $ 1400.00</span>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Comprar</button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://placehold.co/600x400" alt="Event Image" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Retiro de Yoga e Inteligencia emocional en Tarapoto</h3>
            <div className="flex items-center text-zinc-600 mt-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a2 2 0 00-2 2v2H3a1 1 0 000 2h1v6H3a1 1 0 000 2h1v2a2 2 0 002 2h8a2 2 0 002-2v-2h1a1 1 0 000-2h-1V8h1a1 1 0 000-2h-1V4a2 2 0 00-2-2H6zm0 2h8v2H6V4zm0 4h8v6H6V8zm0 8h8v2H6v-2z" />
              </svg>
              <span>viernes 06 sep. - 10:00 am</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-green-600">Desde S/ 567.00</span>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Comprar</button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://placehold.co/600x400" alt="Ad Image" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">PUBLICIDAD</h3>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://placehold.co/600x400" alt="Event Image" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">SILVER ROOFTOP AÑO NUEVO 2024</h3>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://placehold.co/600x400" alt="Event Image" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Año Nuevo Upload 2024</h3>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://placehold.co/600x400" alt="Event Image" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">FIESTA BLANCA – AÑO NUEVO 2024</h3>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Menu;