import styles from './Body.module.css'
import Card from './Card';
import Texto from './Texto';

function Body(){
    return(
        <div className={styles.main_body}>
              <div className={styles.imgBack}>
                  
              <h1> Bem vindo ao <br/>Roberto Manshi</h1>

              </div>
              <Texto/>
              
            
              <div className={styles.cards}>
                <Card/>
              </div>
        </div>
    );
}




export default Body