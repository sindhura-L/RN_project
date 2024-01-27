import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class ListViewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: 'Screen 1' },
        { id: 2, title: 'Screen 2' },
        { id: 3, title: 'Screen 3' },
      ],
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Button
                title="View Details"
                onPress={() => 
                      this.props.navigation.navigate('DetailView', { item })}
              />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
        <Button
          title="Add Record"
          onPress={() => this.props.navigation.navigate('AddRecord')}
        />
      </View>
    );
  }
}

export default ListViewScreen;
