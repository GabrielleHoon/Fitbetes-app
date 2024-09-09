import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecordDetailsScreen = ({ route }) => {
  // Receive the record data passed from YourRecordsPage
  const { record } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{record.date}</Text>
      <Text style={styles.title}>Record Details</Text>

      {/* Display the passed record information */}
      <View style={styles.metricsContainer}>
        <View style={styles.metricCard}>
          <Text style={styles.metricTitle}>Insulin level</Text>
          <Text style={styles.metricValue}>{record.insulinLevel}</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricTitle}>SYS - DIA</Text>
          <Text style={styles.metricValue}>{record.bloodPressure}</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricTitle}>Pulse Rate</Text>
          <Text style={styles.metricValue}>{record.pulseRate}</Text>
        </View>
      </View>

      {/* Display Food Entries and Caloric Breakdown */}
      <Text style={styles.sectionTitle}>Food Entries</Text>
      <Text>{record.foodEntries}</Text>

      {/* Example caloric breakdown visualization */}
      <View style={styles.caloricContainer}>
        <Text style={styles.caloricText}>{record.calories} kcal</Text>
        {/* Use actual graph or progress bar here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  metricsContainer: {
    marginBottom: 20,
  },
  metricCard: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  metricTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  metricValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  caloricContainer: {
    marginTop: 10,
  },
  caloricText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RecordDetailsScreen;
