import {NavigationProp, NavigatorScreenParams} from '@react-navigation/native'
export type RootTabParamList = {
    Home: undefined;
    Users: NavigatorScreenParams<RootStackParamList>;
    Detals: undefined
};

export type RootStackParamList = {
    Stack1:undefined
    Stack2:undefined
    Stack3:undefined
}

export type NavigationType = NavigationProp<RootTabParamList>