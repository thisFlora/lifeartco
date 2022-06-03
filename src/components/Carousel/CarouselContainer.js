import  { React, useEffect, useState }from "react";
import CarouselDetail from './CarouselDetail.js';

const TeamList = [
     {
          id: 1,
          img: 'https://media.istockphoto.com/photos/he-brings-something-valuable-and-unique-to-the-team-picture-id1008372000?k=20&m=1008372000&s=612x612&w=0&h=ONlfGU2xhBgHpiVwbiCVTJ9aK5chj3Inzqk05Wj6Hs0=',
          name:'Andrey Pavlovic',
          job: 'Lorem',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          facebook: 'https://www.facebook.com/',
          twitter: 'https://www.twitter.com/',
          instagram: 'https://www.instagram.com/'
     
     },
     {
          id: 2,
          img: 'https://media.istockphoto.com/photos/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter-picture-id1311084168?k=20&m=1311084168&s=612x612&w=0&h=gclZozEGfK0eSUhKEE7RrUq8B5qDLvQTPrb0Vc-vEyI=',
          name:'Lauren Cho',
          job: 'Lorem',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          facebook: 'https://www.facebook.com/',
          twitter: 'https://www.twitter.com/',
          instagram: 'https://www.instagram.com/'
     },
     {
          id: 3,
          img: 'https://media.istockphoto.com/photos/view-of-smiling-woman-in-headphones-talk-on-video-call-picture-id1304943786?k=20&m=1304943786&s=612x612&w=0&h=WL7mreJhDX5Wz-iUzCqF9__yj5wcwr1d_4g7-kpdlA4=',
          name:'Mary Jane',
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