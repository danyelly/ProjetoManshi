import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import styles from './components/navbar/Navbar.module.css'
import Body from './components/Body/Body';

var links = [
  {
    link: 'http://google.com',
    text: 'Home'
},
{
   link: 'http://github.com',
   text: 'Nossa História'

},{
   link: 'http://office.com',
   text: 'Rede'

}
,{
  link: 'http://office.com',
  text: 'Trabalhe Conosco'

}
,{
  link: 'http://office.com',
  text: 'Menu'

}]

function App() {
  return (


    <div className={styles.main}>
      <nav className={styles.navbar}>
        {
          links.map(function(element){
            return <div> <Navbar 
                link ={element.link}
                text ={element.text}
            />
             </div>
          })
          }
      </nav>   

      <Body/>
    </div>
    
  );
}

export default App;
