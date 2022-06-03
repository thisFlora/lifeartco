import  { React, useEffect, useState }from "react";
import CardDetail from './CardDetail.js';


const Companies = [
     {
          id: 1,
          img: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Logo_de_la_Universidad_Siglo_21.svg',
          name:'Universidad Siglo 21'
     },
     {
          id: 2,
          img: 'https://www.frba.utn.edu.ar/wp-content/uploads/2016/08/logo-utn.ba-horizontal-e1471367724904.jpg',
          name:'UTN BA'
     },
     {
          id: 3,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcap_5YLq3_JPUUPyWcxb8odYIa0-y13JHD74xRPwkEKT_P-RRtXHuyfgwkmzi8oZRRPQ&usqp=CAU',
          name:'UADE'
     },
     {
          id: 4,
          img: 'https://www.imesapi.com/wp-content/uploads/2018/04/LOGO-UPC-NET.png',
          name:'Universitat Politècnica de Catalunya'
     },
     {
          id: 5,
          img: 'https://th.bing.com/th/id/OIP.KbzWbTGqviKjqZX6RiR5gAHaEW?pid=ImgDet&rs=1',
          name:'Escuela Europea de Coaching'
     },
     {
          id: 6,
          img: 'https://images.credly.com/size/340x340/images/5403d0d9-8b5c-48f4-80d1-d5e333030826/blob.png',
          name:'International Coaching Federation'
     },
     {
          id: 7,
          img: 'https://images.credly.com/size/340x340/images/5403d0d9-8b5c-48f4-80d1-d5e333030826/blob.png',
          name:'NEWFIELDCONSULTING'
     },
     {
          id: 8,
          img: 'https://www.ficop.info/frontend/imagenes/logo_redes.jpg',
          name:'FICOP'
     },
     {
          id: 9,
          img: 'https://th.bing.com/th/id/OIP.bmLP9Ou6_eqqI6sFuiAUdgAAAA?pid=ImgDet&rs=1',
          name:'UADE'
     },
     {
          id: 10,
          img: 'https://adrianhectorluna.files.wordpress.com/2016/07/aapc-logo.jpg?w=600',
          name:'AACOP'
     },
     {
          id: 11,
          img: 'https://th.bing.com/th/id/R.eeb37bc81ad5314660302981393d7160?rik=lmIBIDpGDrT26g&riu=http%3a%2f%2fwww.best-masters.com%2fassets%2fimg%2flogo_ecole%2fucema_vertical_20111221181458.jpg&ehk=g6ucbBETaGWQzMoxK1%2f7dx1aOu%2f%2bgu0qu1Jyag4wDs8%3d&risl=&pid=ImgRaw&r=0',
          name:'UNIVERSIDAD DEL CEMA'
     },
     {
          id: 12,
          img: 'https://www.adventureswithagile.com/wp-content/uploads/2015/07/ICAgile-Logo-300x157.png',
          name:'IC AGILE'
     },
     {
          id: 13,
          img: 'https://expocarreras.modernizacionvcp.gob.ar/public/images/emprendedurismo/incubacor.png',
          name:'incubaCOR'
     },
     {
          id: 14,
          img: 'https://www.iibcouncil.org/wp-content/uploads/2018/12/cropped-header-org-2.png',
          name:'IIB COUNCIL'
     },
     {
          id: 15,
          img: 'https://th.bing.com/th/id/OIP.b3tIaB3oDcD3_qIRUTqJUAHaCf?pid=ImgDet&rs=1',
          name:'Roberto Perez'
     }
];

const CardContainer = () => {
     const [companies, setCompanies] = useState([]);

     useEffect(() => {
          const getCompanies = new Promise((res, rej) => {
               setTimeout(() => {
               res(Companies);
          }, 2000);
     });
     getCompanies
          .then((data) => {
               setCompanies(data);
          });
}, []);
     
     return (
          <div className='companies-container'>
               <div className='companies-row'>
               <h2 className="companies-title">Instituciones que nos respaldan</h2>
                    <CardDetail companies={companies} key={companies.id}/>
               </div>
          </div>
     )
}
export default CardContainer;