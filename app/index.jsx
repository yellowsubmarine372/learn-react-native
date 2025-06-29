import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <View>
            <Text>The Number 1</Text>
            <Text>Reading List App</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})