const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token")
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      const user = action.payload.user
      const token = action.payload.token
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("token", token)
      return { ...state, user, token, isAuthenticated: true }
    case 'LOGOUT':
      localStorage.clear();
      return {}
    default:
      return state
  }
}

export default user;