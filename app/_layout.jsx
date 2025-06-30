import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

const RootLayout = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack screenOptions={{ 
                headerStyle: { backgroundColor: '#ddd' },
                headerTintColor: '#333',
            }}>
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen name="about" options={{ title: 'About' }} />
                <Stack.Screen name="contact" options={{ title: 'Contact' }} />
            </Stack>
            <Text>Footer</Text>
        </View>
    )
}

export default RootLayout;

const styles = StyleSheet.create({})
