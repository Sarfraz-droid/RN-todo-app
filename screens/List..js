import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";

export default function List({ Data, name, navigation, index }) {
  const [Todo, setTodo] = useState("");

  function Todotext({ item }) {
    return (
      <View style={styles.Todo}>
        <Text style={styles.TodoText}>{item.name}</Text>
        <TouchableOpacity onPress={() => RemoveItem(item.id)}>
          <AntDesign
            style={styles.TodoDelete}
            name="delete"
            size={24}
            color="red"
          />
        </TouchableOpacity>
      </View>
    );
  }

  const RemoveItem = (id) => {
      setList(list.filter((item) => item.id !== id));
  }
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log(Data);
  }, [Data]);

  const addTodo = () => {
    setList([...list, { id: list.length, name: Todo }]);
    console.log(list);
  };

  return (
    <Animatable.View animation="zoomInUp" style={styles.container}>
      <View style={styles.addTodo}>
        <TextInput
          style={styles.input}
          placeholder="Todo"
          value={Todo}
          onChangeText={(e) => setTodo(e)}
        />
        <TouchableOpacity onPress={() => addTodo()}>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        {/* <Text>Hello</Text> */}
        <FlatList
          data={list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Todotext item={item} />}
          onLoadMoreAsync={() => _loadMoreAsync()}
        />
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  listContainer: {
    padding: 10,
    flex: 1,
  },
  addTodo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    marginTop: 20,
    width: "100%",
  },
  input: {
    margin: 10,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    width: 300,
  },
  Todo: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    
    borderStyle: "dashed",
    flexDirection: "row",
  },
  TodoText: {
    fontSize: 15,
    flexGrow: 1,
  },
  TodoDelete: {
    marginRight: 10,
  },
});
