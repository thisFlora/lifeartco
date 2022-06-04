import  { React, useEffect, useState }from "react";
import CarouselDetail from './CarouselDetail.js';
import image1 from "../../assets/LUCHO.jpeg";
import image2 from "../../assets/OCTAVIO.jpeg";
import image3 from "../../assets/SABRINA.jpeg";

const TeamList = [
     {
          id: 1,
          img: image1,
          name:'Luciano',
          job: 'Lorem',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          facebook: 'https://www.facebook.com/',
          twitter: 'https://www.twitter.com/',
          instagram: 'https://www.instagram.com/'
     
     },
     {
          id: 2,
          img: image2,
          name:'Octavio',
          job: 'Lorem',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          facebook: 'https://www.facebook.com/',
          twitter: 'https://www.twitter.com/',
          instagram: 'https://www.instagram.com/'
     },
     {
          id: 3,
          img: image3,
          name:'Sabrina',
          job: 'Lorem',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          facebook: 'https://www.facebook.com/',
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