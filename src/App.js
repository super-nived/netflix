import React from 'react'
import './App.css';
import { useState } from 'react';
import { Comedey,Action,Romance,Docs } from './componats/Apicategory/apicategory';
import Banner from './componats/banner/Banner';
import Nav from './componats/navbar/Navbar'
import Poster from './componats/posters/Poster';
import Postercollection from './componats/Postercollection/Postercollection';
import { Appcontest } from './contex';
import Footer from './componats/footer/Footer';
import Sectiontwo from './componats/section-two/Sectiontwo';
import Tv from './componats/Tv/Tv';


function App() {
  return (
    <div className="main">
    <Appcontest.Provider >

    <Nav></Nav>
    <Banner></Banner>
    <Postercollection></Postercollection>
    <Tv></Tv>
    <Sectiontwo></Sectiontwo>
     <Footer></Footer>

    </Appcontest.Provider>
    </div>
  );
}

export default App;