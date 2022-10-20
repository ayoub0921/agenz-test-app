import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import '../styles/filtre.css'

const Filtre = () => {
  return (
    <div className='filtre bg-white shadow-sm row'>
        <div className='position-relative col-md-5'>
            <input type="serch" className="serch_input" placeholder="Enter une ville , un quartier , une adresse" />
            <span className='serch_icon position-absolute'><AiOutlineSearch/></span>
        </div>
        <ul className='type_filtre col-md-7  d-flex justify-content-start flex-wrap'>
            <li >A vendre</li>
            <li > Prix</li>
            <li >Type</li>
            <li >Surface</li>
            <li >Chambres</li>
            <li className='active'>Valider</li>
        </ul>
    </div>
  )
}

export default Filtre