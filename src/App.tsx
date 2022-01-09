import { useEffect } from 'react';
import GlobalStyles from './components/globalStyles';
import Layout from './components/layout';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  //first thing when the app loads is to fetch the country.
  useEffect(() => {
    const getGeoInfo = async() => {
    let { data } = await axios.get('https://ipapi.co/json/');
    dispatch({ type: 'GET_LOCATION', payload: data.country });
  };
    getGeoInfo();
  }, [dispatch]);
  return (
    <>
      <GlobalStyles />
      <Layout />
    </>
  );
}

export default App;
