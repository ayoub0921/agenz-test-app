import React from 'react'
import Map from './Map'
import Cards from './Cards'

const Home = () => {
  return (
    <div className='row'>
          <div className="col-md-6" >
            <Map/>
          </div>
          <div className="col-md-6">
            <Cards/>
          </div>
    </div>
  )
}

export default Home