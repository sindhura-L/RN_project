import React, { useState, useEffect, useContext } from 'react';

import { View, Text, FlatList,Button, ActivityIndicator } from 'react-native';
import { AuthContext } from './AuthContext';

//const DashboardView = () => {//
   
const DashboardView = ({ navigation }) => {
        const { user, logout } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch( 'https://jsonplaceholder.typicode.com/todos');
      const json = await response.json();
      console.log(json);
      setData(json);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLoading ? (
        <ActivityIndicator size= "large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={{fontSize: 15, margin: 10, padding: 5,flex:1}}>{item.title}</Text>}
          
        />
        
      )}
       <Button
        title="Logout"
          onPress={() => navigation.navigate('Login')}
 
          />
 
       

    </View>
  );
};

export default DashboardView;
