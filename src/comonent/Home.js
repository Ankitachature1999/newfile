import React from 'react'
import Navbar from './Navbar'
function Home() {
  return (
    <React.Fragment>
      <div className='w-3/4 m-auto'>
<div className='mt-20'>
          {data.map((d) => (
            <div className="div1">
              <div style={{height:56, justifyContent: 'center',alignItems: 'center',backgroundColor: 'indigo'}}>
            < img src={d.img} style={{width:200, height:200,borderRadius:50}}/>
           </div>

            <div>
            <p>{d.name}</p>
            <p>{d.review}</p>
            <button>Read more</button>
            </div>
            </div>
          ))}
</div>
      </div>
  
    </React.Fragment>
  )
  }
  const data =[
    {
      name:'ankita chature',
      img: '/Student/Big-Data.jpeg',
      review:'ankita is a fhiugjh jhyfthgjhv hjfhyvgv'
    },
    {
      name:'ankita chature',
      img: '/Student/Big-Data.jpeg',
      review:'ankita is a fhiugjh jhyfthgjhv hjfhyvgv'
    },
    {
      name:'ankita chature',
      img: '/Student/Big-Data.jpeg',
      review:'ankita is a fhiugjh jhyfthgjhv hjfhyvgv'
    },
    {
      name:'ankita chature',
      img: '/Student/Big-Data.jpeg',
      review:'ankita is a fhiugjh jhyfthgjhv hjfhyvgv'
    },
    {
      name:'ankita chature',
      img: '/Student/Big-Data.jpeg',
      review:'ankita is a fhiugjh jhyfthgjhv hjfhyvgv'
    },
    {
      name:'ankita chature',
      img: '/Student/Big-Data.jpeg',
      review:'ankita is a fhiugjh jhyfthgjhv hjfhyvgv'
    },
  ]
export default Home;