// NewRecordScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { RecordsContext } from '../context/RecordsContext'; // Import the RecordsContext

const NewRecordScreen = ({ navigation }) => {
  const { addRecord } = useContext(RecordsContext);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [insulinLevel, setInsulinLevel] = useState('');
  const [pulseRate, setPulseRate] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [foodEntries, setFoodEntries] = useState('');

  const handleDone = () => {
    const newRecord = {
      time,
      date,
      insulinLevel,
      pulseRate,
      bloodPressure,
      foodEntries,
    };
    addRecord(newRecord); // Save the new record
    navigation.navigate('YourRecords'); // Navigate to YourRecordsScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Record</Text>
      <TextInput placeholder="Time" style={styles.input} value={time} onChangeText={setTime} />
      <TextInput placeholder="Date" style={styles.input} value={date} onChangeText={setDate} />
      <TextInput placeholder="Insulin Level" style={styles.input} value={insulinLevel} onChangeText={setInsulinLevel} />
      <TextInput placeholder="Pulse Rate" style={styles.input} value={pulseRate} onChangeText={setPulseRate} />
      <TextInput placeholder="Blood Pressure" style={styles.input} value={bloodPressure} onChangeText={setBloodPressure} />
      <TextInput placeholder="Food Entries" style={styles.input} value={foodEntries} onChangeText={setFoodEntries} multiline />
      
      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  doneButton: {
    backgroundColor: '#2e7d32',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NewRecordScreen;
