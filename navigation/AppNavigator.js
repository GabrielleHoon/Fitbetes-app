// /navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NewRecordScreen from '../screens/NewRecordScreen';
import YourRecordsScreen from '../screens/YourRecordsScreen';
import RecordDetailsScreen from '../screens/RecordDetailsScreen'; // Ensure this path is correct

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NewRecord" component={NewRecordScreen} options={{ title: 'Add New Record' }} />
      <Stack.Screen name="YourRecords" component={YourRecordsScreen} options={{ title: 'Your Records' }} />
      <Stack.Screen name="RecordDetails" component={RecordDetailsScreen} options={{ title: 'Record Details' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
