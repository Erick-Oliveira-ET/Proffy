import React from "react";

import { Link } from 'react-router-dom';

import backIcon from '../../assets/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import "./styles.css"

// Define the properties
interface PageHeaderProps{
    title: string;
}

// Define the PageHeader as a function component 
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="voltar"/>
                </Link>
                <img src={logoImg} alt=""/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>

        </header>
    );
}

export default PageHeader;