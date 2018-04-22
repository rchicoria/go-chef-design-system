
import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, TouchableHighlight, ScrollView } from 'react-native';

import NavBarButton from '@gochef/go-chef-design-system/lib/atoms/NavBarButton'

import MyRecipesHeader from '../organisms/MyRecipesHeader'
// import RecipeIngredients from '../organisms/RecipeIngredients';

import colors from '../colors.js';
import Icon from '../atoms/Icon';

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
    padding: 14,
	},

  myItem: {
    marginBottom: 20,
    height: 126,
    justifyContent: "center",
  },

  myItemContent: {
    justifyContent: "center",
    width: "100%",
    height: 96,
    backgroundColor: colors.lightGrey,
    paddingLeft: 14,
  },

  myItemTitle: {
    marginBottom: 10,
    maxWidth: "50%",
    fontSize: 17,
    fontWeight: "900",
    color: colors.text,
  },

  myItemImage: {
    position: "absolute",
    top: 0,
    right: 14,
    width: 126,
    height: 126,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
  },

  myItemDetailsContainer: {
    flexDirection: "row",
  },

  myItemDetails: {
    marginRight: 15,
    flexDirection: "row",
  },

  myItemDetailsText: {
    marginLeft: 5,
    color: colors.grey,
  }
});


export default class extends Component {

    render () {
        return (
						<SafeAreaView style={styles.recipeContainer}>
							<MyRecipesHeader name={this.props.name} />

							<ScrollView contentContainerStyle={styles.ingredientsContainer}  style={styles.ingredientsBg}>
                <View style={styles.myItem}>
                  <View style={styles.myItemContent}>
                    <Text style={styles.myItemTitle}>Chicken Tikka Masala</Text>
                    <View style={styles.myItemDetailsContainer}>
                      <View style={styles.myItemDetails}>
                        <Icon name="Duration" width="16" height="16" fill={colors.grey} />
                        <Text style={styles.myItemDetailsText}>44 min</Text>
                      </View>
                      <View style={styles.myItemDetails}>
                        <Icon name="Difficulty" width="16" height="16" fill={colors.grey} />
                        <Text style={styles.myItemDetailsText}>Medium</Text>
                      </View>
                    </View>
                  </View>

                  <Image
                    style={styles.myItemImage}
                    source={require('../assets/images/web-01.jpg')}
                  />
                </View>

                <View style={styles.myItem}>
                  <View style={styles.myItemContent}>
                    <Text style={styles.myItemTitle}>Chicken Tikka Masala</Text>
                    <View style={styles.myItemDetailsContainer}>
                      <View style={styles.myItemDetails}>
                        <Icon name="Duration" width="16" height="16" fill={colors.grey} />
                        <Text style={styles.myItemDetailsText}>31 min</Text>
                      </View>
                      <View style={styles.myItemDetails}>
                        <Icon name="Difficulty" width="16" height="16" fill={colors.grey} />
                        <Text style={styles.myItemDetailsText}>Medium</Text>
                      </View>
                    </View>
                  </View>

                  <Image
                    style={styles.myItemImage}
                    source={require('../assets/images/web-02.jpg')}
                  />
                </View>

                <View style={styles.myItem}>
                  <View style={styles.myItemContent}>
                    <Text style={styles.myItemTitle}>Lamb Shank</Text>
                    <View style={styles.myItemDetailsContainer}>
                      <View style={styles.myItemDetails}>
                        <Icon name="Duration" width="16" height="16" fill={colors.grey} />
                        <Text style={styles.myItemDetailsText}>24 min</Text>
                      </View>
                      <View style={styles.myItemDetails}>
                        <Icon name="Difficulty" width="16" height="16" fill={colors.grey} />
                        <Text style={styles.myItemDetailsText}>Easy</Text>
                      </View>
                    </View>
                  </View>

                  <Image
                    style={styles.myItemImage}
                    source={require('../assets/images/web-03.jpg')}
                  />
                </View>

                <View style={styles.myItem}>
                  <View style={styles.myItemContent}>
                    <Text style={styles.myItemTitle}>Noodle Salad</Text>
                    <View style={styles.myItemDetailsContainer}>
                      <View style={styles.myItemDetails}>
                        <Icon name="Duration" width="16" height="16" fill={colors.grey} />
                        <Text style={styles.myItemDetailsText}>16 min</Text>
                      </View>
                      <View style={styles.myItemDetails}>
                        <Icon name="Difficulty" width="16" height="16" fill={colors.grey} />
                        <Text style={styles.myItemDetailsText}>Easy</Text>
                      </View>
                    </View>
                  </View>

                  <Image
                    style={styles.myItemImage}
                    source={require('../assets/images/vegetarian.png')}
                  />
                </View>
	            </ScrollView>
						</SafeAreaView>
        )
    }
}
