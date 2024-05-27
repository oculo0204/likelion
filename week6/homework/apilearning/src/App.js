import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = "http://swopenapi.seoul.go.kr/api/subway/425559625674757236306b436e4f61/xml/realtimePosition/0/5/1호선";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const res = await axios.get(URL, { //객체 안 파라미터 전달 안됨
        params: {
          KEY: process.env.REACT_APP_API_KEY,
          TYPE: 'json',
          SERVICE :'realtimePosition',
          START_INDEX :0,
          END_INDEX : 5,
          subwayNm : "3호선"
        }
      });
      console.log('API Response:', res);
      setData(res.data);
    } catch(e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData()
  }, []);

  if(loading) return <div>Loading...</div>;
  if(error)   return <div>Error...</div>;
  if(!data)   return null;
  let parser, xmlDoc;

  parser = new DOMParser();
  xmlDoc = parser.parseFromString(data, "text/html"); // String -> xml 만들어주는 과정
  return (
    <div className="App">
      <p> { data }</p>
    </div>
  );
}

export default App;