export const authActions = {
    onAuthStateChange: (payload) => ({
        type: 'on_auth_state_change',
        payload: payload
    }),
    signIn: (payload) => ({
        type: 'sign_in',
        payload: payload
    }),
    signUp: (payload) => ({
        type: 'sign_up',
        payload: payload
    }),
    signOut: () => ({
        type: 'sign_out',
    }),
    throwError: (payload) => ({
        type: 'throw_error',
        payload: payload
    })
};