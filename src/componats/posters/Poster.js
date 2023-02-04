import React from 'react'
import './poster.css'
import axios from 'axios'
import { API_KEY,imageUrl } from '../../constants/constants'
import { useState,useEffect } from 'react'
import Youtube from 'react-youtube';
import Banner from '../banner/Banner'


function Poster(props) {
   

    const [MovieTrailer,setMovieTrailer]=useState({})
    const [Movie,SetMovie] = useState([])
    const [Active,setActive] =useState('')


    useEffect(() => {
    axios.get(props.Api).then(
        (response)=>{
            
            SetMovie(response.data.results)
            
        }
    )
    
      return () => {
      }
    }, [])


      const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const YouTube = (id)=>{
        axios.get( `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((responce)=>{
    
            if(responce.data.results.length !== 0){
              setMovieTrailer({id:responce.data.results[0].key,status:true})

             
            }
            
        })
   console.log(MovieTrailer.status)
   
    }
    const DisplayNoneYoutube=()=>{
            setMovieTrailer({id:null})
    }

    return (
        <div className='main' >

            <h3  >{props.title}</h3>
            <div className='posters'>
            {              
                Movie.map((obj,index)=><div> 
                  <img onClick={ ()=>{YouTube(obj.id) ;console.log(obj.id)}} className= { Active==props.title ? 'active': 'poster' } key ={index} src={`${imageUrl+obj.backdrop_path}`} ></img> 
                </div>)    
             }
            </div >
             {  
                  MovieTrailer.id && <div className='Div_youtube'> <Youtube className='youtube'  videoId={MovieTrailer.id} opts={opts}  ></Youtube> 
                         <button  onClick={DisplayNoneYoutube}>skip</button>
                  </div>
                  
              }
            
            
        </div>
    )
}

export default Poster