import React from 'react';
import logo from '../logo.png';


function Productos() {

  return (
<main>
 <div class="row">
    <div class="col-sm-4">
      <div className="card" style={{width:"18rem"}}>
      <img src={logo} className="card-img-top" alt="..."/>
      <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>
    </div>
    
    <div class="col-sm-4">
      <div className="card" style={{width:"18rem"}}>
      <img src={logo} className="card-img-top" alt="..."/>
      <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div className="card" style={{width:"18rem"}}>
      <img src={logo} className="card-img-top" alt="..."/>
      <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>
    </div>
 </div>
</main>
  );

}

export default Productos;