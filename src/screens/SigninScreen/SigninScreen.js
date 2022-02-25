import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import FormButton from '../../components/shared/FormButton';
import FormInput from '../../components/shared/FormInput';
import { COLORS } from '../../components/constants/theme';
import { signIn } from '../../utils/auth';

const SigninScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = () => {
    if (email != '' && password != '') {
      signIn(email, password);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
      }}>
      {/* 상단 */}
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          fontWeight: 'bold',
          marginVertical: 32,
        }}>
        로그인
      </Text>

      {/* 이메일 */}
      <FormInput
        labelText="Email"
        placeholderText="이메일"
        onChangeText={value => setEmail(value)}
        value={email}
        keyboardType={'email-address'}
      />

      {/* 비밀번호 */}
      <FormInput
        labelText="Password"
        placeholderText="비밀번호"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />

      {/* 가입 button */}
      <FormButton
        labelText="로그인"
        handleOnPress={handleOnSubmit}
        style={{width: '100%'}}
      />

      {/* 하단 */}
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Text>계정이 존재하지 않습니까?</Text>
        <Text
          style={{marginLeft: 4, color: COLORS.primary}}
          onPress={() => navigation.navigate('SignUp')}>
          회원가입
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SigninScreen;
