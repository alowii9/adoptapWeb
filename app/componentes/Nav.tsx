import Link from 'next/link';
import React from 'react';


const Nav = () => {
  return (

    
  <nav >

    <div>

          <div style={bannerPrincipal}>

            <a href="/">
                <img src="/logo.png" alt="logo adoptap" />
            </a>
            <img style={letras} width={450} height={100} src="/letras.png" alt="adoptapp" />
            <a href="/">
                <img src="/logo.png" alt="logo adoptap" />
            </a>
          </div>

          <div style={navStyle}>
              <ul style={ulStyle}>
                  <li style={liStyle}>
                    <Link legacyBehavior href="/login">
                      <a style={aStyle}>Ingresar</a>
                    </Link>
                  </li>

                  <li style={liStyle} >
                    <Link legacyBehavior href="/registrarse">
                      <a style={aStyle}>Registrarse</a>
                    </Link>
                  </li>
              </ul>

              </div>
    </div>
   
    </nav>
      


  );
}



// Estilos 

const letras = {
  marginTop: "50px"
}


const bannerPrincipal = {
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  background: ""
}

const h1 = {
  fontSize: "50px",
  fontFamily: "comic",
  paddingTop: "25px"
}

const navStyle = {
background: '#333',
color: '#fff',
display: "flex",
alignItems: "center",
justifyContent: "center",
fontSize: "20px"
};

const ulStyle = {
listStyle: 'none',
display: 'flex'
};

const liStyle = {
margin: '0 10px'
};

const aStyle = {
color: '#fff',
textDecoration: 'none',
hover: 'blue',
};





//


export default Nav;