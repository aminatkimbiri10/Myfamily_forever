import logo from './logo.svg';
import './App.css';
import React from 'react';

const Data = [
  {prenom:"Aminata",nom:"Kimbiri",age:"19",profession:"Etudiante"},
  {prenom:"Fatoumata",nom:"Kimbiri",age:"22",profession:"Pharmacienne"},
  {prenom:"Ousmane",nom:"Kimbiri",age:"26",profession:"Manager"},
  {prenom:"Mahamadou",nom:"Kimbiri",age:"70",profession:"Directeur"}
]
function Family({Data}) {
  return (<div>
    {Data.map(function (item) {
      <React.StrictMode>
      <h1>{item.nom} {item.nom}</h1>
      {/* <h4>profession: {item.profession}</h4>
      <p>agé de {item.prenom}</p> */}
      </React.StrictMode>
    })} 
  </div>)
}  

export {Data};
export default Family;
