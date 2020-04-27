import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Modal,
  Button,
  Alert,
} from 'react-native';
import { THEME } from '../theme';

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Ошибка!',
        `Минимальная длинна названия 3 символа. Сейчас ${title.trim().length}`
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Введите название"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <Button
            title="Отменить"
            onPress={onCancel}
            color={THEME.DANGER_COLOR}
          ></Button>
          <Button title="Сохранить" onPress={saveHandler}></Button>
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
