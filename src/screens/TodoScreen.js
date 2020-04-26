import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { THEME } from '../theme';
import { AppCard } from '../components/ui/AppCard';

export const TodoScreen = ({ goBack, todo, onRemove }) => {
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.text}>{todo.title}</Text>
        <Button title="Ред." />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" color={THEME.GREY_COLOR} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 20,
  },
  button: {
    width: '40%',
  },
  text: {
    fontSize: 20,
  },
});
