import React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import defaultStyles from '../constants/default-styles';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={defaultStyles.title}>Game Over</Text>
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
});
export default GameOverScreen;
