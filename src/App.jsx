
import { Head } from './Components/Head';
import { Body } from './Components/Body';
function App() {

  const cliente = { nombre: 'pepito', apellido: 'ramirez', edad: 55, estado: false }

  return (
    <div >
      <Head 
        cliente={cliente}
      />
      <Body
       
     
      />
    </div>
  )
}

export default App;
