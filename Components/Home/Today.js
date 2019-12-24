import React, {Component} from 'react';
import {Text, View, Button, ImageBackground, Dimensions} from 'react-native';

const Today = () => {
    let screenWidth = Dimensions.get('screen').width;
    const {title, buttonTab} = styles;
    return (
        <ImageBackground
            style={{height: screenWidth * 400 / 405, width: '100%', margin: 10}}
            imageStyle={{borderRadius: 6}}
            source={{uri: 'https://image2.tin247.com/pictures/2019/01/15/soa1547528714.jpg'}}>
            <View style={{flexDirection:'column', margin:20}}>
                <Text style={{color: 'white', fontWeight:'bold',fontSize:15}}>THỨ HAI</Text>
                <Text style={{color: 'white', fontWeight:'bold',fontSize:20}}>23 Tháng 12</Text>
                <Text style={{color: 'white', fontWeight:'bold',fontSize:14}}>28 Tháng 11 (Đ), Kỷ Hợi</Text>
            </View>
            <View style={{flexDirection:'column', position:'absolute', bottom:10, margin:20}}>
                <Text style={{color: 'white', fontWeight:'bold',fontSize:14}}>Giờ Tân Mùi| N. Giáp Ngọ | T. Bính Tí</Text>
                <Text style={{color: 'white', fontWeight:'bold',fontSize:12}}>Tuổi xung: Mậu Tí, Nhâm Tí, Canh Dần, Nhâm Dần</Text>
                <Text style={{color: 'white', fontWeight:'bold',fontSize:12}}>Giờ hoàng đạo: Tí, Sửu, Mão, Ngọ, Thân, Dậu</Text>
            </View>
        </ImageBackground>
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
module.exports = Today;
