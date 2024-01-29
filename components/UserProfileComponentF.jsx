
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import  {useState} from 'react';

const UserProfileComponentF = props => {
 // console.log('user profile component f got rerendered');
let {firstName, lastName, cell, email, city, country} = props;    
  const [userFirstName, setUserFirstName] = useState(firstName);
  const [userLastName, setUserLastName] = useState(lastName);
  const [userCell, setUserCell] = useState(cell);
  const [userEmail, setUserEmail] = useState(email);
  const [userCity, setUserCity] = useState(city);
  const [userCountry, setUserCountry] = useState(country); 
  
return (
    <View>

      <Text>User Profile</Text>
      
      <TextInput
        value={userFirstName}
        onChangeText={changedText => {
        setUserFirstName(changedText);
        }}
       placeholder="First Name"
        style={styles.textinput}
      />

      <TextInput
        value={userLastName}
        onChangeText={changedText => {
          setUserLastName(changedText);
        }}
        placeholder="Last Name"
        style={styles.textinput}
      />

      <TextInput
        value={userCell}
        onChangeText={changedText => {
          setUserCell(changedText);
        }}
        placeholder="Cell No"
        style={styles.textinput}
      />
      <TextInput
        value={userEmail}
        onChangeText={changedText => {
          setUserEmail(changedText);
        }}
        placeholder="Email"
        style={styles.textinput}
      />

      <TextInput
        value={userCity}
        onChangeText={changedText => {
          setUserCity(changedText);
        }}
        placeholder="City"
        style={styles.textinput}
      />

      <TextInput
       value={userCountry}
       onChangeText={changedText => {
        setUserCountry(changedText);
       }}
       placeholder="Country"
       style={styles.textinput}
     />
     <TouchableOpacity 
     onPress = {() => {
       // firstName = 'Sunny';
        //setUserFirstName('Sunny' +Date());
     }}>
        <Text>Button</Text>
     </TouchableOpacity> 
    </View>
 ); 
};


export  default UserProfileComponentF;
const styles = StyleSheet.create({
    textinput: {margin: 10, backgroundColor: 'pink'}
                                });