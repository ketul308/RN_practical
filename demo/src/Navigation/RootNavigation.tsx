
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import { All_Screen, MainStack } from './type'
import AddAgentScreen from '../Screens/AddAgentScreen/AddAgentScreen'
import ManageAgentScreen from '../Screens/ManageAgentScreen/ManageAgentScreen'

const RootNavigation = () => {

    const Stack = createStackNavigator<MainStack>();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS }}>
                <Stack.Group>
                    <Stack.Screen name={All_Screen.ManageAgentScreen} component={ManageAgentScreen} />
                    <Stack.Screen name={All_Screen.AddAgentScreen} component={AddAgentScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation