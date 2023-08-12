import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (endpoint) => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const client = 'a3aM5fd37OKVmVWQ240ocSPPzB3cKduSYQr0XSQ3Mhvu4IQClCOHP7Ef';

  const options = {
    method: 'GET',
    url: `https://api.pexels.com/v1/${endpoint}`,
    headers: {
      Authorization: client,
    },
  };

  const fetchData = async () => {
    setisLoading(true);

    try {
      const response = await axios.request(options);

      setdata(response.data.photos);
      setisLoading(false);
    } catch (error) {
      setError(error);
      alert('Something went wrong');
    } finally {
      setisLoading(false);
    }
  };

  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error, refetch };
};

export default useFetch;
