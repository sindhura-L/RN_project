import React from 'react';
import { View, Text ,Image ,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        justifyContent: 'top',
        alignItems: 'center', 
       paddingTop: 280,
    },
    image: {
      width: '100%',
      height: '100%',
      flex: 1, 
      alignItems: 'center', 
      
    }
    
  });

const DetailViewScreenF = ({ route }) => { 
  const { item } =route.params;

  return (
    
    <View style={styles.container}>
      <Text>Model: {item.title}</Text>
      <Text>Car Name: {item.Car}</Text>
      <Text>Color: {item.color}</Text>
      <Image
        style={styles.image}
        source={{ uri: item.path
        }}
        resizeMode="cover"
      />
    </View>

  );
};
      
export default DetailViewScreenF;
