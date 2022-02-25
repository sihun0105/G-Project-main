import firestore from '@react-native-firebase/firestore';

export const createUser = (currentUserId, email, password, phone, name, age) => {
  return firestore().collection('users').doc(currentUserId).set({
    email,
    password,
    phone,
    name,
    age
  });
};



