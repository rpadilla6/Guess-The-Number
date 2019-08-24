import React, {useState} from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import NumberContainer from './../components/NumberContainer';
import Card from '../components/Card';

const generateRandomWithinRange = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomWithinRange(min,max,exclude);
    }
    else {
        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomWithinRange(1,100, props.userChoice)
    );
    return (
    <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <Button title="LOWER" onPress={() => {}} />
            <Button title="GREATER" onPress={() => {}} />
        </Card>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    },
});

export default GameScreen;
