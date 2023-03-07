import React, { useState, useEffect } from 'react';
import './App.css'


const App = () => {

const [first, setfirst] = useState("")
const[inp,getInp]=useState("");
const[movie,movieDetails]=useState("")

useEffect(() => {
  async function getData(){
    const streaResponse= await fetch(`https://www.omdbapi.com/?t=${first}&apikey=4038d0e7`);
    const textResponse= await streaResponse.text();
    const jsonData=JSON.parse(textResponse);
    movieDetails(jsonData)
    // console.log(jsonData)
    
  }
 
  getData()
}, [first])




  return (
    <div className='App'>
      <div>
        <div className='header'>
          HOOKED
        </div>
        <div className='inputContainer'>
          <input type="text" className='inp' onChange={(e)=>{
              getInp(e.target.value);
              console.log(inp)
          }}/>
          <button className='but' onClick={()=>{
            setfirst(inp)
            console.log(first)
          }} >Search</button>
        </div>
        <p style={{textAlign:"center",fontSize:"1.3rem",marginTop:"25px"}}>Sharing a few of our favourite movies</p>

        <div className='movieContainer'>
           <div className='title'>
              <p className='movieTitle'>{movie.Title}</p>
               <img src={movie.Poster} alt='image1' className='image'/>
               <p className='movieYear'>{movie.Year}</p>
            </div>
        </div>

     
      </div>
    </div>
  )
}

export default App