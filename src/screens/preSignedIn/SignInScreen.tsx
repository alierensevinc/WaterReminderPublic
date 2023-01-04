import * as React from 'react';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';
import {useAuthContext} from "../../context/AuthContext";
import {signIn} from "../../util/AuthHelper";
import {signInStyle} from "../../styles/styles";
import {colorPalette} from "../../constants/color";

const SignInScreen = ({navigation}) => {
    const [authState, dispatch] = useAuthContext();
    const [state, setState] = useState<any>({email: '', password: ''});

    const handleOnSignIn = () => {
        signIn(dispatch, state.email, state.password);
    }

    const handleOnSignUp = () => {
        navigation.navigate('signup');
    }

    return (
        authState.isLoading ?
            (
                <View style={signInStyle.loadingContainer}>
                    <ProgressCircle size={180} indeterminate color={colorPalette.primary}/>
                </View>
            ) : (
                <View style={signInStyle.container}>
                    <Text style={signInStyle.header}>
                        Water Reminder
                    </Text>
                    <View style={signInStyle.inputContainer}>
                        <TextInput
                            style={signInStyle.input}
                            placeholder="Email..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setState({...state, email: text})}
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={signInStyle.input}
                            placeholder="Password..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setState({...state, password: text})}
                            secureTextEntry={true}
                        />
                        {
                            authState.errorMsg &&
                            <Text style={signInStyle.errorText}>
                                {authState.errorMsg}
                            </Text>
                        }
                        <TouchableOpacity style={signInStyle.signInButton} onPress={handleOnSignIn}>
                            <Text style={signInStyle.signInText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleOnSignUp}>
                            <Text style={signInStyle.signInText}>Dont have an account ? Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
    );
}


export default SignInScreen;