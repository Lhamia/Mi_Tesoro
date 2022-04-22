
import './Tabla.css'
import React, { useState } from "react"


const Tabla = ({contador, carta ,position})=>{
    const [cara, setCara]= useState(carta.x)

    const switchCara = (randomcarta,)=>{
        
        if (position === randomcarta){
            setCara(carta.chest)
            setTimeout(() => {
            alert('ENCONTRADO EN ..... '+(contador+1)+' INTENTOS🎉🎆!')
            window.location.reload()   
            }, 300);
            
        }else{
            setCara(carta.skull)}
       
    }
    return <div>     
       <img  className="carta" onClick={()=> switchCara(carta.randomcarta)} src = {cara} alt={carta.randomcarta}></img>
   
    
   
    </div>
}




export default Tabla