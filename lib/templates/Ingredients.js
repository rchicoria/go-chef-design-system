
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import colors from '../colors.js';
import Icon from '../atoms/Icon';

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
  },

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

	recipeDetailsGroup: {
		flexDirection: "row",
		marginRight: 30
	},

	detailIcon: {
		marginRight: 5
	},

	detailParameters: {
		flexDirection: "column",
		justifyContent: "center"
	},

	detailTitle: {
		// marginBottom: -5,
		fontSize: 10,
		color: colors.grey
	},

	detailValue: {
		fontSize: 14,
		fontWeight: "bold",
		color: colors.grey
	},





	ingredientsContainer: {
		backgroundColor: colors.white,
	}
});


export default class Ingredients extends Component {
    render () {
			console.log(this.props.ingredients)
        return (
						<View style={styles.recipeContainer}>
							<View style={styles.recipeHeader}>
								<Text style={styles.recipeTitle}>{"Chicken Tikka Masala".toUpperCase()}</Text>

								<View style={styles.recipeDetails}>


									<View style={styles.recipeDetailsGroup}>
										<View style={styles.detailIcon}>
											<Icon name="Duration" width="26" height="26" fill="#757575" />
										</View>
										<View style={styles.detailParameters}>
											<Text style={styles.detailTitle}>Duration</Text>
											<Text style={styles.detailValue}>44 min</Text>
										</View>
									</View>

									<View style={styles.recipeDetailsGroup}>
										<View style={styles.detailIcon}>
											<Icon name="Difficulty" width="26" height="26" fill="#757575" />
										</View>
										<View style={styles.detailParameters}>
											<Text style={styles.detailTitle}>Difficulty</Text>
											<Text style={styles.detailValue}>Medium</Text>vv
										</View>
									</View>

									<View style={styles.recipeDetailsGroup}>
										<View style={styles.detailIcon}>
											<Icon name="RecipeImages" width="26" height="26" fill="#757575" />
										</View>
										<View style={styles.detailParameters}>
											<Text style={styles.detailTitle}>Images</Text>
											<Text style={styles.detailValue}>37</Text>
										</View>
									</View>



								</View>
							</View>

							<ScrollView style={styles.ingredientsContainer}>
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
	            </ScrollView>
						</View>

        )
    }
}
