import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
// export const SIGNUP_NEW_USER ='SIGNUP_NEW_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const receiveErrors = errors =>({
  type: RECEIVE_ERRORS,
  errors //errors: errors.errors??
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});


export const signup = (formUser) => dispatch => APIUtil.signup(formUser)
  .then((user)=>dispatch(receiveCurrentUser(user)), (failure)=> dispatch(receiveErrors(failure)));

export const logout = () => dispatch => APIUtil.logout()
  .then(() => dispatch(logoutCurrentUser()), (failure)=> dispatch(receiveErrors(failure)));

export const login = formUser => dispatch => APIUtil.login(formUser)
  .then(user => dispatch(receiveCurrentUser(user)), (failure)=> dispatch(receiveErrors(failure)));
