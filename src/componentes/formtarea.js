import React, { Component } from 'react';
import $ from "jquery";

// creo mi clase para hacer el formulario que registra las tareas
class FormularioTarea extends Component{
    // cosntructor de mi clase
    constructor(){
    super();
// estado que creo que almacenaran los datos
    this.state = {
        title: '',
        responsible: '',
        description: '',
        priority: '',
        duracion:''
      };
    //   para no perder mi scope tengo que enlazar a mi metodo input y no de error en react
      this.handleInput = this.handleInput.bind(this);
      //   para no perder mi scope tengo que enlazar a mi metodo submit y no de error en react
      this.handleSubmit = this.handleSubmit.bind(this);
}
// Funciones para crear tareas
// detecta los datos ingresados
handleInput(e){
// creo una constante que almacene los datos
const { value,name}= e.target;
// voy a cambiar el estado atraves de este evento
this.setState({
    [name]:value
})
// console.log(this.state);
}

handleSubmit(e){
// evento que evita refrescar la pagina
e.preventDefault();
// ocupo el evento on add tarea de mi app js
this.props.onAddTarea(this.state);
}

render(){
    return(
            // retorno el formulario que generara mis tareas
            

                <div className="card">
                    <h3 className="text-center">Crea tu Tarea Nueva</h3>
            <form onSubmit={this.handleSubmit} className="card-body">
              {/* input para el titulo de la tarea */}
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={this.handleInput}
                  placeholder="Nombre de la Tarea"
                  />
              </div>
              {/* input del responsable*/}
              <div className="form-group">
                <input
                  type="text"
                  name="responsible"
                  className="form-control"
                
                  onChange={this.handleInput}
                  placeholder="Persona que realiza"
                  />
              </div>
              {/* Input de la descripcion */}
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                 
                  onChange={this.handleInput
                }
                  placeholder="Descripcion"
                  />
              </div>
              <div className="form-group">
                <select
                    name="priority"
                    className="form-control"
                
                    onChange={this.handleInput}
                  >
                  <option disabled selected>Escoje duracion</option>
                  <option >baja</option>
                  <option >media</option>
                  <option >alta</option>
                </select>
                <br/>
                <div className="form-group">
                <input
                  type="number"
                  name="horas"
                  className="form-control"
                 
                  onChange={this.handleInput
                }
                  placeholder="horas    "
                  />
                  
                  {/* minutos */}
                    </div>
                    <div className="form-group">
                    <input
                  type="number"
                  name="minutos"
                  className="form-control"
                 
                  onChange={this.handleInput
                }
                  placeholder="minutos"
                  />
                    </div>
              </div>
              <button type="submit" className="btn btn-success">
                Guardar
              </button>
            </form>
            </div>
         
    );
}



}
export default FormularioTarea;