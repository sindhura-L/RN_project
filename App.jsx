import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthProvider}    from './components/AuthContext';
import LoginScreen       from './components/LoginScreen';
//import DashboardScreen   from './components/DashboardScreen';
import DashboardView1 from './components/DashboardView1';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
         {/* // <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
         <Stack.Screen name="Dashboard" component={DashboardView1} />

        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;