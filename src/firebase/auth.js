import firebase from 'firebase/app';
import 'firebase/auth';

export const signup = async ({ firstName, lastName, email, password }) => {
  const resp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const user = resp.user;
  await user.updateProfile({ displayName: `${firstName} ${lastName}` });
  return user;
};

export const logout = () => {
  return firebase.auth().signOut();
};

export const login = async ({ email, password }) => {
  const resp = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  return resp.user;
};
