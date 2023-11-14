
export const setCart = (cart) => {
    return {
        type: "SETCART",
        payload: cart
    }
}

export const resetCart = () => {
    return {
        type: "RESETCART"
    }
}

// for successful login
export const loginSuccess = (payload) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}