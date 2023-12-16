import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { UserContext } from './components/UserContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import defaultprofilephoto from './assets/images/download 2.png'

function App() {
  const [userid, setuserid] = useState({
    id: null,
    username: null
  })
  const [data, setData] = useState([])

  const getData = async () => {
    await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then((resp) => {
        setData(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
  }, [data])

  return (
    <>
      <UserContext.Provider value={{ userid, setuserid, data, setData }}>
        <Home />
      </UserContext.Provider>
    </>
  );
}

export default App;
