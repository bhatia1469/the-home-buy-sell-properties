import React, { useEffect, useState } from 'react';
import { Image, Platform, SafeAreaView, TouchableOpacity, View } from "react-native";
import { COLORS } from '../constants';
import AppStyles from './AppStyles';

export default function TabBarBuyer({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const [feedbackModal, setFeedbackModal] = useState(false);
    const [unreadCount, setUnreadCount] = useState(false);
    const [image, setImage] = useState('');

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    useEffect(() => {

    }, [])

    return (
        <View style={{ backgroundColor: '#f8f8f8' }}>
            <SafeAreaView style={[{ backgroundColor: 'white', borderTopEndRadius: 40, borderTopStartRadius: 40 }, AppStyles.shadow]} >

                <View style={[{ flexDirection: 'row', borderTopEndRadius: 40, borderTopStartRadius: 40 }]}>

                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === index;

                        let icon
                        if (route.name == "HomeBuyer") {
                            icon = isFocused ? require('../assets/icons/home.png') : require('../assets/icons/home.png')
                        } else if (route.name == "Search") {
                            icon = isFocused ? require('../assets/icons/search.png') : require('../assets/icons/search.png')
                        } else if (route.name == "Favorites") {
                            icon = isFocused ? require('../assets/icons/heart_gray.png') : require('../assets/icons/heart_gray.png')
                        } else if (route.name == "Messages") {
                            icon = isFocused ? require('../assets/icons/chat.png') : require('../assets/icons/chat.png')
                        } else if (route.name == "Settings") {
                            icon = require('../assets/icons/settings.png')
                        }

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };

                        return (
                            <TouchableOpacity
                                onPress={onPress}
                                activeOpacity={1}
                                keyExtractor={() => route.name}
                                onLongPress={onLongPress}
                                style={[{ flex: 1, height: 80 }]}>
                                <View style={{
                                    flex: 1, alignItems: 'center', justifyContent: 'center',
                                    paddingHorizontal: 8, paddingTop: 4
                                }}>
                                    <Image
                                        source={icon}
                                        style={{
                                            height: 30, width: 30, tintColor: isFocused ? COLORS.secondary : 'gray',
                                            resizeMode: 'contain', marginBottom: 10
                                        }} />
                                    {isFocused && <View style={{
                                        height: 6, width: 6, borderRadius: 3,
                                        backgroundColor: COLORS.secondary
                                    }} />}
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View >
            </SafeAreaView>
        </View>
    );
}
