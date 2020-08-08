import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

import api from '../../services/api';

function Landing(){
    //initialize the value as zero because React has to put a value on the static variable
    //and take some time to request the real value from the api
    const [totalConnections, setTotalConnections] = useState(0);

    //This function triggers the funtion passed when the variable in the array
    //changes. If the array is empty then the function is executed one time
    useEffect(()=> {
        api.get('connections').then(res => {
            const { total } = res.data;

            setTotalConnections(total);
        })
    }, [])


    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" /> {/*'{}'means javascript object*/}
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingImg} alt="" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-class" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas"/>
                        Dar Aulas
                    </Link>

                </div>
            
                    <span className="total-connections">
                        Total de {totalConnections} conexões realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
                    </span>
            
            </div>

        </div>
    )
}

export default Landing;