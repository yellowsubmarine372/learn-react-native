import { StyleSheet, Pressable, Text, TextInput } from 'react-native';
import { Link } from 'expo-router';

//themed components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { Colors } from '../../constants/Colors';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';

const Login = () => {
    const handleSubmit = () => {
        console.log('login for submission');
    }

    return (
        <ThemedView style={styles.container}>
            
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login to Your Account
            </ThemedText>

            <ThemedTextInput
                placeholder='Email'
            />
            <ThemedTextInput
                placeholder='Password'
            />

            <ThemedButton onPress={handleSubmit}>
                <Text style={{color: '#f2f2f2'}}>Login</Text>
            </ThemedButton>

            <Spacer height={100}/>
            <Link href="/register">
                <ThemedText style={{ textAlign: 'center' }}>
                    Register Instead
                </ThemedText>
            </Link>

        </ThemedView>
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
})