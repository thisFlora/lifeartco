import {React} from "react";
import { NavLink } from 'react-router-dom';
import  logoLi from '../../assets/logo-linkedin.png';
import  logoTw from "../../assets/logo-twitter.png";
import  logoIn from "../../assets/logo-instagram.png";

const CarouselItem = ({ team }) => {
     return (
          <>
          <div className="card-container">
               <div className="card">
                    <div className="card-image">
                         <img src={team.img} alt="team" className="card-img"></img>
                         <div className="circle">
                         </div>
                    </div>
                    
                    <div className="card-body">
                         <h3 className="card-title">{team.name}</h3>
                         <div className="text-left">
                         <span className="period">• </span><span className="card-job">{team.job}</span>
                         <p className="card-text">{team.description}</p>
                         </div>
                         <div className="card-social">
                              <NavLink to="/" className="social-link">    
                                   <img src={logoLi} alt="Logo Facebook" className="logo"></img>
                              </NavLink>
                              <NavLink to="/" className="social-link">   
                                   <img src={logoTw} alt="Logo Twitter" className="logo"></img>
                              </NavLink>
                              <NavLink to="/" className="social-link"> 
                                   <img src={logoIn} alt="Logo Instagram" className="logo"></img> 
                              </NavLink>
                         </div>
                    </div>
               </div> 
          </div>
          </>
     );
};

export default CarouselItem;