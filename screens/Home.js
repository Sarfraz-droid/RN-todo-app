import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Note = ({ item, Press }) => {
  return (
    <TouchableOpacity style={styles.note} onPress={Press}>
      <Text style={styles.noteText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default function Home({ Data, setData, navigation }) {
  useEffect(() => {
    console.log("Data");
    console.log(Data);
  }, []);

  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={Data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
              <Note item={item} Press={() => navigation.navigate(item.name)} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    padding: 20,
    flex: 1,
  },
  note: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  noteText: {
    fontWeight: "600",
    padding: 10,
    fontSize: 30,
    letterSpacing: 2,
  },
  newnote: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  addNew: {
    flexDirection: "row",
    marginBottom: 30,
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#4F98CA",
    elevation: 10,
  },
});
