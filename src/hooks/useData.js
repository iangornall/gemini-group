import {useEffect, useState} from 'react';

let useData = (getData) => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await getData());
  }, []);
  return data;
}
export default useData;