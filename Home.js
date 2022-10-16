import React from 'react'
import { Link } from 'react-router-dom'
import BImage from '../locker/bg4.jpg';
import '../styles/Home.css';
import Login from './Login';

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BImage})`}}>
    <div className='headerContainer' >
        <h1>SWAPOUT COLLECTIONS</h1>
        <h2>FASHION AND DESIGNS</h2>
        <Link to='/login'>
            <button>SIGN UP

            </button>
        </Link>
    </div>
    </div>
  )
}

export default Home
