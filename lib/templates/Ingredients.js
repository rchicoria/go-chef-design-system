
import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableHighlight, ScrollView } from 'react-native';

import RecipeHeader from '../organisms/RecipeHeader'
import RecipeIngredients from '../organisms/RecipeIngredients';
import RecipeFooter from '../organisms/RecipeFooter'

import colors from '../colors.js';

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
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

});


export default class Ingredients extends Component {
    render () {
        return (
						<SafeAreaView style={styles.recipeContainer}>
							<RecipeHeader name="Chicken Tikka Masala" duration="30 min" difficulty="Medium" images="30" />

							<ScrollView contentContainerStyle={styles.ingredientsContainer}  style={styles.ingredientsBg}>
                <RecipeIngredients ingredients={this.props.ingredients} />
								<RecipeFooter />
	            </ScrollView>
						</SafeAreaView>

        )
    }
}
