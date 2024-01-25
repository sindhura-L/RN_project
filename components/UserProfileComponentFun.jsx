import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';


  const UserProfileComponentF = props => {
    return (
        <View>
        <Text> Hello Word</Text>
        <TextInput Value={props.firstName} onChangeText={()=>{}} 
           placeholder='FirstName' style={styles.TextInput} />
        <TextInput Value={props.lastName} onChangeText={()=>{}} 
         placeholder='LastName' style={styles.TextInput} />
        </View>
    );
    };
    export default UserProfileComponentF
    const styles = StyleSheet.create({TextInput: {margin: 10,backgroundColor: 'pink',padding: 10}});