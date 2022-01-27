export const LoginStart = (userCredentials) => ({
  type:"LOGIN_START"
})

export const LoginSucess = (user) => ({
  type:"LOGIN_SUCCESS",
  payload:user
})

export const LoginFailure = (user) => ({
  type:"LOGIN_FAILURE",
  payload:error
})
