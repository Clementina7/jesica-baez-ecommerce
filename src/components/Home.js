import React from 'react'
import logo from '../assetes/logo.png'

const Home = () => {
  return (
    <>
    <section className="descuentos container-xl">
      <div className="row justify-content-around align-items-lg-end bg-light">
        <div className="col-lg-4 shadow bg-white">
        <div className="p-3">
          <h2>Bienvenidos a ARMENIA - blanco & deco</h2>
          <p className="descripcion">Somos tu blanqueria virtual y estamos aqui para asesorarte y hacer de tus espacios tu hogar.</p>
        </div>
        </div>
        <div className="col-lg-5">
          <img className="img-fluid" src={logo} alt="logo"/>
        </div>
        </div>
        </section>
    </>
        
    )
}

export default Home