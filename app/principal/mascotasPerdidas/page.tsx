import React from "react";
import NavPrincipal from "@/app/componentes/NavPrincipal";
// import GrillaFotosId from "@/app/componentes/GrillaFotosId";
import GrillaFotosId2 from "@/app/componentes/GrillaFotosId2";
import firebase from "firebase/compat/app";
import GridDeImagenes from "@/app/componentes/Grillafotos";
import GrillaFotosId from "@/app/componentes/GrillaFotosId";
import db from "@/app/Firebase/FirebaseConfig";
import Swal from "sweetalert2";



const mascotasPerdidas = () => {
  

return (

    <>
    <NavPrincipal/ >
  
    <section>
    <div  style={volverInicio}>
  <button ><a  href="mascotasPerdidas/crearPublicacionPerdidas">Crear publicación</a></button>
    
  </div>
  <GrillaFotosId2/ >
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


export default mascotasPerdidas;

