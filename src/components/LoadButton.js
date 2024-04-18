import React, { useState } from 'react'
import ProductsItem from '../Product.json'
import '../App.css'


const LoadButton = () => {
    const[show, setShow] = useState(4);

    const handleClick = () =>{
        setShow(prevShow => prevShow + 4)
    }
  return (
    <>
    <h2 className='text'>Load More Button </h2>
    <div className='container'>
        <div className='items'>
            {
                ProductsItem.slice(0, show).map((val, index)=>{
                    return(
                        <div key={index}>
                            <img src={val.url} alt={val.title} />
                            <h2>{val.title}</h2>
                            <p>{val.description}</p>
                        </div>
                    )
                })
            }
             <button onClick={handleClick}>Read More....</button>
        </div>
       
      
    </div>
    </>
  )
}

export default LoadButton
