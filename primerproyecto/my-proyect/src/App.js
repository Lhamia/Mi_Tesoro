
import './App.css';
import Gallery from './components/Gallery';
import './components/Todo.css'

import Todo from './components/Todo';


const xmen = [{
  name:"Lobezno",
  imageUrl:"https://cdn.ome.lt/legacy/images/galerias/Wolverine-Visual/Wolverine-1992-04.jpg",
 
}]


const App =() =>{
  
  return (
    <div className="App">
   
      <h1>Ayuda a Lobezno a canalizar su Ira</h1>
      
      <Gallery galeria={xmen}/>
     
     
      <Todo/>
      
     
    </div>
  
  );
}

export default App;
