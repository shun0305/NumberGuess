import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ style, children }) => {
    return <View style={{ ...styles.card, ...style }}>{children}</View>
};

const styles = StyleSheet.create({
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: '#f7287b',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10,
    }
});

export default Card;