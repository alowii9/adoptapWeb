import React from "react";
import NavPrincipal from "@/app/componentes/NavPrincipal";
// import GrillaFotosId from "@/app/componentes/GrillaFotosId";
import GrillaFotosId2 from "@/app/componentes/GrillaFotosId2";
import firebase from "firebase/compat/app";
import GridDeImagenes from "@/app/componentes/Grillafotos";
import GrillaFotosId from "@/app/componentes/GrillaFotosId";
import db from "@/app/Firebase/FirebaseConfig";
import Swal from "sweetalert2";
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

