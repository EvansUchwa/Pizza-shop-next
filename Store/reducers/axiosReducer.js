const defaultHeaders = {
    urlBase: 'http://localhost:3000',
    headers: {
        "Name": "Pizza-shop-api",
        "Version": "1.0"
    }
}

export const axiosReducer = (state = defaultHeaders, action) => {
    switch (action.type) {
        case 'SET_AUTH_TOKEN_HEADER':
            return { ...state, 'Authorization': 'Bearer ' + action.payload.token };

        case 'REMOVE_AUTH_TOKEN_HEADER':
            return defaultHeaders;


        default:
            return state;
    }
}
