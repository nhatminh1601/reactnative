import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';

const News = () => {
    return (
        <View style={{marginTop: 20}}>
            <View style={{flexDirection: 'row', height: 50}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', margin: 5}}>Tử vi bói toán</Text>
                <TouchableOpacity style={{position: 'absolute', right: 0, margin: 7}}>
                    <Text style={{color: '#0679f8', fontWeight: 'bold'}}>Xem tất cả</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
                <TouchableOpacity style={{alignItems: 'center', margin: 10}}>
                    <Image source={require('../../src/images/batquai.png')} style={{width: 50, height: 50}}/>
                    <Text>Tử Vi hàng ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', margin: 10}}>
                    <Image source={require('../../src/images/batquai.png')} style={{width: 50, height: 50}}/>
                    <Text>Tử Vi hàng ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', margin: 10}}>
                    <Image source={require('../../src/images/batquai.png')} style={{width: 50, height: 50}}/>
                    <Text>Tử Vi hàng ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', margin: 10}}>
                    <Image source={require('../../src/images/batquai.png')} style={{width: 50, height: 50}}/>
                    <Text>Tử Vi hàng ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', margin: 10}}>
                    <Image source={require('../../src/images/batquai.png')} style={{width: 50, height: 50}}/>
                    <Text>Tử Vi hàng ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', margin: 10}}>
                    <Image source={require('../../src/images/batquai.png')} style={{width: 50, height: 50}}/>
                    <Text>Tử Vi hàng ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', margin: 10}}>
                    <Image source={require('../../src/images/batquai.png')} style={{width: 50, height: 50}}/>
                    <Text>Tử Vi hàng ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', margin: 10}}>
                    <Image source={require('../../src/images/batquai.png')} style={{width: 50, height: 50}}/>
                    <Text>Tử Vi hàng ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', margin: 10}}>
                    <Image source={require('../../src/images/batquai.png')} style={{width: 50, height: 50}}/>
                    <Text>Tử Vi hàng ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', margin: 10}}>
                    <Image source={require('../../src/images/batquai.png')} style={{width: 50, height: 50}}/>
                    <Text>Tử Vi hàng ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', margin: 10}}>
                    <Image source={require('../../src/images/batquai.png')} style={{width: 50, height: 50}}/>
                    <Text>Tử Vi hàng ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', margin: 10}}>
                    <Image source={require('../../src/images/batquai.png')} style={{width: 50, height: 50}}/>
                    <Text>Tử Vi hàng ngày</Text>
                </TouchableOpacity>


            </ScrollView>
        </View>
    );
};
module.exports = News;
