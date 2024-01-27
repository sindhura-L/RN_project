// DetailViewScreen.js

import React from 'react';
import { View, Text } from 'react-native';

class DetailViewScreen extends React.Component {
  render() {
    const { item } = this.props.route.params;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Detail View</Text>
        <Text>ID: {item.id}</Text>
        <Text>Title: {item.title}</Text>
      </View>
    );
  }
}

export default DetailViewScreen;