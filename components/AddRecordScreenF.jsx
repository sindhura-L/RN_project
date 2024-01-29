import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddRecordScreenF = ({ navigation , route }) => {

  const { onRecordAdded } =  route.params; 

  const [title, setTitle]  = useState('');
  const [Car, setCar]      = useState('');
  const [color, setColor]  = useState('');
  const [path, setPath]    = useState('');

  const handleSaveRecord = () => {
    
    // console.log(Car); 
    // console.log(color); 
    // console.log(title); 

    const newRecord = { Car: Car, color: color, title: title, path: path };

    onRecordAdded(newRecord);
    
    navigation.navigate('ListView');

  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
     <Text>Enter Model</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', width: 200, margin: 10, padding: 5 }}
        placeholder="Model Year"
        onChangeText={setTitle}
        value={title}
      />
     
      <Text>Enter Car Name</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', width: 200, margin: 10, padding: 5 }}
        value={Car}
        placeholder="Car name"
        onChangeText={setCar}
      />

      <Text>Enter Color</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', width: 200, margin: 10, padding: 5 }}
        placeholder="color"
        onChangeText={setColor}
        value={color}
      />
     <Text>Enter Image URL</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', width: 200, margin: 10, padding: 5 }}
        placeholder="Path"
        onChangeText={setPath}
        value={path}
      />
      <Button
        title="Save"
        onPress={handleSaveRecord}
      
      />
    </View>
  );
};

export default AddRecordScreenF;