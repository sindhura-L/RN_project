import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListViewScreenF from './components/ListViewScreenF';
import DetailViewScreenF from './components/DetailViewScreenF';
import AddRecordScreenF from './components/AddRecordScreenF';

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListView">
        <Stack.Screen name="ListView" component={ListViewScreenF} />
        <Stack.Screen name="DetailView" component={DetailViewScreenF} />
        <Stack.Screen name="AddRecord" component={AddRecordScreenF} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="ListView">
//         <Stack.Screen name="ListView" component={ListViewScreenC} />
//         <Stack.Screen name="DetailView" component={DetailViewScreenC} />
//         <Stack.Screen name="AddRecord" component={AddRecordScreenC} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }