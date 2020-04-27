import React from 'react';
import { View, TextInput, StyleSheet, Modal, Button } from 'react-native';
import { THEME } from '../theme';

export const EditModal = ({ visible, onCancel }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Введите название"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <Button title="Отменить" onPress={onCancel} color={THEME.DANGER_COLOR}></Button>
          <Button title="Сохранить"></Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%',
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
