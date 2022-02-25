import React, {useState} from 'react';
import {View, Text, SafeAreaView, Alert,ScrollView} from 'react-native';
import FormButton from '../../components/shared/FormButton';
import FormInput from '../../components/shared/FormInput';
import { COLORS } from '../../components/constants/theme';
import {signUp} from '../../utils/auth';
import {createUser} from '../../utils/database';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleOnSubmit = async () => {
    if (email != '' && password != '' && confirmPassword != '') {
      if (password == confirmPassword) {
        
        signUp(email, password);
        const currentUserId = Math.floor(100000 + Math.random() * 9000).toString();
        await createUser(currentUserId, email, password, phone, name, age);



        
        setEmail('');
        setPassword('');
        setPhone('');
        setName('');
        setAge('');
      } else {
        Alert.alert('비밀번호가 일치하지 않습니다');
      }
    }
  };
  
  

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
      }}>
      {/* 제목 */}
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          fontWeight: 'bold',
          marginVertical: 32,
        }}>
        회원가입
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

      {/* 비밀번호 확인 */}
      <FormInput
        labelText="Confirm Password"
        placeholderText="비밀번호 확인"
        onChangeText={value => setConfirmPassword(value)}
        value={confirmPassword}
        secureTextEntry={true}
      />
      {/* 이름 */}
      <FormInput
        labelText="Name"
        placeholderText="이름"
        onChangeText={value => setName(value)}
        value={name}
      />
      {/* 나이 */}
      <FormInput
        labelText="Age"
        placeholderText="나이"
        onChangeText={value => setAge(value)}
        value={age}
      />
      {/* 핸드폰 */}
      <FormInput
        labelText="Phone"
        placeholderText="핸드폰"
        onChangeText={value => setPhone(value)}
        value={phone}
      />
      

      {/* 가입 버튼 */}
      <FormButton
        labelText="회원가입"
        handleOnPress={handleOnSubmit}
        style={{width: '100%'}}
      />

      {/* 하단 */}
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Text>이미 계정이 존재하십니까?</Text>
        <Text
          style={{marginLeft: 4, color: COLORS.primary}}
          onPress={() => navigation.navigate('Signin')}>
          로그인
        </Text>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default SignUpScreen;
