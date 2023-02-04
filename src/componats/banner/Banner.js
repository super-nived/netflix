import React from 'react'
import { useEffect,useState } from 'react'
import './banner.css'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from  '../../axios'
import Youtube from 'react-youtube';

function Banner() {
  const [Data,setData] =useState([])
  const [count,setCount]=useState(1)
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
       setData(response.data.results)
       

  })
  
    return () => {
      
    }
  }, [])


  function changeBanner(){
    if (count <=19) {
      setCount(count+1)
    } else {
      setCount(1)
    }
    console.log('clicked')
  }
  console.log(Data)
  return (
<div className='banner_main' style={{backgroundImage:`url(${Data[count] ? imageUrl+Data[count].backdrop_path : ''})`}} >
    <div className='banner' >
  
        <div className='right'>
           <div className='title'><h1> {Data[count] ? Data[count].title : 'UNDEFINED' } </h1></div>
           <div className='buttons'>
           <a href='https://www.netflix.com/in/'> <button> PLAY NOW</button></a>
            <button onClick={changeBanner}>NEXT  </button>
            </div>
            <div className='category'>
             <p>romance</p>
              <p>action</p>
              <p>comedey</p>
              <p>thriller</p>
            </div>
            <p className='para'>Send your soul on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
     </div>
   <div className="fade"></div>
</div>
  )
}

export default Banner