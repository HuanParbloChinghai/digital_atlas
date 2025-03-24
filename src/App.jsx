import { useState, useEffect } from 'react';
import Header from './components/Header';

import './App.css'
import SearchAndFilter from './components/SearchAndFilter';

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
      <div className='dark:bg-[#202C36] bg-amber-300 w-full min-h-screen transition-colors duration-600'>
        <div><Header darkMode={darkMode} toggleHandler={toggleHandler} /></div>
        <SearchAndFilter/>
        {/* <p>Hello ma guy</p> */}
      </div>
        
    </>
  )
}

export default App
