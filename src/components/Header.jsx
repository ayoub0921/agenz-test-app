import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdOutlineLaunch } from 'react-icons/md'
import maroc from '../images/maroc_prev_ui.png'
import agenz from '../images/agenzimg_prev_ui.png'
import '../styles/header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={agenz} alt="logo" width='100px' height='50px' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Acheter
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Louer</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Estimer
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href='#'>Prix Immobiliers</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Credit
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href='#'>Agence</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0" role="search">
                        <li className='me-4'>
                            <a href="" className="nav-link" aria-current="page">
                                <img src={maroc} alt="logo" width='21px' height='18px' />
                                <span className='mx-2'>Arabe</span>
                            </a>
                        </li>
                        <li className='me-4'>
                            <a href="" className="nav-link" aria-current="page">
                                <FaRegUserCircle />
                                <span className='mx-2'>Connexion</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="nav-link" aria-current="page">
                                <span className='mx-2'>Offre Pro</span>
                                <MdOutlineLaunch fontSize='20px' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header