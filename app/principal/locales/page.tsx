import React from "react";
import NavPrincipal from "@/app/componentes/NavPrincipal";


import GrillaFotosId3 from "@/app/componentes/GrillaFotosId3";



const Locales = () => {
  

return (

    <>
    <NavPrincipal/ >
  
    <section>
    <div  style={volverInicio}>
  <button ><a  href="locales/crearPublicacionLocal">Crear publicación</a></button>
    
  </div>
  <GrillaFotosId3/ >
 </section>

    </>

)

}

//estilo

const volverInicio = {
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
   height :"10vh",
  
    
  }


export default Locales;

