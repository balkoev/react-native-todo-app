import React from 'react';
import { StyleSheet, View } from 'react-native';

export const AppCard = (props) => (
  <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
);

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    // for iOS
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    // for android
    elevation: 8,
    borderRadius: 10,
  },
});
