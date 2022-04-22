
import './App.css';
import Tabla from './Components/Tabla';
import skull from './img/skull.png'
import x from './img/x.png'
import chest from './img/chest.png'
import { useState } from 'react';

const randomcarta = (min,max)=>{
  return Math.floor(Math.random()*(max-min))+min;
}

const images ={
  x: x,
  chest: chest,
  skull: skull,
  randomcarta: randomcarta(1,21),
 }

function App(){
  const position = 1;
  const [contador, setContador]= useState(0);
  
  function clicked(){
    setContador(contador+1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Encuentra el tesoro entre las siguientes cartas!</h1>
        <div className="marcador">
          <h4>Intentos:</h4>
          
          <h4>{contador}</h4>
          </div>
        
      <div  onClick={clicked}  className="Mesajuego">
        
        <div className='tabla'>
        <Tabla className="carta" contador={contador} carta={images} position={position} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 1} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 2} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 3} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 4} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 5} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 6} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 7} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 8} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 9} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 10} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 11} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 12} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 13} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 14} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 15} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 16} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 17} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 18} />
        <Tabla className="carta" contador={contador} carta={images} position={position + 19} />
</div>
        
      </div>
      
      
    
       
      </header>
    </div>
  );
}

export default App;
