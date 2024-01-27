// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListViewScreenC from './components/ListViewScreenC';
import DetailViewScreenC from './components/DetailViewScreenC';
import AddRecordScreenC from './components/AddRecordScreenC';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListView">
        <Stack.Screen name="ListView" component={ListViewScreenC} />
        <Stack.Screen name="DetailView" component={DetailViewScreenC} />
        <Stack.Screen name="AddRecord" component={AddRecordScreenC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
