import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

/**
 * It sends a request to the server to login a user.
 * @param dispatch - The dispatch function is provided by Redux. It's how you can dispatch actions to
 * the store.
 * @param user - The user object that will be sent to the server.
 */
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};