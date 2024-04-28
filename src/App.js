import { useEffect, useState } from 'react';
import './App.css';
import Self from './Self/self';
import { InitSpin } from './initial-spin/initial-spin';

function App() {

  const [p, setP] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
      setP(true);
    }, 3000);
  }, [])

  return (
    <div className="App">
      {!p ? <InitSpin /> :
      <Self />}
    </div>
  );
}

export default App;
