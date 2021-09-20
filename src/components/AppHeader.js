import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fonts } from './styles';
import { COLORS, FONTS } from '../constants';
import { height } from './Resizer';

export default function AppHeader(props) {
    const [name, setName] = useState('');
    const navigation = useNavigation()

    return (
        <ImageBackground style={{ width: '100%', height: height(14), justifyContent: 'center' }} resizeMode={'stretch'} source={require('../assets/icons/header.png')}>
            <Image source={require('../assets/icons/overheader.png')} style={{ height: height(14), position: 'absolute' }} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ paddingHorizontal: 8, width: 30 }} onPress={props.onLeftPress}>
                    {props.onLeftPress && < Image style={{ height: 15, width: 15 }}
                        resizeMode='contain' source={require('../assets/icons/arrow-left.png')} />}
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={props.onTitlePress} style={[{ flex: 1 }]}>
                    <Text style={{ color: 'white', fontFamily: FONTS.bold, fontSize: 18 }}>{props.title}</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', paddingEnd: 30 }}>
                    <TouchableOpacity style={{ paddingHorizontal: 15, width: 30 }} onPress={props.onFilter}>
                        {props.onFilter && < Image style={{ height: 20, width: 20 }}
                            resizeMode='contain' source={require('../assets/icons/filter.png')} />}
                    </TouchableOpacity>
                    {props.onBell && <TouchableOpacity style={{ paddingHorizontal: 15, width: 30 }} onPress={props.onBell}>
                        < Image style={{ height: 20, width: 20 }}
                            resizeMode='contain' source={require('../assets/icons/bell.png')} />
                    </TouchableOpacity>}
                </View>
            </View>
            <Text style={{ color: 'lightgray', fontSize: 12, marginStart: 30 }}>{props.subTitle}</Text>

        </ImageBackground>
    );
}