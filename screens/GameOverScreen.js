import React from 'react';
import { Text, View, StyleSheet, Image, Button} from 'react-native';
import defaultStyles from '../constants/default-styles';
import colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={defaultStyles.title}>Game Over</Text>
            <View style={styles.imageContainer}>
                <Image resizeMode="cover" style={styles.image} source={require('../assets/success.png')} />
            </View>
            <Text style={defaultStyles.bodyText}>Number of rounds: {props.rounds}</Text>
            <Text style={defaultStyles.bodyText}>Number was: {props.userNumber} </Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        marginHorizontal: 20,
        marginVertical: 20,
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 17,
        borderColor: colors.primary,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
export default GameOverScreen;
