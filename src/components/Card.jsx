import axios from "axios";
import React, { useEffect, useState } from "react";

function Card({ info }) {
  const [infoResident, setInfoResident] = useState();

  useEffect(() => {
    axios
      .get(info)
      .then((res) => setInfoResident(res.data))
      .catch((err) => console.log(err));
    console.log(infoResident);


    
  }, []);

  return (
    <>
        <section className="h-[350px] flex z-20 w-[220px] justify-center mt-[20px] gap-10 ">
          {" "}
          <div
            className={`absolute   h-[140px] w-[140px]  ml-[60px] mb-[160px] z-[70]`}
          >
            <div className="flex justify-center align-middle mt-[-100px] ml-[-50px] ">
              <img
                src={infoResident?.image}
                alt=""
                className=" bg-cover self-center h-[140px] w-[140px]  rounded-[50%] border-[6px] border-[brown] "
              />
            </div>
            <div className="absolute flex align-middle justify-center h-[20px] w-[100px] z-50 ml-[-10px] mt-[-20px] border-[2px] border-[brown]  bg-black">
              {
                infoResident?.status === 'Dead' ?
                <div className="flex justify-center align-middle">
                  <div className="h-[15px] w-[15px] rounded-[50%] bg-red-600"></div>
                  <p className="ml-[10px] text-white mt-[-5px]">Dead</p> 
                </div>
                 
                 : infoResident?.status === 'Alive'? 
                 <div className="flex justify-center align-middle">
                  <div  className="h-[15px] w-[15px] rounded-[50%] bg-green-600"></div>
                  <p  className="ml-[10px]  text-white mt-[-5px]">Alive</p> 
                </div>
                 : 
                 <div className="flex justify-center align-middle">
                  <div className="h-[15px] w-[15px] rounded-[50%] bg-gray-600 "></div>
                  <p  className="ml-[10px]  text-white mt-[-5px]">Uknown</p> 
                </div>          }


            </div>
          </div>
          <div className="flex flex-col border-[6px] border-[brown] rounded-[20px] w-[280px] h-[200px] bg-[rgb(133,104,136)] z-40">
            <div className="flex h-[140px] bg-[rgb(237,226,136)] rounded-[14px] z-50 justify-center items-center">
              <h3 className="mt-[20px] text-[rgb(156,85,82)]">
                <b>{infoResident?.name}</b>
              </h3>
            </div>
            <div className="flex rounded-br-[180px] rounded-bl-[20px] bg-[rgb(201,190,220)] h-[200px] w-[95%] mt-[-10px] justify-start items-center z-40 ">
              <ul className="ml-[20px] w-[100px]">
                <li className="flex justify-between text-[12px] text-[rgb(156,85,82)] mr-[100px] w-[210px]">
                  RAZA <span className="text-white text-hidden w-[105px] h-[24px]">{infoResident?.species}</span>
                </li>
                <li className="flex justify-between text-[12px] text-[rgb(156,85,82)] mt-[6px] w-[210px]">
                  ORIGEN <span className="text-white text-hidden w-[105px] h-[24px]">{infoResident?.origin.name}</span>
                </li>
                <li className="flex justify-between text-[12px]  mt-[6px] text-[rgb(156,85,82)] w-[210px]">
                  APARICIONES <span className="text-white text-hidden w-[105px] h-[24px] ml-[5px]"> {infoResident?.episode.length}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
     
    </>
  );
}

export default Card;
