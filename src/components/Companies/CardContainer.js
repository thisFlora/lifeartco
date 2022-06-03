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
          img: 'data:image/png;base64,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',
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