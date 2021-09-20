import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar, SafeAreaView, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { COLORS } from '../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default BaseView = ({ children, header, scrollEnabled }) => {
    return (
        <View style={{ backgroundColor: '#f8f8f8', flex: 1 }}>
            {/* <SafeAreaView style={{ backgroundColor: COLORS.primary }} /> */}
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent={true} />
            {header}
            {/* <SafeAreaView style={{ flex: 1 }}> */}
            <KeyboardAwareScrollView
                scrollEnabled={scrollEnabled == undefined ? true
                    : scrollEnabled}>
                {children}
            </KeyboardAwareScrollView>
            {/* </SafeAreaView> */}
        </View >
    );
}