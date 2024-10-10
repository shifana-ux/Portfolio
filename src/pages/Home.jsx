import React from 'react';
import image from '../assets/1.jpg'


const Home = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <section>
      
      
      
      <h1 style={{textAlign: 'center',color:'#5e7949'}}>Hi ,</h1>
      <h1 style={{textAlign: 'center',color:'#5e7949'}}>I am</h1>
      <h1 style={{textAlign: 'center',color:'hsl(97, 49%, 21%)'}}>Shifana.</h1>
      <p style={{textAlign: 'center',color:'#5e7949'}}>I’m a MERN stack developer passionate about creating<br></br> interactive web applications.</p>
    
    </section>
    <div  >
    <img style={{width: '300px', height: '200px'}} src={image}></img>
    </div>
    </div>
  );
};

export default Home;
