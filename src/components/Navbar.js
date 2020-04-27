import React from 'react';
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme';
import { AppTextBold } from '../components/ui/AppTextBold';

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>{props.title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
