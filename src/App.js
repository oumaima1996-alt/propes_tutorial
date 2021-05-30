//import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile.js'
import Image from './Profile/Image'
import jci from './ressourcr/jci.png'
import PropTypes from "prop-types";


function App() {
  const user = {
    fullName :"Soltani Oumaima",
    bio:"UN(E) INGÉNIEUR(E) GÉOLOGUE : Effectue des études géologiques et géotechniques le choix des emplacements pour l’extraction de minerais, de pétrole, de gaz naturel, etc. Ils peuvent aussi effectuer des études pour choisir l’emplacement pour des travaux de génie civil (ponts, viaducs, barrages, routes, bâtiments, etc).",
    profession:"ingénieur"
  }
  const alertName =(fullName) => alert(user.fullName)
  
      
  return (
    <div>
       <Profile  user = {user}   alert = {alertName(user.fullName)}/>
      <Image>
        <div>
        <img src = {jci} alt = 'jci' />
        </div>
      </Image>
      

    </div>
  );
}
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string
,
  profession: PropTypes.string,
};

export default App;
