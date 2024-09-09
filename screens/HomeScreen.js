import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome, Gabrielle</Text>
        <Text style={styles.subHeader}>Today's Record</Text>
      </View>

      {/* Graph Placeholder */}
      <View style={styles.graphContainer}>
        <View style={styles.graphPlaceholder} />
      </View>

      {/* Health Metrics Cards */}
      <View style={styles.metricsContainer}>
        <View style={styles.metricCard}>
          <Text style={styles.metricTitle}>Insulin level</Text>
          <Text style={styles.metricSubtitle}>Blood Sugar Level</Text>
          <Text style={styles.metricValue}>
            95 <Text style={styles.unit}>mg/dl</Text>
          </Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricTitle}>SYS - DIA</Text>
          <Text style={styles.metricSubtitle}>Blood Pressure</Text>
          <Text style={styles.metricValue}>
            112 - 83 <Text style={styles.unit}>mmHg</Text>
          </Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricTitle}>Pulse Rate</Text>
          <Text style={styles.metricSubtitle}>Heart Rate</Text>
          <Text style={styles.metricValue}>
            75 <Text style={styles.unit}>BPM</Text>
          </Text>
        </View>
      </View>

      {/* Pushes the navigation bar to the bottom */}
      <View style={styles.spacer} />

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('YourRecords')}>
          <Text style={styles.navIcon}>📋</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButtonContainer} onPress={() => navigation.navigate('NewRecord')}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RecordDetails')}>
          <Text style={styles.navIcon}>📅</Text>
        </TouchableOpacity>
          <Text style={styles.navIcon}>🔔</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up full height
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 16,
    color: '#555',
  },
  graphContainer: {
    marginBottom: 20,
  },
  graphPlaceholder: {
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  metricsContainer: {
    marginBottom: 20,
  },
  metricCard: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  metricTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  metricSubtitle: {
    fontSize: 12,
    color: '#777',
  },
  metricValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32', // Green color for healthy readings
    marginTop: 5,
  },
  unit: {
    fontSize: 14,
    color: '#555',
  },
  spacer: {
    flex: 1, // Spacer to push the navigation bar to the bottom
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#4caf50',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  navIcon: {
    fontSize: 24,
    color: '#fff',
  },
  addButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2e7d32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    fontSize: 30,
    color: '#fff',
  },
});

export default HomeScreen;
