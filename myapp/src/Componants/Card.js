import React from 'react'

export const Card = () => {
  return (
    <div>
        <h1 className='center' >Classes</h1>
        <div className='container d-flex '>
            <div className='card ' style={{width:'18rem'}}></div>
            <img src='logo192.png' className='"card-img-top' alt='add image'/>
            <div className='card-body'>
                <h5 className='card-title'>Card Title</h5>
                <p className='card-text'>l my name is </p>
                <a href='# 'className='btn'>View</a>
            </div>

            <div className='card' style={{width:'18rem'}}></div>
            <img src='logo192.png' className='"card-img-top' alt='add image'/>
            <div className='card-body'>
                <h5 className='card-title'>Card Title</h5>
                <p className='card-text'>l my name is </p>
                <a href='# 'className='btn'>View</a>
            </div>

            <div className='card' style={{width:'18rem'}}></div>
            <img src='logo192.png' className='"card-img-top' alt='add image'/>
            <div className='card-body'>
                <h5 className='card-title'>Card Title</h5>
                <p className='card-text'>l my name is </p>
                <a href='# 'className='btn'>View</a>
            </div>
        </div>

    </div>
  )
}
