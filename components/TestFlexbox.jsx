import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const TestFlexbox = () =>
{
    return (

    

<View
style= {{
    backgroundColor : 'blue',
    flex: 1,
    flexdirection: 'rowreverse',
}}>
    <View style={{flex: 1, backgroundcolor: 'orange', margin: 5}}></View>
    <View style={{flex: 2, backgroundcolor: 'green', margin: 5}}></View>
    <View style={{flex: 3, backgroundcolor: 'red', margin: 5}}></View>

</View>

    );
};
export default TestFlexbox;
const styles = StyleSheet.create({});




    

     

