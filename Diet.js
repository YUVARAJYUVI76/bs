
import React from 'react';
import { DietList } from '../assist/DietList';
import DietItem from '../components/DietItem';
import '../styles/Diet.css';


function Diet() {
  return (
    <div className='diet'>
    <h1 className='dietTitle'>Fashions have to Purchase</h1>
      <div className='dietList'>
      {DietList.map((menuItem,Key)=>
      {
        return(<DietItem 
        key={Key}
        image={menuItem.image} 
        name={menuItem.name}/>);
      })}
      </div>
    </div>
  );
}

export default Diet
