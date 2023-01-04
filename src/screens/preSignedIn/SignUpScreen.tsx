import * as React from 'react';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useAuthContext} from "../../context/AuthContext";
import {signUp} from "../../util/AuthHelper";
import {signInStyle} from "../../styles/styles";

const SignUpScreen = ({navigation}) => {
    const [authState, dispatch] = useAuthContext();
    const [state, setState] = useState<any>({email: '', password: ''});

    const handleOnSignUp = () => {
        signUp(dispatch, state.email, state.password);
    }

    const handleOnSignIn = () => {
        navigation.navigate('signin');
    }

    return (
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
                <TouchableOpacity style={signInStyle.signInButton} onPress={handleOnSignUp}>
                    <Text style={signInStyle.signInText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOnSignIn}>
                    <Text style={signInStyle.signInText}>Already have an account ? Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default SignUpScreen;