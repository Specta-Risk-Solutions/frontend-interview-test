import { useEffect, useState } from "react";
import { IResponse } from "../interfaces/response.interface";

export default function useRequestProcessor(url?: string, localStorageKey?: string) { 

  const [data, setData] = useState<IResponse | any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  const [showForm, setShowForm] = useState(false)

  const getData = async () => {
    if (url) {
      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          const errorRes: IResponse = await response.json()
          throw new Error(errorRes?.errors?.[0]);
        }
        
        const data: IResponse = await response.json();
        setData(data);
        setError('');
      } catch (error: any) {
        console.log(error.message)
        setError(error.message);
      } finally {
        setLoading(false);
      }
      return;
    }

    const localData = JSON.parse(localStorage.getItem(localStorageKey as string) || '')
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
          const errorRes: IResponse = await response.json()
          throw new Error(errorRes?.errors?.[0]);
        }
        getData();
      } catch (error: any) {
        setError(error.message);
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
      setError('Failed to create');
    }
    
  };

  const updateData = async (data: any) => {

    if (url) {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          const errorRes: IResponse = await response.json()
          throw new Error(errorRes?.errors?.[0]);
        }
        getData();
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
      return
    }

    try {
      const storedData = JSON.parse(localStorage.getItem(localStorageKey as string) || '[]');

      // Let's temporary find by name as we don't have id 
      const index = storedData.findIndex((item: any) => item.name === data.name);

      if (index !== -1) {
        storedData[index] = data;
        console.log(storedData[index])
      }

      localStorage.setItem(localStorageKey as string, JSON.stringify(storedData));
      setShowForm(false)
      getData();
      
      setError('');
    } catch (error) {
      setError('Failed to create');
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
    updateData,
    setData,
    setShowForm,
    setError
  }
}


