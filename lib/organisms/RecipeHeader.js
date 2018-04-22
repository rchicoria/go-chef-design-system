import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import RecipeHeaderItem from '../molecules/RecipeHeaderItem';
import colors from '../colors.js';

const styles = StyleSheet.create({
    recipeHeader: {
		backgroundColor: colors.lightGrey,
		paddingLeft: 14,
		paddingRight: 14,
	},
	recipeTitle: {
		marginTop: 30,
		maxWidth: "75%",
		fontSize: 24,
		fontWeight: "900",
		color: colors.text
	},
	recipeDetails: {
		marginTop: 14,
		marginBottom: 14,
		flexDirection: "row",
	},
})

export default (props) => {
    return (
        <View style={styles.recipeHeader}>
            <Text style={styles.recipeTitle}>{props.name.toUpperCase()}</Text>
            <View style={styles.recipeDetails}>
                <RecipeHeaderItem icon="Duration" title="Duration" value={props.duration} />
                <RecipeHeaderItem icon="Difficulty" title="Difficulty" value={props.difficulty} />
                <RecipeHeaderItem icon="RecipeImages" title="Images" value={props.images} />
            </View>
        </View>
    )
}