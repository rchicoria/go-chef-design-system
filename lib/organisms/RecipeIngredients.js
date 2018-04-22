import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import RecipeHeaderItem from '../molecules/RecipeHeaderItem';
import colors from '../colors.js';

const styles = StyleSheet.create({
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

})

export default (props) => {
  return (
    <View style={styles.ingredientsList}>
      {
        props.ingredients.map((ing, index) => {
          return (
            <View key={index} style={styles.ingredientsItem}>
              <Text style={styles.ingredientName}>{ing}</Text>
            </View>
          )
        }, this)
      }
    </View>
  )
}