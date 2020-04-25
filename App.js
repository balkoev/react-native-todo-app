import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title="Todo App" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
       
  }
});
