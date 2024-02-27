'use client'
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import  db  from '../Firebase/FirebaseConfig';
import NavPrincipal from './NavPrincipal';

const GrillaFotosId3 = () => {
  const [data, setData] = useState([]);

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

  return (
    <div style={imagenesMuestra}>
      {data.map((local) => (
        <Link legacyBehavior href={`locales/${local.id}`} key={local}>
          <a>
            <div style={carta}>
              <img style={img} src={local.img} alt={img} />
              <p style={p}>Nombre local: {local.name}</p>
              <p style={p}>Telefono: {local.telefono}</p>
              <p style={p}>Domicilio: {local.domicilio}</p>
              
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

//Estilos

const imagenesMuestra = {

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  

}

const carta = {
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "10px",
  textAlign: "center",
  justifyContent: "center",
  marginLeft: "20px",
  marginBottom: "20px",
  marginTop: "20px",
  paddingTop:"20px",
  paddingBottom: "100px",
  backgroundColor: "grey",
  marginRight:"20px"

}

const img = {
  width: '300px',
  heigth: '300px',
  borderRadius: "10px",
}

const p = {

  color: "pearl",
  fontSize: "20px",
  fontFamily: "Arial"
}


export default GrillaFotosId3; 