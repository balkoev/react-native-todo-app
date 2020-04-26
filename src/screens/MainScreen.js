import React from 'react';
import { View, FlatList } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ todos, addTodo, removeTodo, openTodo }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />}
      />
    </View>
  );
};
