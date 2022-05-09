export const setAuthHeaderToken = (token) => {
    window.localStorage.setItem('stuud-token', token)
    return {
        type: 'SET_AUTH_TOKEN_HEADER',
        payload: { token }
    }
}


export const removeAuthHeaderToken = () => {
    window.localStorage.removeItem('stuud-token')
    return {
        type: 'REMOVE_AUTH_TOKEN_HEADER',
    }
}