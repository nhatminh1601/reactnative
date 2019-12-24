import React, {Component} from 'react';
import {Text, View, Button,TouchableOpacity} from 'react-native';

const Tabar = () => {
    const {title, buttonTab} = styles;
    return (
        <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 10,justifyContent: 'space-around' }}>
            <TouchableOpacity><Text style={buttonTab}>Sửa</Text></TouchableOpacity>
            <Text style={title}>THỨ HAI, 23 THÁNG
                12</Text>
            <TouchableOpacity><Text style={buttonTab}>Tháng</Text></TouchableOpacity>
        </View>
    );
};
const styles = {
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
        fontSize: 16,
    },
    buttonTab: {
        width: 50,
        textAlign: 'center',
        color: '#66b3ff',
        fontWeight: 'bold',
        fontSize: 16,
    },
};
module.exports = Tabar;
