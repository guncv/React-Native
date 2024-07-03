import { View,Text,Image, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { useState } from 'react';

const AddItem = ({addItem}) => {

  const [text,setText] = useState('');
  const onChange = textValue => setText(textValue);

  return (
    <View>
        <TextInput placeholder='Add Books...'
        style={styles.input} onChangeText={onChange} value={text}/>
        <TouchableOpacity style={styles.btn} onPress={()=> {
          addItem(text); 
          setText('');}
        }>
            <Text style={styles.btnText}>
                <Icon name="plus" size={20}/>
                Add Item
            </Text> 
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
      height: 60,
      padding: 8,
      fontSize: 16
    },
    btn: {
      backgroundColor: 'darkgreen',
      padding: 9,
      margin: 5
    },
    btnText: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center'
    }
})

export default AddItem;