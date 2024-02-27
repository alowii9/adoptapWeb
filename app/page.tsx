'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Nav from  "./componentes/Nav";
import Link from "next/link";
import Carrusel from "./componentes/Carrusel";
import React from "react";
import Footer from "./componentes/Footer";
import BodyPrincipal from "./componentes/BodyPrincipal";
import GridDeImagenes from "./componentes/Grillafotos";
import * as firebase from "firebase/compat/app";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import principal from "./principal/page";
import Login from "./login/page";

export default function Home() {
  return (
  
      
     
   
      
         <main >
       <Nav />
            
      <BodyPrincipal />
      
    
            </main>
      
     

 


  
   
  
    

  );
  
}
