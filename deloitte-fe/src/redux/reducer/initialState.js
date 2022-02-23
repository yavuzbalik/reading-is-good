/* eslint-disable */

const initialState = { 
    user: {
        data: [],
        token: '',
        isLoading: false,
        loggedIn: false,
        error: false,
        loggingIn: false,
    },
    register: {
        error: false,
        registeringIn: false,
    },
    category: {
        data: [],
        error: false,
        isLoading: false,
        categoryAdded: false,
        updatedName: false
    },
    todo: {
        data: [],
        error: false,
        isLoading: false,
        itemAdded: false,
        updatedName: false
    }
};

export default initialState;