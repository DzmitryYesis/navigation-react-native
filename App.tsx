import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    NavigationType, RootStackParamList,
    RootTabParamList,
} from './src/navigation/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const useAppNavigation = () => useNavigation<NavigationType>()

const HomeScreen = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button title={'Jump to UsersScreen'} onPress={() => {
                navigation.navigate('Users', {screen: 'Stack2'})
            }}/>
        </View>
    );
}


const DetalsScreen = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Detals Screen</Text>
            <Button title={'Jump to UsersScreen'} onPress={() => {
                navigation.navigate('Users', {screen: 'Stack1'})
            }}/>
        </View>
    )
}


const Stack1 = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Stack1</Text>
            <Button title={'Jump to Home Screen'} onPress={() => {
                navigation.navigate('Home')
            }}/>
        </View>
    )
}
const Stack2 = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Stack2</Text>
            <Button title={'Jump Stack3'} onPress={() => {
                navigation.navigate('Users', {screen: 'Stack3'})
            }}/>
        </View>
    )
}
const Stack3 = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Stack3</Text>
            <Button title={'Jump to detals'} onPress={() => {
                navigation.navigate('Detals')
            }}/>
        </View>
    )
}

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>()

const RootStackNavigation = () => {
    return <Stack.Navigator>
        <Stack.Screen name={'Stack1'} component={Stack1}/>
        <Stack.Screen name={'Stack2'} component={Stack2}/>
        <Stack.Screen name={'Stack3'} component={Stack3}/>
    </Stack.Navigator>
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={'Home'}>
                <Tab.Screen name={'Home'} component={HomeScreen}/>
                <Tab.Screen name={'Users'} component={RootStackNavigation}/>
                <Tab.Screen name={'Detals'} component={DetalsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
