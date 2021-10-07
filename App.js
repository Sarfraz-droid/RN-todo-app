import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from "./screens/Home"
import List from "./screens/List."
const Drawer = createDrawerNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [Data, setData] = useState([
    {
      id:1,
      name: "Home",
      data: []
    },
    {
      id:2,
      name: "Work",
      data: []
    }
  ]);

  // useEffect(() =>
  // {
  //   AsyncStorage.setItem('data', JSON.stringify(Data));
  //   console.log(Data);
  // }, [Data])

  const addTodo = (text,index) => {
    setData((prev) => {
      prev[index].data.push({ todo: text, id: Math.random().toString() });
      return prev;
    });
    console.log(Data);
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Memo">
          {props => <Home {...props} Data={Data} setData={setData}/>}
        </Drawer.Screen>
        {Data.map((item, index) => {
          return(
          <Drawer.Screen key={index} name={item.name}>
            {props => <List {...props} name={item.name} Data={Data} index={index} addTodo={addTodo}/>}
          </Drawer.Screen>)
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
