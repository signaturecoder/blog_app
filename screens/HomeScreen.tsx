import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StyledButton from '../components/StyledButton';

const HomeScreen = ({navigation}: any) => {
    const [count, setCount] = React.useState(0);
    const handleIncrementClicked = () => {
        setCount(count + 1);
    }
    const handleDecrementClicked = () => {
        setCount(count - 1);
    }
    const handleResetClicked = () => {
        setCount(0);
    }
    return (
        <View style={styles.container}>

            <Text onPress={() => navigation.navigate('About')} style={{ color: 'blue'}}>About</Text>
            <Text>Welcome to Expo App!</Text>
            <Text>Count: {count}</Text>
            <StyledButton btnName="+" clicked={handleIncrementClicked} />
            <StyledButton btnName="-" clicked={handleDecrementClicked} />
            <StyledButton btnName="reset" clicked={handleResetClicked} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
})
