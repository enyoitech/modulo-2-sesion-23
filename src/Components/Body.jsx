import React from 'react'
import { Buttom } from './Buttom';

export const Body = (props) => {
  const { cliente }= props;
  const { nombre }= cliente | null;
  return (
    <div>
      desde mi componente Body: {nombre? nombre : 'No tiene nombre'}
      <Buttom
        name={'boton'}
        />
         <Buttom
        name={'esto es otro btn'}
        />
    </div>
  )
}
