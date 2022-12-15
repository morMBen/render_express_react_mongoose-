import { useEffect, useState } from 'react';
import { Api } from './api/Api';
import './App.css';

function App() {
  const [state, setState] = useState(null);
  useEffect(() => {
    try {
      Api.get('/getusers').then(({ data }) => {
        console.log(data);
        setState(data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  return <div className='App'>Hola{console.log(state)}</div>;
}

export default App;
