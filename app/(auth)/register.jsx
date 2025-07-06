import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

//themed components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log('register for submission', email, password);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
        {/*dismiss keyboard when tapping outside*/}
            <ThemedView style={styles.container}>
                
                <Spacer />
                <ThemedText title={true} style={styles.title}>
                    Register For an Account
                </ThemedText>

                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 20 }}
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}
                />
                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 20 }}
                    placeholder='Password'
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />

                <ThemedButton onPress={handleSubmit}>
                    <Text style={{color: '#f2f2f2'}}>Register</Text>
                </ThemedButton>

                <Spacer height={100}/>
                <Link href="/login">
                    <ThemedText style={{ textAlign: 'center' }}>
                        Login Instead
                    </ThemedText>
                </Link>

            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30,
    },
})