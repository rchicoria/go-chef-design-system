
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ActionButton from '../atoms/ActionButton'


const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 10,
    alignItems: "center"
  },
});


export default class Ingredients extends Component {
    render () {
        return (
            <View style={styles.buttonContainer}>
                <ActionButton title="Let's Cook" onPress={() => {}} />
            </View>
        )
    }
}
