import { useState, useEffect } from 'react'

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

  return (
    <>
      <div>
        {/* <Header /> */}
      </div>
        
    </>
  )
}

export default App
