import React from 'react'
import { useState } from 'react'
import '../styles/cards.css'
import { BsFillSuitHeartFill } from 'react-icons/bs'

const Cards = () => {
    const [cards, setCard] = useState([
        {
            id: 1,
            hearthColor: '#fff',
            imageUrl: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600',
            date: '3 dats on agenz',
            price: '1,110,122',
            name: 'Maison a vendre',
            local: 'Marrakesh, Ennakhil',
            chambre: '3',
            size: '230',
            annonce: 'Marrakech concers invest'
        },
        {
            id: 2,
            hearthColor: '#000',
            imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
            date: '3 dats on agenz',
            price: '1,110,122',
            name: 'Maison a vendre',
            local: 'Marrakesh, Ennakhil',
            chambre: '3',
            size: '230',
            annonce: 'Marrakech concers invest'
        },
        {
            id: 3,
            hearthColor: '#000',
            imageUrl: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
            date: '3 dats on agenz',
            price: '1,110,122',
            name: 'Maison a vendre',
            local: 'Marrakesh, Ennakhil',
            chambre: '3',
            size: '230',
            annonce: 'Marrakech concers invest'
        },
        {
            id: 4,
            hearthColor: '#000',
            imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
            date: '3 dats on agenz',
            price: '1,110,122',
            name: 'Maison a vendre',
            local: 'Marrakesh, Ennakhil',
            chambre: '3',
            size: '230',
            annonce: 'Marrakech concers invest'
        },
        {
            id: 5,
            hearthColor: '#000',
            imageUrl: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=600',
            date: '3 dats on agenz',
            price: '1,110,122',
            name: 'Maison a vendre',
            local: 'Marrakesh, Ennakhil',
            chambre: '3',
            size: '230',
            annonce: 'Marrakech concers invest'
        },
        {
            id: 6,
            hearthColor: '#fff',
            imageUrl: 'https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&w=600',
            date: '3 dats on agenz',
            price: '1,110,122',
            name: 'Maison a vendre',
            local: 'Marrakesh, Ennakhil',
            chambre: '3',
            size: '230',
            annonce: 'Marrakech concers invest'
        },
    ])


    return (
        <div className='cards bg-white shadow'>
            <div className="title">
                <h3>Immobilier et maisons à vendre partout au Maroc</h3>
                <div className='card-filter d-flex align-items-center justify-content-between flex-nowrap'>
                    <span className='agent'>{cards.length} Agent listings</span>
                    <div className='filter'>
                        <label for="date" className='mx-2'>Filtre par:</label>
                        <select name="date" id="date" className='selectBox'>
                            <option value="date">date - du plus recent ou plus ancien </option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="card-content row">
                {cards.map((c, index) => (
                    <div className="card-item shadow-sm col-6 position-relative" key={index}>
                        <img className='card-img' src={c.imageUrl} alt="" width='100%' height='60%' />
                        <div className='card-head position-absolute d-flex justify-content-between'>
                            <p className='date'>{c.date}</p>
                            <span className='card-hearth'>
                                <BsFillSuitHeartFill cursor='pointer' className='hearth' fontSize='28px' color={c.hearthColor} />
                            </span>
                        </div>
                        <div className="card-desc">
                            <h3 className='price'>{c.price} MAD</h3>
                            <div className="desc">
                                <ul className='d-flex card-desc-first'>
                                    <li>{c.name} |&nbsp;</li>
                                    <li >
                                        <span className='fw-bold'>
                                            {c.chambre} &nbsp;
                                        </span>
                                        Chambre
                                        |&nbsp;
                                    </li>
                                    <li>
                                        <span className='fw-bold'>
                                            {c.size} &nbsp;
                                        </span>
                                        m²
                                    </li>
                                </ul>
                                <p className='card-local'>{c.local}</p>
                                <span className='card-anonce'>ANNONCE PAR: {c.annonce}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards