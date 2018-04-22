import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

// import RecipeHeaderIcon from '../atoms/RecipeHeaderIcon';
import colors from '../colors.js';

const styles = StyleSheet.create({
  recipeDetailsGroup: {
		marginRight: 30,
    paddingTop: 7,
    paddingBottom: 7
	},

  highlight: {
    position: "absolute",
    top: 0,
    left: 15,
    width: "100%",
    height: 28,
    backgroundColor: colors.green,
  },

	detailTitle: {
		fontSize: 10,
    fontWeight: "bold",
		color: colors.text
	},
})

export default (props) => {
    return (
        <View style={styles.recipeDetailsGroup}>
          <View style={styles.highlight}></View>
          <Text style={styles.detailTitle}>{props.title.toUpperCase()}</Text>
        </View>
    )
}
