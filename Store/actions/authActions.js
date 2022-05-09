export const setIsAuthed = () => {
    window.localStorage.setItem('stuud-isAuth', true)
    return {
        type: 'SET_IS_AUTHED',
    }
}

export const setIsDisconnected = () => {
    window.localStorage.removeItem('stuud-isAuth')
    return {
        type: 'SET_IS_DISCONNECT',
    }
}

export const setAuthedGeneralInfo = (generalInfos) => {
    return {
        type: 'SET_AUTHED_GENERAL_INFOS',
        payload: { general: generalInfos }
    }
}


// SET_AUTHED_GENERAL_INFOS
// SET_AUTHED_TOKEN