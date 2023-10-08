import { loginWithEmailPassword, logoutFirebase, registerUserWithEmail, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

    }
}

export const startGoogleSingIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await singInWithGoogle();

        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );
        
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        const resp = await loginWithEmailPassword({ email, password });
        console.log({resp}); 

        if ( !resp.ok ) return dispatch( logout( resp ) );

        dispatch( login( resp ) );

    }

}

export const startCreatingUserWithEmail = ({ email, password, displayName }) => {

    return async( dispatch ) => {
        
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmail({ email,password, displayName })
        
        if ( !ok ) return dispatch(logout({errorMessage}))

        dispatch( login({ uid, displayName, email, photoURL }) )
    }

}

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();
        dispatch( logout() );
    }
}

