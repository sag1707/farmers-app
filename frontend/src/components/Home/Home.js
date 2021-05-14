// import React from 'react';

// const Home = () => {

//     return (
//         <div>
//         <h1>HomePage</h1>
           
//         </div>);
    
// };

// export default Home;


import React from 'react';
import './Home.css';
import bookpg from '../../assets/img/f1.jpg';
import videoSource from '../../assets/books.mp4';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Container'>
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='Content'>
        <div className='SubContent'>
          <h1>Farmer's Crops Catolog</h1>
          <p>Manage your Crops/Products with Ease</p>
          <button type='button' className='btn btn-outline-dark'>
            <Link to='/register'>Get started</Link>
          </button>
          <img src={bookpg} alt='profile' />
        </div>
      </div>
    </div>
  );
};

export default Home;