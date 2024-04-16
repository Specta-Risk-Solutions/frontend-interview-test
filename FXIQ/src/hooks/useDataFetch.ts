import { useEffect, useState } from "react";
import { IResponse } from "../interfaces/response.interface";
import { IAddBook } from "../interfaces/book.interface";

export default function useDataFetch(url?: string, localStorageKey?: string) { 

  const [data, setData] = useState<IResponse | any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [showForm, setShowForm] = useState(false)

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
        setError('');
      } catch (error) {
        console.log(error)
        // setError(error?.message);
      } finally {
        setLoading(false);
      }
      return;
    }

    const localData = JSON.parse(localStorage.getItem(localStorageKey as string) || '')
    if(!localData) throw new Error('Failed to fetch data');
    setData(localData)
    
  };

  const createData = async (newData: any) => {

    if (url) {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        });
        if (!response.ok) {
          throw new Error('Failed to create data');
        }
        getData();
      } catch (error) {
        // setError(error.message);
      } finally {
        setLoading(false);
      }
      return
    }

    try {
      // Save the form data to localStorage
      const storedData = JSON.parse(localStorage.getItem(localStorageKey as string) || '[]');
      const updatedData = [newData, ...storedData];
      localStorage.setItem(localStorageKey as string, JSON.stringify(updatedData));
      setShowForm(false)
      getData();
      
      setError('');
    } catch (error) {
      // setError('Failed to create entity');
    }
    
  };

  useEffect(() => {
    getData()
  }, [])

  return {
    data,
    loading,
    error,
    showForm,
    createData,
    setData,
    setShowForm,
    setError
  }
}