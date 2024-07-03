import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import DetailsScreen from './components/Detailscreen';
import uuid from 'uuid-random';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'HTML' },
    { id: uuid(), text: 'CSS' },
    { id: uuid(), text: 'JS' },
    { id: uuid(), text: 'PHP' }
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'กรุณาใส้ข้อมูล', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems]
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList 
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;
