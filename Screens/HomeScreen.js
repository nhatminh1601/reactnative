import React, {Component} from 'react';
import {Text, View, Button,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Tabar from '../Components/Home/Tabbar';
import ViewCalendar from '../Components/Home/ViewCalendar';
import Today from '../Components/Home/Today';
import News from '../Components/Home/News';
import Event from '../Components/Home/Even';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f0f1f6'}}>
                <Tabar/>
                <ScrollView>
                    <ViewCalendar/>
                    <Today></Today>
                    <News></News>
                    <Event/>
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;
