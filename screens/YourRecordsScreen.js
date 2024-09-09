import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const YourRecordsScreen = ({ navigation }) => {
  // Sample record data (this should be dynamic based on your actual records)
  const record = {
    date: '26 August 2024',
    time: '08:30 AM',
    insulinLevel: '95 mg/dl',
    pulseRate: '75 BPM',
    bloodPressure: '112 - 83 mmHg',
    foodEntries: 'Breakfast: Oatmeal, Lunch: Salad',
    calories: 2279,
    carbs: 40,
    protein: 30,
    fats: 20,
    sugar: 10,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Records</Text>

      {/* Sample Record Display */}
      <TouchableOpacity
        style={styles.recordContainer}
        onPress={() => navigation.navigate('RecordDetails', { record })}
      >
        <Text>Date: {record.date}</Text>
        <Text>Time: {record.time}</Text>
        <Text>Insulin Level: {record.insulinLevel}</Text>
        <Text>Pulse Rate: {record.pulseRate}</Text>
        <Text>Blood Pressure: {record.bloodPressure}</Text>
        <Text>Food Entries: {record.foodEntries}</Text>
      </TouchableOpacity>

      {/* Spacer and Navigation Bar here as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  recordContainer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default YourRecordsScreen;
