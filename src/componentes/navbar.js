import React, { Component } from 'react';
import { tareas } from '../tareas.json';

// construyo aqui tambien mi componente para poder usarlo para contar mis tareas
class Navbar extends Component{
    constructor() {
        super();
        this.state = {
          tareas
        };
    }
render(){
   
    // mi retorno
    return(
        // div principal para poder regresar todos los elementos del componente
        <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Aplicación para la Productividad</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Tareas Actuales <span className="sr-only">(current)</span>
      <span className="badge badge-light">
            
              
            </span>
      </a>
      
            
      <a className="nav-item nav-link" ></a>
     
     
    </div>
  </div>
</nav>
         </div>   
    );
}


}
export default Navbar;