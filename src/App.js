import React, { Component } from 'react';
import FormularioTarea from './componentes/formtarea';
import Navbar from './componentes/navbar';
import { tareas } from './tareas.json';
import Timer from './componentes/timer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas
    };
    this.handleAddTarea = this.handleAddTarea.bind(this);
     
  }
  // metodo para agregas tareas  
  handleAddTarea(tarea) {
    // metodo set state para agregar las tareas al json que simulan mis datos del servidor
    this.setState({
      tareas: [...this.state.tareas, tarea]
    });
  }
// metodo para eliminar mis tareas gracias a la popiedad del bototn onclick
removeTarea(index){
  // mando una alerta para confirmar el borrado con el metodo confirm que ejecuta si recibo true
if(window.confirm('¿Deseas borrar?')){
  this.setState({
    // el metodo filter me ayuda a reorganizar el arreglo con los items que cumplan la condicion
    tareas: this.state.tareas.filter((e, i) =>{
      // si el indice es dirente al que mando lo quita
      return i !== index
  
    })
  })

}
}

  render() {
// ocupo la funcion map que recorre las tareas y la guardo en una constante para mostrarl los datos de mi array
 const tareas= this.state.tareas.map((tarea,i) =>{
    return(
// creo una tarjeta responsiva de igual forma para mostrar los datos
        <div className="col-md-4">
      <div className="text-center" key={i}>
        <div className="card mt-4">
        <div className="card-header">
          {/* titulo de la tarea que traigo */}
        <h3>{tarea.title}</h3>
        <span className="badge badge-pill badge-danger ml-2">
         {/*  */}
          {tarea.priority}
        </span>
        </div>
        <div className="card-body">
        <p>{tarea.responsible}</p>
        <p><mark>{tarea.description}</mark></p>
    <label>Duracion: </label><p>{tarea.horas}:{tarea.minutos}</p>
        </div>
        <div className="card-footer">
        {/* ayudo a que no pierda mi scope y le mando el indice  */}
          <button className="btn btn-danger"
          onClick={this.removeTarea.bind(this,i)}>Borrar</button>
          <p><Timer/>
       </p>
        </div>
        </div>
      </div>
      </div>
 
      )
  });
    
    
    
//retorno
    return (
      <div className="App">
       
        <Navbar />
     <div className="container">
       <div className="row mt-4">
         <div className="col-md-4">
          
         <FormularioTarea onAddTarea={this.handleAddTarea}></FormularioTarea>
        </div>
        {tareas}
        </div>
        </div>
        </div>
         
    );

  }

}


export default App;




