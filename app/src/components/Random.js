import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 



const Random = () => {

  const [gif,setGif] = useState('gfa');
  
  
  async function fetchData(){
    const url = 'https://api.giphy.com/v1/gifs/random?api+key=${API_KEY}';
     const output = await axios.get(url);
     console.log(output);
  }

  useEffect(()=>{
    fetchData();
  },[])

  function clickHandler(){

  }
  

  return (
    <div className='w-1/2 h-[450px] bg-green-500 rounded-lg border border-black flex flex-col items-center mt-[15px] '>
      <h1 className='text-2xl underline uppercase font-bold'>Random Gif</h1>
      <img src={gif} width="450"/>
      <button onClick={clickHandler} className='w-9/12 bg-white opacity-80 rounded-sm text-lg py-2'>
        Generate 
      </button>
    </div>
  )
}

export default Random
