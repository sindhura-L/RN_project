import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';


const ListViewScreenF = ({navigation }) => {
  const [data, setData] = useState([
    { Car: 'Venue', color: 'Red', title: '2023', 
    path: '/Users/sindhurayeruva/Desktop/Images/VenueCar.jpeg' },  
    { Car: 'BMW', color: 'White',title: '2022', 
    path: '/Users/sindhurayeruva/Desktop/Images/BMW.png' },
    { Car: 'AUDI', color: 'White',title: '20221',
    path: '/Users/sindhurayeruva/Desktop/Images/audi.jpg' },
    { Car: 'Benz', color: 'Black',title:'2020',
    path: '/Users/sindhurayeruva/Desktop/Images/benz.jpg' }
  ]);

  // /Users/sindhurayeruva/Desktop/Images/Tesla.jpg
  
  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 15 }}>
       <Text>{item.Car}</Text>
      <Button
        title="View Details"
        onPress={() => navigation.navigate('DetailView', { item })}
      />
    </View>
  );

  const addRecord = (newRecord) => {
    setData([...data, newRecord]);
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.Car}
      />
      <Button
        title="Add Record"
        onPress={() => navigation.navigate('AddRecord', { onRecordAdded: addRecord })}
  
      />
    </View>
  );
};

export default ListViewScreenF;