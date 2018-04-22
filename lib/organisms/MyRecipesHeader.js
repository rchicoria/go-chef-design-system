import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import MyRecipesHeaderItem from '../molecules/MyRecipesHeaderItem';
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
	}
})

export default (props) => {
    return (
        <View style={styles.recipeHeader}>
            <Text style={styles.recipeTitle}>{props.name}</Text>
            <View style={styles.recipeDetails}>
                <MyRecipesHeaderItem title="Most Recent" />
                <MyRecipesHeaderItem title="By Category" />
                <MyRecipesHeaderItem title="By Type" />
            </View>
        </View>
    )
}
