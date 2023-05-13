import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import './Residents.css'

function Residents() {


 


  
  const [dimensions, setDimensions] = useState();
  const [changeUniverse, setChangeUniverse] = useState(true)

  useEffect(() => {
    const firstDimension = Math.floor(Math.random() * 126) + 1;
    const URL = `https://rickandmortyapi.com/api/location/${firstDimension}/`;

    axios
      .get(URL)
      .then((res) => setDimensions(res.data))
      .catch((err) => console.log(err));
  }, [changeUniverse]);


  const residents = dimensions?.residents;
  const numberResidents = dimensions?.residents.length



  const dimentionAdd = (e) =>{
    e.preventDefault()
    const newDimension = e.target.searchD.value


if(newDimension > 0 && newDimension < 127){


    const URL = `https://rickandmortyapi.com/api/location/${newDimension}/`

    axios.get(URL)  
    .then((res) => setDimensions(res.data))
    .catch(err => console.log(err))
    setCurrentPage(1)
}

else {
  alert(`No es una dimension valida, las dimenciones son del 1 al 126. Intente de nuevo`)
}

}




const [currentPage, setCurrentPage] = useState(1)

const RESIDENTS_PER_PAGE = 20

const arrayPages = []
const quantityPages = Math.ceil(dimensions?.residents.length / RESIDENTS_PER_PAGE)

  for( let i = 1; i <= quantityPages; i++){
    arrayPages.push(i)
  }

const startCut = currentPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE
const endCut = currentPage * RESIDENTS_PER_PAGE 



const [searchDimension, setSearchDimension] = useState()


const allDimensions = []

useEffect(()=> {
    const URL = `https://rickandmortyapi.com/api/location/`;
    

    axios
      .get(URL)
      .then((res) => setSearchDimension(res.data))
      .catch((err) => console.log(err));

      for( let i = 0; i >= searchDimension?.results.length; i++){
        allDimensions.push(searchDimension?.results[i].name)
      }
    

},[])

const changeRandomUniverse = () => {
  setChangeUniverse(!changeUniverse)
}




  return (
    <div className="max-w-screen pt-[20px]">

      {/* imagen del logo y form para busqueda */}
      <div className="container_logo flex flex-col min-[750px]:flex-row min-[750px]:px-14 ">
      <div className="logo z-40 flex justify-center justify-self-end">
        <img src="/images/logo.png" alt=""  className="logo relative z-40" />
      </div>

      <div className="flex flex-col items-center w-full min-[750px]:flex-row justify-end ">
        <button onClick={changeRandomUniverse} className=" z-50">
            <i class='bx bx-refresh text-[30px] text-white hover:text-green-400'></i>      
          </button>
      <form onSubmit={dimentionAdd} className=" flex justify-items-center justify-center w-full  max-w-[400px] px-2 ">
        <input  id="searchD"
          type="text"
          className=" h-[30px] w-[70%]  z-40  border-[3px] border-[brown] text-start pl-[10px]"
          placeholder="Type a location Id..."
        />
        <button className="w-[30%] right-0  h-[30px] z-40  bg-yellow-300 border-[3px] border-[brown] self ">
        
          Search
        </button>
      </form>
      </div>
     
      </div>

      {/* Tabla de descripcion de los universos */}

      <div className="relative grid description_universe w-[90%] z-[70] bg-black text-white align-middle mt-[20px] font-[10px] justify-center bg-slate-600/60 mx-auto h-[160px] min-[550px]:grid-cols-3 min-[550px]:grid-row-2 min-[550px]:text-[20px] ">
        <p className="description__name self-center text-center text-[20px] min-[550px]:row-start-1  min-[550px]:col-span-3 min-[550px]:col-start-1 min-[550px]:text-[30px]"><b className="text-center">{dimensions?.name} </b> </p>
        <p className="description__type text-center"><b>Type: </b><span>{dimensions?.type}</span></p>
        <p className="description__dimension text-center"><b>Dimension: </b>  <span>{dimensions?.dimension}</span></p>
        <p className="description__population text-center"><b>Population: </b>  <span>{dimensions?.residents.length}</span></p>

      </div>

      {/* div para mostrar las card de los residentes */}

      <div className="card grid justify-center   justify-items-center mt-[120px] grid-cols-[repeat(auto-fill,_250px)]  gap-[50px]  ">
       {residents?.slice(startCut, endCut).map((resident) => (
        
        <Card key={resident} info={resident} />
  
      ))}
      </div>

      {/* Paginacion */}
      <div>
           <ul className="dimensions__pages relative z-[70] flex gap-[5px] mt-[-90px] justify-center">
            {
              arrayPages?.map(page => <li onClick={()=> setCurrentPage(page)} key={page} className={`text text-[brown] w-[40px] h-[40px] ${page === currentPage && "w-[50px] h-[50px] mt-[-5px]"} rounded-[50%] bg-[rgb(237,226,136)] border-[6px] border-[brown] flex items-center justify-center`}>{page}</li>)
            }
          </ul> 
        
      </div>
    </div>
  );
}

export default Residents;
