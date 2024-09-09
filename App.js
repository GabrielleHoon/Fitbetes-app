import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { RecordsProvider } from './context/RecordsContext'; // Import the RecordsProvider


export default function App() {
  return (
    <RecordsProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </RecordsProvider>
  );
}
