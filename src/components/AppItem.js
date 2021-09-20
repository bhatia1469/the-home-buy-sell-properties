import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { FONTS } from '../constants';
import { fontSize, height, width } from './Resizer';
import { Svg, Image as ImageSvg } from 'react-native-svg';

export default function AppItem({ isFor, isFav, style, navigation }) {

    return <Pressable onPress={() => { navigation.navigate(global.type == 'seller' ? 'PropertyDetailsSeller' : 'PropertyDetailsBuyer') }} style={[{
        flexDirection: 'row', borderRadius: width(5),
        marginHorizontal: width(5), marginVertical: height(1), backgroundColor: 'white'
    }, style]}>
        <Image style={{ width: width(30), borderTopLeftRadius: width(5), borderBottomLeftRadius: width(5) }}
            source={{ uri: 'https://i.pravatar.cc/300' }} />

        <View style={{
            borderRadius: height(2), backgroundColor: isFor == 'sale' ? '#23C133' : '#FFA811', paddingHorizontal: width(3),
            position: 'absolute', margin: width(3), paddingVertical: height(0.5), justifyContent: 'center'
        }}>
            <Text style={{
                fontSize: fontSize(3), fontFamily: FONTS.bold,
                color: 'white',
            }}>{isFor == 'sale' ? "For Sale" : "For Rent"}</Text>
        </View>
        <View style={{ padding: width(4), flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#585858', fontFamily: FONTS.regular, fontSize: fontSize(4) }}>Medina</Text>
                <Image
                    style={{ height: width(4), width: width(4) }}
                    resizeMode='contain'
                    source={isFav ? require('../assets/icons/fill_heart.png') : require('../assets/icons/heart_gray.png')} />
            </View>
            <Text style={{ color: '#1473E6', paddingVertical: 4, fontFamily: FONTS.medium, fontSize: fontSize(4) }}>$ 2,50,000</Text>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image
                        style={{ tintColor: 'lightgray', height: height(2), width: width(2), marginEnd: 4, top: Platform.OS == 'android' ? 4 : 0 }}
                        resizeMode='contain'
                        source={require('../assets/icons/bed.png')} />
                    <View>
                        <Text style={{ fontFamily: FONTS.light, color: '#999999' }}>Bedrooms</Text>
                        <Text style={{ fontFamily: FONTS.regular, color: '#585858' }}>05</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image
                        style={{ tintColor: 'lightgray', height: height(2), width: width(2), marginEnd: 4, top: Platform.OS == 'android' ? 4 : 0 }}
                        resizeMode='contain'
                        source={require('../assets/icons/bath.png')} />
                    <View>
                        <Text style={{ fontFamily: FONTS.light, color: '#999999' }}>Bathrooms</Text>
                        <Text style={{ fontFamily: FONTS.regular, color: '#585858' }}>04</Text>
                    </View>
                </View>
            </View>
            <Text style={{ fontFamily: FONTS.light, color: '#999999', marginTop: height(1) }}>Garden Square, California</Text>
        </View>
    </Pressable>
}