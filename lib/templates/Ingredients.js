
import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableHighlight, ScrollView } from 'react-native';

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
		fontSize: 10,
		color: colors.grey
	},

	detailValue: {
		fontSize: 14,
		fontWeight: "bold",
		color: colors.grey
	},

  ingredientsBg: {
    flex: 1,
    backgroundColor: colors.white
  },

	ingredientsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
		backgroundColor: colors.white,
    paddingTop: 60,
    paddingRight: 40,
    paddingLeft: 40,
	},

  ingredientsList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  ingredientsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  ingredientName: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text,
  },

  ingredientValue: {
    fontSize: 14,
    color: colors.text,
  },

  buttonContainer: {
    marginBottom: 10,
    alignItems: "center"
  },

  button: {
    width: 220,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 }
  },

  buttonText: {
    fontSize: 17,
    fontWeight: "900",
    color: colors.white,
  }
});


export default class Ingredients extends Component {
    render () {
			console.log(this.props.ingredients)
        return (
						<SafeAreaView style={styles.recipeContainer}>
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

							<ScrollView contentContainerStyle={styles.ingredientsContainer}  style={styles.ingredientsBg}>
                  <View style={styles.ingredientsList}>
    								{
    										this.props.ingredients.map((ing, index) => {
    										return (
    											<View style={styles.ingredientsItem}>
    												  <Text style={styles.ingredientName}>{ing.name}</Text>
    												  <Text style={styles.ingredientValue}>{ing.value}</Text>
    											</View>
    										)
    										}, this)
    								}
                  </View>

                  <View style={styles.buttonContainer}>
                    <TouchableHighlight>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>{"Let's Cook".toUpperCase()}</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
	            </ScrollView>
						</SafeAreaView>

        )
    }
}
