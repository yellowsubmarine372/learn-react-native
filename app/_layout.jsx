import { StyleSheet, Text, useColorScheme, View, StatusBar } from 'react-native';
import { Stack } from 'expo-router';
import { Colors } from '../constants/Colors';

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <>
            <StatusBar value="auto" />
            <Stack screenOptions={{ 
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title,
            }}>
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen name="about" options={{ title: 'About' }} />
                <Stack.Screen name="contact" options={{ title: 'Contact' }} />
            </Stack>
            <Text>Footer</Text>
        </>
    )
}

export default RootLayout;

const styles = StyleSheet.create({})
