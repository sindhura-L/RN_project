import React, { useState } from 'react';
import { View, Text, Button, FlatList, SafeAreaView} from 'react-native';
import AddCarModal from './AddCarModal';


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

  const [isModalShow, setModalShow] = useState(false);

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
    setModalShow(false);
    setData([...data, newRecord]);
  };
  
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.Car}
      />
      <Button
        title="Add Record"
        onPress={() => setModalShow(true)}
  
      />
      <AddCarModal
        isModalShow={isModalShow}
        onRecordAdded={addRecord}/>
   
    </View>
   
    </SafeAreaView>
  );
};

export default ListViewScreenF;