import React from "react";
import "./estilos.css";

 function Menu() {
    return (
      <div className="menu">
        <header className="menu-contenedor">
          <div className="logo">
            <img src="/" alt="eventomania" className="logo-eventomania" />
            <input
              type="text"
              placeholder="Encuentra eventos, lugares, organizadores, etc..."
              className="item-buscar"
            />
            
          </div>
          <div className="iconos">
            {}
            <button className="iniciar">Iniciar sesión</button>
            <button className="registrarse">Registrarse</button>
          </div>
        </header>

        <main className="banner">
          <div className="banner-contenedor">
            <div className="flex items-center justify-between px-8 py-4">
              <div className="text-4xl font-bold">
                NOEMI <br /> CASQUET
              </div>
              <div className="text-4xl font-bold">
                ORIGEN <br /> EL DESTINO DE TU SEXUALIDAD <br /> LIMA <br /> 17 DE JUNIO
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Eventos destacados</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-teal-500 rounded-lg overflow-hidden">
              <img src="/placeholder.svg" alt="Momentos" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">MOMENTOS</h3>
                <p>DEL 31 AL 30.06</p>
                <p>EL GRAN TEATRO LA VOZ HUMANA</p>
              </div>
            </div>
            <div className="bg-purple-500 rounded-lg overflow-hidden">
              <img src="/placeholder.svg" alt="Selena Tribute" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">CONCIERTO TRIBUTO</h3>
                <p>SELENA</p>
                <p>HORA 8:30 P.M.</p>
                <p>Selina Lima</p>
              </div>
            </div>
            <div className="bg-green-500 rounded-lg overflow-hidden">
              <img src="/placeholder.svg" alt="Peru Fan Fest" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">PERU FAN FEST 2024</h3>
                <p>JUEGOS SONIDOS NERD</p>
                <p>PERU VS CHILE</p>
              </div>
            </div>
            <div className="bg-black rounded-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">CREA Y VENDE TU EVENTO</h3>
                <ul className="list-disc pl-4 text-white">
                  <li>+ 6M LLONES DE ENTRADAS VENDIDAS</li>
                  <li>+ 60 MIL EVENTOS</li>
                  <li>+ 8 MIL ORGANIZADORES DE EVENTOS</li>
                </ul>
              </div>
            </div>
          </div>
        </main>

e
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