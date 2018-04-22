import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import RecipeHeaderIcon from '../atoms/RecipeHeaderIcon';
import colors from '../colors.js';

const styles = StyleSheet.create({
    recipeDetailsGroup: {
		flexDirection: "row",
		marginRight: 30
	},

	detailParameters: {
		flexDirection: "column",
		justifyContent: "center"
	},

	detailTitle: {
		fontSize: 10,
		color: colors.grey
	},

	detailValue: {
		fontSize: 14,
		fontWeight: "bold",
		color: colors.grey
	},
})

export default (props) => {
    return (
        <View style={styles.recipeDetailsGroup}>
            <RecipeHeaderIcon icon={props.icon} />
            <View style={styles.detailParameters}>
                <Text style={styles.detailTitle}>{ props.title }</Text>
                <Text style={styles.detailValue}>{ props.value }</Text>
            </View>
        </View>
    )
}
