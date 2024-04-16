import { useEffect, useState } from "react";
import { IResponse } from "../interfaces/response.interface";

export default function useDataFetch(url?: string, localStorageKey?: string) { 

  const [data, setData] = useState<IResponse | any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    if (url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        console.log(response)

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data: IResponse | any = await response.json();
        console.log(data)
        setData(data);
        setError(null);
      } catch (error) {
        console.log(error)
        // setError(error.message);
      } finally {
        setLoading(false);
      }
      return;
    }

    const localData = JSON.parse(localStorage.getItem(localStorageKey as string) || '')
    if(!localData) throw new Error('Failed to fetch data');
    setData(localData)
    
  };

  useEffect(() => {
    getData()
  }, [])

  return {
    data,
    loading,
    error
  }
}