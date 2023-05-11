import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import './Residents.css'

function Residents() {


  const universes = () => {
    
  }


  
  const [dimensions, setDimensions] = useState();

  useEffect(() => {
    const firstDimension = Math.floor(Math.random() * 126) + 1;
    const URL = `https://rickandmortyapi.com/api/location/${firstDimension}/`;

    axios
      .get(URL)
      .then((res) => setDimensions(res.data))
      .catch((err) => console.log(err));
    console.log(dimensions);
  }, []);


  const residents = dimensions?.residents;
  const numberResidents = dimensions?.residents.length
  console.log(numberResidents);



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
console.log(allDimensions)





  return (
    <div className="">
      <div className="container_logo grid mt-[20px]">
      <div className="logo z-40 flex justify-center  ">
        <img src="/images/logo.png" alt=""  className="logo relative z-40" />
      </div>

      <form onSubmit={dimentionAdd} className=" flex justify-center mt-[20px] ml-[-45px] max-w-[1220px]">
        <input  id="searchD"
          type="text"
          className="w-[200px] h-[30px] z-40 rounded-[20px] border-[3px] border-[brown] text-center mr-[60px]"
          placeholder="Type a location Id..."
        />
        <button className="absolute w-[100px] h-[30px] z-40 rounded-[20px] bg-yellow-300 ml-[180px] border-[3px] border-[brown] al ">
          Search
        </button>
      </form>
      </div>
      <div className="relative grid description_universe z-[70] bg-black text-white align-middle mt-[20px] font-[10px] justify-center bg-slate-600/60 mx-auto h-[140px]">
        <p className="description__name self-center text-center text-[20px]"><b>{dimensions?.name} </b> </p>
        <p className="description__type text-center"><b>Type: </b><span>{dimensions?.type}</span></p>
        <p className="description__dimension text-center"><b>Dimension: </b>  <span>{dimensions?.dimension}</span></p>
        <p className="description__population text-center"><b>Population: </b>  <span>{dimensions?.residents.length}</span></p>

      </div>

      <div className="card grid justify-center   justify-items-center mt-[120px] min-[700px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-4 gap-[50px]  ">
       {residents?.slice(startCut, endCut).map((resident) => (
        
        <Card key={resident} info={resident} />
  
          

      ))}
      </div>
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
