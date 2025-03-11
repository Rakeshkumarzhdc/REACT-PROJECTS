import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [calVal, setCalVal] = useState(" ");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if(buttonText === 'C'){
      setCalVal('');
    }
    else if(buttonText === '='){
      try {
        setCalVal(eval(calVal));
      } catch (error) {
        setCalVal('Error');
      }
    }
    else{
      setCalVal(calVal + buttonText);
    }
  }




  return (
    <div className={styles.calculator}>
     <Display displayValue={calVal}></Display>
     <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App
