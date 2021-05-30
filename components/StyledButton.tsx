import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

type StyledButtonProps = {
    btnName: string,
    clicked: () => void
}

const StyledButton = ({ btnName, clicked }: StyledButtonProps) => {
    return (
        <TouchableOpacity onPress={clicked}>
            <View style={styles.container}>
                <Text style={styles.containerText}>{btnName}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default StyledButton

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 150,
        borderRadius: 50,
        backgroundColor: '#ffe135',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },

    containerText: {
        color: 'red',
        fontSize: 20,
    }
})
