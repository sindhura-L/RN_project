import {Text,View,stylesheet,TextInput,TouchableOpacity,Button,Alert} from 'react-native';

import React from 'react';

const ViewText = () =>{


return (
    <View>
    <Text>HelloWorld</Text>
    
    <TextInput
        style={{height : 40,
               padding: 10, borderWidth: 1,backgroundColor: 'blue'}}
       // onChangeText={}
        value={'Sindhu'}
       
      />
    <TextInput
        style={{height : 30,
                borderWidth : 2,backgroundColor : 'pink',padding : 20}}
     value={'Sunny'}  
     /> 
     <TextInput
        style={{height : 30,borderWidth : 3, backgroundColor : 'orange',padding : 15}}
        value={'venkat'} 
        />
     
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}></Button>
      
    </View>

);
};
export default ViewText;