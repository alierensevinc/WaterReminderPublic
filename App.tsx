import * as React from 'react';
import {AuthProvider} from "./src/context/AuthContext";
import {FirebaseProvider} from "./src/context/FirebaseContext";
import AppNavigationContext from "./src/AppNavigationContext";

export default function App() {
    return (
        <AuthProvider>
            <FirebaseProvider>
                <AppNavigationContext/>
            </FirebaseProvider>
        </AuthProvider>
    );
}
