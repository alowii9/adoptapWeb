'use client'

import React, {useState, useEffect, useRef} from "react";
import GrillaFotosId from "@/app/componentes/GrillaFotosId";
import db from "@/app/Firebase/FirebaseConfig";
import { Link } from "react-router-dom";
import NavPrincipal from "@/app/componentes/NavPrincipal";
import mascotasEnAdopcion from "../page";
import { doc } from "firebase/firestore";


const Id3 = () => {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  
 
  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection("Locales").get();
      const dataArr = [];
      snapshot.forEach((doc) => {
        dataArr.push({ id: doc.id, ...doc.data() });
      });
       
      setData(dataArr);
    };
    fetchData();
  }, []);


  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };


  return (
    <>
      <NavPrincipal />
      <div style={imagenesMuestra}>
	 
        {data.map((item)   => (
          <div key={item.id} style={carta} onClick={() => handleItemClick(item.id)}>
            <img style={img} src={item.img} alt={item.name} />
            <p style={p}>Nombre mascota: {item.name}</p>
          
           
          </div>
        ))}
      </div>

      {selectedItemId && (
        <div style={imagenesMuestra}>
        
          {data.map((item) =>
            item.id === selectedItemId ? (
              <div key={item.id}>
                <p style={p}>Nombre Local: {item.name}</p>
              
                <p style={p}>Domicilio: {item.domicilio}</p>
                <p style={p}>Telefono: {item.telefono}</p>
                <p style={p}>Descripción: {item.descripcion}</p>
              </div>
            ) : null
          )}
        </div>
      )}
   

	 

      
        <button style={volverInicio}><a href="/principal/locales">Regresar</a></button>
     
    </>
  );
  

        }


/*
 
      

*/




//Estilos

const volverInicio = {

 marginLeft: "50%",
 marginBotton: "10%",
}



const imagenesMuestra = {

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "30px",

}

const carta = {
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "10px",
  
  justifyContent: "center",
  marginLeft: "20px",
  marginBottom: "20px",
  marginTop: "20px",
  paddingBottom: "20px",
  backgroundColor: "grey"
  

}

const img = {
  width: "200px",
  height: "200px",
  borderRadius: "10px",
}

const p = {

  color: "pearl",
  fontSize: "20px",
  fontFamily: "Arial"
}


export default Id3;
