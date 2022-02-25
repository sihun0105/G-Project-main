import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';

export const signIn = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      ToastAndroid.show('로그인', ToastAndroid.SHORT);
    })
    .catch(err => {
      console.log(err);
    });
};

export const signUp = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      ToastAndroid.show('가입완료', ToastAndroid.SHORT);
    })
    .catch(err => {
      console.log(err);
    });
};

export const signOut = () => {
  auth()
    .signOut()
    .then(() => {
      ToastAndroid.show('로그아웃', ToastAndroid.SHORT);
    });
};
