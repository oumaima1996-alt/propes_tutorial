//import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile.js'
import Image from './Profile/Image'
import jci from './ressourcr/jci.png'

function App() {
  const user = {
    fullName :"Soltani Oumaima",
    bio:"aziperjzefrgoidofjidopxckdpo",
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

export default App;
