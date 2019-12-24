import React, {Component} from 'react';
import {Text, View, Button, Dimensions, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Octicons';

const ViewCalendar = () => {
    const {title, buttonTab} = styles;
    return (
        <View
            style={{
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                borderRadius: 5,
                borderColor: '#e0e0e0',
                borderWidth: 1,
                margin: 10,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1,
                    margin: 5,
                }}>
                <Text
                    style={{
                        color: '#666666',
                        fontWeight: 'bold',
                        flex: 1,
                        textAlign: 'center',
                    }}>
                    HAI
                </Text>
                <Text
                    style={{
                        color: '#666666',
                        fontWeight: 'bold',
                        flex: 1,
                        textAlign: 'center',
                    }}>
                    BA
                </Text>
                <Text
                    style={{
                        color: '#666666',
                        fontWeight: 'bold',
                        flex: 1,
                        textAlign: 'center',
                    }}>
                    TƯ
                </Text>
                <Text
                    style={{
                        color: '#666666',
                        fontWeight: 'bold',
                        flex: 1,
                        textAlign: 'center',
                    }}>
                    NĂM
                </Text>
                <Text
                    style={{
                        color: '#666666',
                        fontWeight: 'bold',
                        flex: 1,
                        textAlign: 'center',
                    }}>
                    SÁU
                </Text>
                <Text
                    style={{
                        color: '#666666',
                        fontWeight: 'bold',
                        flex: 1,
                        textAlign: 'center',
                    }}>
                    BẢY
                </Text>
                <Text
                    style={{
                        color: 'red',
                        fontWeight: 'bold',
                        flex: 1,
                        textAlign: 'center',
                    }}>
                    C.N
                </Text>
            </View>
            <View style={{borderBottomWidth: 1, borderColor: '#e0e0e0'}}/>
            <View
                style={{
                    flexDirection: 'row',
                    flex: 1,
                    margin: 5,
                }}>
                <TouchableOpacity style={{flex: 1}}>
                    <View
                        style={{
                            backgroundColor: '#01b875',
                            borderRadius: 5,
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16,
                                textAlign: 'center',
                            }}>
                            23
                        </Text>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 10,
                                marginTop: 10,
                                textAlign: 'center',
                            }}>
                            23
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}}>
                    <View>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 16,
                                textAlign: 'center',
                            }}>
                            23
                        </Text>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <Text
                                style={{
                                    color: '#666666',
                                    fontWeight: 'bold',
                                    fontSize: 10,
                                    marginTop: 10,
                                    textAlign: 'center',
                                    flex: 1,
                                }}>
                                23
                            </Text>
                            <View style={{paddingRight: 10}}>
                                <Ionicons color="red" name="primitive-dot" size={10}/>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}}>
                    <View>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 16,
                                textAlign: 'center',
                            }}>
                            23
                        </Text>
                        <Text
                            style={{
                                color: '#666666',
                                fontWeight: 'bold',
                                fontSize: 10,
                                marginTop: 10,
                                textAlign: 'center',
                            }}>
                            23
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}}>
                    <View>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 16,
                                textAlign: 'center',
                            }}>
                            23
                        </Text>
                        <Text
                            style={{
                                color: '#666666',
                                fontWeight: 'bold',
                                fontSize: 10,
                                marginTop: 10,
                                textAlign: 'center',
                            }}>
                            23
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}}>
                    <View>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 16,
                                textAlign: 'center',
                            }}>
                            23
                        </Text>
                        <Text
                            style={{
                                color: '#666666',
                                fontWeight: 'bold',
                                fontSize: 10,
                                marginTop: 10,
                                textAlign: 'center',
                            }}>
                            23
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}}>
                    <View>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 16,
                                textAlign: 'center',
                            }}>
                            23
                        </Text>
                        <Text
                            style={{
                                color: '#666666',
                                fontWeight: 'bold',
                                fontSize: 10,
                                marginTop: 10,
                                textAlign: 'center',
                            }}>
                            23
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}}>
                    <View>
                        <Text
                            style={{
                                color: 'red',
                                fontWeight: 'bold',
                                fontSize: 16,
                                textAlign: 'center',
                            }}>
                            23
                        </Text>
                        <Text
                            style={{
                                color: 'red',
                                fontWeight: 'bold',
                                fontSize: 10,
                                marginTop: 10,
                                textAlign: 'center',
                            }}>
                            23
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
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
module.exports = ViewCalendar;
