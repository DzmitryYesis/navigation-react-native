import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    DetalsProps,
    HomeProps, NavigationType, RootStackParamList,
    RootTabParamList,
} from './src/navigation/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const useAppNavigation = () => useNavigation<NavigationType>()

const HomeScreen = ({route, navigation}: HomeProps) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button title={'Jump to UsersScreen'} onPress={() => {
                navigation.navigate('Users', {screen:'Stack2'})
            }}/>
        </View>
    );
}


const DetalsScreen = ({route, navigation,}: DetalsProps) => {
    const param = route.params
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>{JSON.stringify(param, null, 2)}</Text>
            <Button title={'Jump to HomeScreen'} onPress={() => {
                navigation.navigate('Home')
            }}/>
        </View>
    )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Stack1 = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1}}>
            <Text>Stack1</Text>
            <Button title={'Jump to HomeScreen'} onPress={() => {
                navigation.navigate('Users', {screem:'Stack3'})
            }}/>
        </View>
    )
}
const Stack2 = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1}}>
            <Text>Stack2</Text>
            <Button title={'Jump to stack 1'} onPress={() => {
                navigation.navigate('Users', {screen:'Stack1'})
            }}/>
        </View>
    )
}
const Stack3 = () => {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1}}>
            <Text>Stack3</Text>
            <Button title={'Jump to detals'} onPress={() => {
                navigation.navigate('Detals')
            }}/>
        </View>
    )
}

const Tab = createBottomTabNavigator<RootTabParamList>();

//const Stack = createDrawerNavigator<RootStackParamList>();

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
            <StatusBar style="auto"/>
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
