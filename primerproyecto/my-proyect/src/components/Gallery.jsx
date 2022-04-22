export default function Gallery({galeria}){
return(
    <div>
        {galeria.map((item)=>{return(
            <article key={item.name}> 
                <h2>{item.name}</h2>
               
                <img src={item.imageUrl}
                 alt={item.name}>
                </img></article>)
        })}

</div>
);

}

