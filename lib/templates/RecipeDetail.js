
import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableHighlight, ScrollView } from 'react-native';

import NavBarButton from '@gochef/go-chef-design-system/lib/atoms/NavBarButton'

import RecipeHeader from '../organisms/RecipeHeader'
import RecipeIngredients from '../organisms/RecipeIngredients';

import colors from '../colors.js';

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
  },

  ingredientsBg: {
    flex: 1,
    backgroundColor: colors.white,
  },

	ingredientsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
		backgroundColor: colors.white,
    paddingTop: 60,
    paddingRight: 40,
    paddingLeft: 40,
    paddingBottom: 37
	},

});


export default class extends Component {

    render () {
        return (
						<SafeAreaView style={styles.recipeContainer}>
							<RecipeHeader name={this.props.name} duration={this.props.duration} difficulty="Medium" images="30" />

							<ScrollView contentContainerStyle={styles.ingredientsContainer}  style={styles.ingredientsBg}>
                <RecipeIngredients onPressAction={this.props.onPressAction} ingredients={this.props.ingredients} />
	            </ScrollView>
						</SafeAreaView>
        )
    }
}
