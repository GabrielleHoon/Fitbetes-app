// RecordsContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RecordsContext = createContext();

export const RecordsProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  // Load records from AsyncStorage when the app starts
  useEffect(() => {
    const loadRecords = async () => {
      try {
        const storedRecords = await AsyncStorage.getItem('records');
        if (storedRecords) {
          setRecords(JSON.parse(storedRecords));
        }
      } catch (error) {
        console.error('Failed to load records', error);
      }
    };
    loadRecords();
  }, []);

  // Save records to AsyncStorage
  const saveRecords = async (newRecords) => {
    try {
      await AsyncStorage.setItem('records', JSON.stringify(newRecords));
      setRecords(newRecords);
    } catch (error) {
      console.error('Failed to save records', error);
    }
  };

  // Add a new record
  const addRecord = (newRecord) => {
    const updatedRecords = [...records, newRecord];
    saveRecords(updatedRecords);
  };

  return (
    <RecordsContext.Provider value={{ records, addRecord }}>
      {children}
    </RecordsContext.Provider>
  );
};
