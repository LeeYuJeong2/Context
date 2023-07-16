import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Page from './components/Page';
import { ThemeContext  } from './components/context/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark}}>
       <Page  />
  </ThemeContext.Provider>
  )
}

export default App;
