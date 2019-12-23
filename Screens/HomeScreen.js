import React,{Component} from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Icon name="viadeo" size={30} color="red" />
            </View>
        );
    }
}
export default HomeScreen;