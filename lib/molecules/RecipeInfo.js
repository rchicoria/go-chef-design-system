
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import colors from '../colors.js';

const styles = StyleSheet.create({
  test: {
    flex: 1,
    backgroundColor: colors.white
  }
});


export default class Ingredients extends Component {
    render () {
			console.log(this.props.ingredients)
        return (

            <View style={styles.test}>
							{
									this.props.ingredients.map((ing, index) => {
									return (
										<View>
											<Text>{ing.name}</Text>
											<Text>{ing.value}</Text>
										</View>
									)
									}, this)
							}
            </View>

        )
    }
}
