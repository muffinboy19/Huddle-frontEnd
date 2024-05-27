import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TopBar from '../components/TopBar';
import BottomNavBar from '../components/BottomNavBar';

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.content}>
        <Text>Community Screen</Text>
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

export default CommunityScreen;
