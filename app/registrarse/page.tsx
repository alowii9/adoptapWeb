import React, { useEffect, useState, useCallback } from "react";
import firebase from "firebase/compat/app";
import db from "@/app/Firebase/FirebaseConfig";
import Swal from "sweetalert2";
import $ from 'jquery';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { BrowserRouter, Navigate, BrowserRouter as Router, useNavigate } from 'react-router-dom';

const Registrarse = () => {
  const [registrarUsuario, setRegistrarUsuario] = useState(() => async (usuario) => {
    const { name, email, password } = usuario;
    const auth = getAuth();
    try {
      const infoUsuario = await createUserWithEmailAndPassword(auth, email, password);
      crearUsuario({ name, email, password });
    } catch (error) {
      MSJERROR();
    }
  });

  const crearUsuario = useCallback((usuario) => {
    const { name, email, password } = usuario;
    db.collection("usuarios").add({
      name,
      email,
      password
    })
      .then(function (docRef) {
        MSJOK();
        mover("/login")
      })
      .catch(function (error) {
        MSJERROR();
      })
  }, [MSJOK, MSJERROR, mover]);

  const MSJERROR = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "publicacion no creada, verifica los campos!!",
    });
  }, []);

  const MSJOK = useCallback(() => {
    Swal.fire({
      title: "Buen Trabajo!",
      text: "Publicacion creada!",
      icon: "success"
    });
  }, []);

  const mover = useNavigate();

  useEffect(() => {
    const handleClick = () => {
      let name = $("#name").val();
      let email = $("#email").val();
      let password = $("#password").val();

      const usuario = {
        name, email, password
      }

      if (!name || !email || !password) {
        MSJERROR();
      } else {
        registrarUsuario(usuario);
      }
    }

    $("#btnsave").on('click', handleClick);

    return () => {
      $("#btnsave").off('click', handleClick);
    };
  }, [registrarUsuario, MSJERROR]);

  return (
    <>
      <div style={fondoColorPagina}>
        <h1 style={h1}>Crear Nuevo Usuario</h1>
        <form style={formStyle}>
          <div>
            <label htmlFor="nombre">Nombre:</label><br />
            <input style={inputStyle}
              type="text"
              id="name"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div>
            <label htmlFor="email">email:</label><br />
            <input style={inputStyle}
              type="text"
              id="email"
              placeholder="Ingrese su correo"
            />
          </div>
          <div>
            <label htmlFor="password">password:</label><br />
            <input style={inputStyle}
              type="password"
              id="password"
              placeholder="Ingrese su contrasenia"
            />
          </div>
          <button id="btnsave" style={buttonStyle} type="button">Crear usuario</button>
        </form>
        <div  style={volverInicio}>
          <button ><a  href="/">volver al inicio</a></button>
        </div>
      </div>
    </>
  );
}

//Estilos formulario
const fondoColorPagina = {
  background: "#340434",
  color: "#fff",
}

const h1 = {
  paddingBottom: "50px",
  paddingTop: "100px"
}

const formStyle = {
  display: "row",
  maxWidth: "300px",
  margin: "0 auto",
  border: "2px solid #2f2f2f",
  borderRadius: "5px",
  padding: "20px",
  color: "#414532"
};

const inputStyle = {
  marginBottom: "10px",
  padding: "8px",
  paddingTop: "10px",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "blue",
  color: "white",
  border: "none",
  cursor: "pointer",
  paddingTop: "10px",
  marginTop:"50px"
};

// estilo boton volver
const volverInicio = {
  display:"flex",
  justifyContent: "center",
  alignItems: "center",
  height :"10vh",
  paddingTop: "20px",
  marginTop: "100px",
}

export default Registrarse;
