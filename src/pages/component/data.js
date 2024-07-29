import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";
import { BsSpeedometer } from "react-icons/bs";
import Image from "next/image";

export default function Data() {
  const [seacrh, setSearch] = useState("karachi");
  const [data,setData]= useState("")
  const [image,setImage]=useState("")
  const [weather,setWeather] = useState()
 

  const setValue = async () => { 
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${seacrh}&appid=dd6355c56b75cc2d9c9c0effed33d639&units=metric`
    );
    const result = await res.json();
    setData(result)
 {data?.weather?.map((items)=>{
return setWeather(items.main)
 })}
 console.log(weather)
  if(weather == "Smoke"){
      setImage("/clouds.png")
      }
      else if(weather == "Clear"){
        setImage("/sun.png")
      }
      else if(weather == "Rain"){
        setImage("/rain.png")
      }
      else if(weather == "Drizzle"){
        setImage("/drizzle.png")
      }
      else if(weather == "Mist"){
        setImage("/mist.png")
      }
      else if(weather == "Clear"){
        setImage("/sun.png")
      }
      else if(weather == "Clouds"){
        setImage("/clouds.png")
      }
      else{weather === setImage("/clouds")}

  };
  useEffect(()=>{
  
    setValue()
  },[])
  
  return (
    <main>
      <div className="flex justify-center h-[100vh] items-center ">
        <div className="bg-gradient-to-r from-cyan-500 to-orange-300 p-6 rounded-lg text-center">
          <div className="bg-white p-2 border-2 rounded-lg">
            {" "}
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search here"
              type="search"
              name=""
              id=""
              className="   rounded-xl bg-transparent text-black p-1 border-none "
            />
            <button
              className="ml-2 rounded-xl  text-gray-500"
              onClick={setValue}
            >
              <FaSearch />
            </button>
          </div>
          <p className="flex justify-center mt-4">
        <Image src={image} width={100} height={100} alt="image loading wait.."></Image> </p>
          <p className="text-6xl font-semibold">
          {data?.main?.temp}<span>&#176;c</span>
          </p>
          <p className="font-semibold text-3xl">{data.name}</p>
          {/* <p className="font-semibold ">{weather}</p> */}
          <section className="flex justify-between mt-10">
            <div className="humidity text-xl">
              <span>
                <LuWaves className="inline " /> <span>{data?.main?.humidity}%</span>
              </span>
              <p className="-mr-16 -mt-2 text-base">Humidity</p>
            </div>
            <div className="wind text-xl">
              <span className="">
                <BsSpeedometer className="inline  mr-2" />
                <span >{data?.wind?.speed}km/h</span>
              </span>
              <p className="ml-8 -mt-2 text-base">Wind Speed</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
