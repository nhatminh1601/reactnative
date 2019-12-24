import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import ItemEvent from './ItemEvent';

const Event = () => {
    return (
        <View style={{marginTop: 20}}>
            <View style={{flexDirection: 'row', height: 50}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', margin: 5}}>Sự kiện quan trọng</Text>
                <TouchableOpacity style={{position: 'absolute', right: 0, margin: 7}}>
                    <Text style={{color: '#0679f8', fontWeight: 'bold'}}>Xem thêm</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: '#ffffff',
                borderRadius: 5,
                borderColor: '#e0e0e0',
                borderWidth: 1,
                margin: 10
            }}>
                <ItemEvent/>
                <ItemEvent/>
                <ItemEvent/>
                <ItemEvent/>

            </View>
        </View>
    );
};

module.exports = Event;
