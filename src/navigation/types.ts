import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {NavigationProp, NavigatorScreenParams} from '@react-navigation/native'
export type RootTabParamList = {
    Home: undefined;
    Users: NavigatorScreenParams<RootStackParamList>;
    Detals: {
        id: number,
        name: string,
        age: number,
        friends: string[]
    };
};

export type RootStackParamList = {
    Stack1:undefined
    Stack2:undefined
    Stack3:undefined
}

export type HomeProps = NativeStackScreenProps<RootTabParamList, 'Home'>;
export type UsersProps = NativeStackScreenProps<RootTabParamList, 'Users'>;
export type DetalsProps = NativeStackScreenProps<RootTabParamList, 'Detals'>;


export type NavigationType = NavigationProp<RootTabParamList>