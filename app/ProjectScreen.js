import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TopBar from '../components/TopBar';
import BottomNavBar from '../components/BottomNavBar';

const ProjectScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.content}>
        <Text>Project Screen</Text>
      </View>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProjectScreen;
