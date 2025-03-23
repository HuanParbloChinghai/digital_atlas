import { useState, useEffect } from 'react';
import Header from './components/Header';

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(
    () => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        console.log('dark mode active');
      } else {
        document.documentElement.classList.remove('dark');
        console.log('light mode active');
      }
    }, [darkMode]
  );

  const toggleHandler = () => {
    setDarkMode(!darkMode)
  };

  return (
    <>
      <div>
        <Header darkMode={darkMode} toggleHandler={toggleHandler} />
        {/* <p>Hello ma guy</p> */}
      </div>
        
    </>
  )
}

export default App
