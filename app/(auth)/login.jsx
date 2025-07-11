import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

//themed components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { Colors } from '../../constants/Colors';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import { useUser } from '../../hooks/useUser';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const { login } = useUser()

    const handleSubmit = async () => {
        setError(null)

        try {
            await login(email, password)
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                
                <Spacer />
                <ThemedText title={true} style={styles.title}>
                    Login to Your Account
                </ThemedText>

                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 20 }}
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email} /*two way email binding*/
                />
                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 20 }}
                    placeholder='Password'
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />

                <ThemedButton onPress={handleSubmit}>
                    <Text style={{color: '#f2f2f2'}}>Login</Text>
                </ThemedButton>

                <Spacer />
                {error && <Text style={styles.error}>{error}</Text>}

                <Spacer height={100}/>
                <Link href="/register">
                    <ThemedText style={{ textAlign: 'center' }}>
                        Register Instead
                    </ThemedText>
                </Link>

            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Login;

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
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8,
    },
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
    },
})