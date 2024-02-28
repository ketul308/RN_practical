
import { ScrollView, KeyboardAvoidingView, Platform, Keyboard, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, SafeAreaProvider, } from 'react-native-safe-area-context';
import { styles } from './style';
import { hp, metrix } from '../../Theme/Contants';

type Props = {
    children: React.ReactNode
    bottomStaticComponent?: React.ReactNode
}

function KeyboardScroll(props: Props) {
    const [isKeyboardOpen, setKeyboardOpen] = useState(0);

    useEffect(() => {
        if (Platform.OS === "android") {
            const keyboardShownSubscription = Keyboard.addListener(
                'keyboardDidShow',
                () => {
                    setKeyboardOpen(metrix.hp_6_5)
                }
            );
            const keyboardHiddenSubscription = Keyboard.addListener(
                'keyboardDidHide',
                () => {
                    setKeyboardOpen(0)
                }
            );
            return () => {
                keyboardShownSubscription.remove();
                keyboardHiddenSubscription.remove();
            };
        }
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView
                    style={styles.keyboardView}
                    behavior={Platform.OS === "android" ? "padding" : 'height'}>
                    <ScrollView style={styles.scrollView}>
                        {props.children}
                    </ScrollView>
                    <View style={{ marginBottom: isKeyboardOpen }}>
                        {props.bottomStaticComponent}
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default KeyboardScroll