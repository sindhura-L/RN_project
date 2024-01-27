// AddRecordScreen.js

import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class AddRecordScreenC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add Record</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', width: 200, margin: 10, padding: 5 }}
          placeholder="Enter Title"
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        <Button
          title="Save"
          onPress={() => {
            // Save the record and navigate back to the ListView
            this.props.navigation.navigate('ListView');
          }}
        />
      </View>
    );
  }
}

export default AddRecordScreenC;
