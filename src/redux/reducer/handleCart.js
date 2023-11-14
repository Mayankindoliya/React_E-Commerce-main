const cart = null

const handleCart = (state = cart, action) => {
    switch (action.type) {
        case "SETCART":
            if (action.payload) {
                return { ...action.payload }
            }
            return null
        case "RESETCART":
            return null
        default:
            return state
            break;
    }
}

export default handleCart