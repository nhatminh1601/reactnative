import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


class HoroscopesScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>HoroscopesScreen!</Text>
                <Icon name="viadeo" size={30} color="red" />
            </View>
        );
    }
}
export default HoroscopesScreen;