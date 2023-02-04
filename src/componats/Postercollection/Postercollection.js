import React from 'react'
import { Comedey,Action,Romance,Docs } from '../Apicategory/apicategory'
import Poster from '../posters/Poster'
import { useState } from 'react'
import './Postercollecton.css'


function Postercollection() {
const [Active,setActive] =useState('')
    
  return (
    <div>
    <div onClick={()=>{setActive('comedy')}  } className={Active == 'comedy'? 'active' :'' } ><Poster   title='comedey' Api ={Comedey} ></Poster></div>
    <div onClick={()=>{setActive('joner')}  } className={Active == 'joner'? 'active' :'' } ><Poster title='joner' Api = {Action} isSmall></Poster></div>
    <div onClick={()=>{setActive('romance')} } className={Active == 'romance'? 'active' :'' } ><Poster title='romance' Api = {Romance} isSmall></Poster></div>
    <div onClick={()=>{setActive('Docs')} } className={Active == 'Docs'? 'active' :'' } ><Poster title='triller' Api = {Docs} isSmall></Poster></div>
    </div>
  )
}

export default Postercollection