import React, {Component} from 'react';
import {Text, View, Button,Image,TouchableOpacity} from 'react-native';

const ItemEvent = () => {
    return (
        <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
                <View style={{ justifyContent:'center'}}>
                    <Image source={require('../../src/images/hoa.png')} style={{ width: 80, height: 80, marginTop: 20 }}></Image>
                </View>
                <View style={{ justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold'}}> Thứ Tư, 25  Tháng 12</Text>
                    <Text style={{fontWeight:'bold', fontSize:17}}> Ngày Lễ Giáng sinh</Text>
                    <Text style={{color:'#9c9ba1'}}>Cả ngày</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

module.exports = ItemEvent;
