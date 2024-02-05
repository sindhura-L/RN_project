import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, } from 'react-native';
import { AuthContext } from './AuthContext'

const LoginScreen = ({ navigation } ) => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [forgetpassword, setforgetpassword]= useState(''); 

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setUsername('');
      setPassword('');
    });

    return unsubscribe;
  }, [navigation]);


  const handleLogin = () => {
    
    login({ username, password,forgetpassword });
    navigation.navigate('Dashboard');

  };

  return (
    <View style={styles.container}>
        
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      {/* <TextInput
      placeholder="forgetpassword"
      value={forgetpassword}
      onChangeText={(text) => forgetpassword(text)}
      secureTextEntry
      style={styles.input}
      />  */}
      

      <Button
          title="Login"
          onPress= {handleLogin}
          />
          
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height:'40',
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
   // borderRadius: 5,
    
  },
});

export default LoginScreen;