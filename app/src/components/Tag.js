import React ,{ useState ,useEffect} from 'react'
import axios from 'axios';
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 

const Tag = () => {

  // const [gif,setGif] = useState('');
  // const [loading,setLoading] = useState(false);
  const [tag,setTag] = useState('');
  
  // async function fetchData(){
  //   setLoading(true);
  //    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag} `;
  //    const {data} = await axios.get(url);
  //    const imageSource = data.data.images.downsized_large.url;
  //    setGif(imageSource);
  //    setLoading(false);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])

  // function clickHandler(){
  //   fetchData();
  // }

  const {gif,loading,fetchData} = useGif(tag);

  function changeHandler(event){
    setTag(event.target.value);
  }
  

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center mt-[15px] '>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random Gif</h1>
      
      {loading?(<Spinner/>):(<img src={gif} alt="giphy" width="450"/>)}

      <input onChange={changeHandler} className='w-10/12 text-lg py-2 rounded mb-[3px]' />
     
      <button onClick={()=>{fetchData}}
              value={tag}
       className='w-9/12 bg-white opacity-80 rounded-sm text-lg py-2'>
        Generate 
      </button>
    </div>
  )
}

export default Tag
