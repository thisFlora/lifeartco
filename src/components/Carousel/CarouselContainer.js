import  { React, useEffect, useState }from "react";
import CarouselDetail from './CarouselDetail.js';
import image1 from "../../assets/lucho.jpeg";
import image2 from "../../assets/octavio.jpeg";
import image3 from "../../assets/sabrina.jpeg";

const TeamList = [
     {
          id: 1,
          img: image1,
          name:'Luciano',
          job: 'Co-Founder',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          linkedIn: 'https://www.linkedin.com/in/luciano-smidt-langer/',
          twitter: 'https://www.twitter.com/',
          instagram: 'https://www.instagram.com/'
     
     },
     {
          id: 2,
          img: image2,
          name:'Octavio',
          job: 'Co-Founder',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          linkedIn: 'https://www.linkedin.com/in/octavio-miranda-7491a3a7/',
          twitter: 'https://www.twitter.com/',
          instagram: 'https://www.instagram.com/'
     },
     {
          id: 3,
          img: image3,
          name:'Sabrina',
          job: 'Co-Founder',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          linkedIn: 'https://www.linkedin.com/in/sabrina-farah-rabbat-9a1785183/',
          twitter: 'https://www.twitter.com/',
          instagram: 'https://www.instagram.com/'
     }
];

const CarouselContainer = () => {
     const [team, setTeam] = useState([]);

     useEffect(() => {
          const getTeam = new Promise((res, rej) => {
               setTimeout(() => {
               res(TeamList);
          }, 2000);
     });
     getTeam
          .then((data) => {
               setTeam(data);
          });
}, []);
     
     return (
          <div className='carousel-container'>
               <div className='carousel-row'>
                    <CarouselDetail team={team} key={team.id}/>
               </div>
          </div>
)
}
export default CarouselContainer;