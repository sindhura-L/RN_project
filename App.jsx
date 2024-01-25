
import {Text, View, TouchableOpacity} from 'react-native';
import  {useState} from 'react';

import UserProfileComponentF from './components/UserProfileComponentF';

const App = () => {
  const [parentFirstName, setParentFirstName] = useState('');
  return (
    <View style ={{marginTop: 20}}>
      <UserProfileComponentF

       firstName={"Sindhu"}
      lastName={'Krishna'}
      cell={'12345676'}
      email={'ylsindhura@gmail.com'}
      city={'Hyderabad'}
      country={'India'}
      />


    </View>
  );
};

export default App;

