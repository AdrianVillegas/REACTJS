import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Home from './componentes/apirout';
import App from '../App';

const Routes = () =>{

return(
<Switch>
    {/* le paso a mi ruta 3 props */}
    <Route>
        <Route exact path='/' component={App}/>


    </Route>
</Switch>
);


}