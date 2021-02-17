import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    ScrollView,
    SafeAreaView,
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.screen}>
                    <TitleText>The Game is Over!!!</TitleText>
                    <View style={styles.imageContainer}>
                        <Image
                            fadeDuration={500}
                            source={require('../assets/Motivation.png')}
                            //source={{ uri: 'https://image.freepik.com/free-vector/people-with-sign-congratulation_10045-440.jpg' }}
                            style={styles.image}
                            resizeMode='cover'
                        />
                    </View>
                    <View style={styles.rerultContainer}>
                        <BodyText style={styles.resultText}>
                            Your phone needed <Text style={styles.highlight}>{roundsNumber}
                            </Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}
                            </Text>
                        </BodyText>
                    </View>
                    <MainButton onPress={onRestart}>NEW GAME</MainButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.5,
        //borderRadius: 200,
        //borderWidth: 3,
        //borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    rerultContainer: {
        marginHorizontal: 40,
        marginVertical: Dimensions.get('window').height / 60,
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    },

    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }

});

export default GameOverScreen;