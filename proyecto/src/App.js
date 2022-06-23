import './App.css';
import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import {ordenAlfabetico, setAves} from "./action/index"


function App() {
 const [orden, setOrden] = React.useState("")
 const [regiones,setRegion] = React.useState(null)

  //para despachar mis acciones
  const dispatch = useDispatch();
  const todasAves = useSelector((state) => state.aves);


React.useEffect(() => {

  obtenerAves();
  obtenerRegion()
}, [])

  
  const obtenerAves = async() => {
    const data = await fetch ("https://aves.ninjas.cl/api/birds")
    const aves = await data.json()

    dispatch(setAves(aves))
   
  }

  const obtenerRegion = async() => {
    const data1 = await fetch ("https://apis.digital.gob.cl/dpa/")
    const region = await data1.json()
    console.log(region)
    setRegion(region)
   
  }

  //hago el filtro

function handleOrdenAlfa(e) {
  e.preventDefault();
  dispatch(ordenAlfabetico(e.target.value));
  setOrden("Ordenado ${e.target.value}")
}

  return (
    <div className="App">
      <h1>Proyecto</h1>
      <div className='Filtros'>
         <select className='filtroalfabetico' onChange={e => handleOrdenAlfa(e)}>
           <option value="all">Orden Alfabetico</option>
           <option value="A-Z">A-Z</option>
           <option value="Z-A">Z-A</option>
         </select>
      </div>
      <ul>
        {
          todasAves.map(e => (
            <li key={e.id}>{e.name.spanish}</li>
            
          ))
        }
      </ul>
 

    </div>
  );
}

export default App;
{/* <li key={e.id}>{e.images.full}</li> */}
