import React from 'react'
import img from '../assets/images/service.png'

const Repair = () => {
  return (
    <section className="repair">
        <div className="container">
            <div className="repair-content">
                <img src={img} className='repair-img' alt="" />
                <h1 className="repair-title">Bu sahifa tez kunda ishga tushadi.</h1>
            </div>
        </div>
    </section> 
  )
}

export default Repair