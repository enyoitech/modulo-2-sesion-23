import React from 'react';
import { Buttom } from './Buttom';

export const Head = (props) => {
  console.log('desde head', props)
  const { cliente} = props;
  const {nombre, apellido, edad, estado} = cliente;

  return (
    <div>
      <h1> 
                                                                      {/* true  =activo sino no activo          */}
        nombre: {nombre}, apellido --D {apellido} edad: {edad}  estado: {estado? 'Activo': 'No-activo'}

        </h1>
        <Buttom
        name={'mi boton'}
        />
    </div>
  )
}
