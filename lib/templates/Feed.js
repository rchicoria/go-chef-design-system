
import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, TouchableHighlight, ScrollView } from 'react-native';

import colors from '../colors.js';
import Icon from '../atoms/Icon';

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

	feedHeader: {
		backgroundColor: colors.lightGrey,
    paddingRight: 14,
    paddingBottom: 30,
		paddingLeft: 14,
	},

	feedTitle: {
		marginTop: 30,
    marginBottom: 15,
		fontSize: 24,
		fontWeight: "900",
		color: colors.text
	},

  webScrollArea: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
  },




  webItem: {
    flexDirection: "column",
    marginRight: 14,
    backgroundColor: colors.white,
    width: 130,
    height: 100,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
  },

  webItemWrapper: {
    borderRadius: 10,
    overflow: "hidden"
  },

  webItemHeder: {
    padding: 10,
  },

  webRecipeName: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text,
  },

  webRecipeURL: {
    fontSize: 10,
    color: colors.text,
  },

  webItemImageContainer: {
    width: 130,
    height: 50,
  },

  webItemImage: {
    width: 130,
    height: 50,
  },

  categoriesContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: 14,
		paddingLeft: 14,
  },

  categoryTitle: {
    marginTop: 20,
    marginBottom: 15,
		fontSize: 24,
		fontWeight: "900",
		color: colors.text
  },

  categoryItemContainer: {
    marginRight: 14,
  },

  categoryItem: {
    // backgroundColor: colors.yellow,
    width: 130,
    height: 130,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
  },

  categoryImageWrapper: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden"
  },

  categoryImage: {
    width: 130,
    height: 130,
  },

  fatFree: {
    marginTop: 40,
    marginLeft: 40,
  },

  glutenFree: {
    width: 100,
    height: 100,
  },

  categoryItemName: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "800",
    color: colors.text,
  },






  typesContainer: {
    paddingRight: 14,
    paddingBottom: 30,
		paddingLeft: 14,
  },

  typesItem: {
    marginRight: 14,
    width: 130,
    height: 100,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    padding: 10,
  },

  typesTitle: {
    paddingTop: 10,
    marginBottom: 15,
    paddingLeft: 10,
		fontSize: 24,
		fontWeight: "900",
		color: colors.text
	},

  typeSubTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.white,
  },

  basicRecipes: {
    backgroundColor: colors.yellow,
  },

  fastRecipes: {
    backgroundColor: colors.green,
  },

  drinkRecipes: {
    backgroundColor: colors.orange,
  },

  healthRecipes: {
    backgroundColor: colors.teal,
  },
});


export default class Feed extends Component {
    render () {
			console.log(this.props.ingredients)
        return (
						<View style={styles.feedContainer}>
							<View style={styles.feedHeader}>
								<Text style={styles.feedTitle}>{"Arround the web".toUpperCase()}</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.webScrollArea}>
                    <View style={styles.webItem}>
                      <View style={styles.webItemWrapper}>
                        <View style={styles.webItemHeder}>
        								  <Text style={styles.webRecipeName}>Vietnam Beef</Text>
                          <Text style={styles.webRecipeURL}>tasty.co</Text>
                        </View>
                        <View style={styles.webItemImageContainer}>
                          <Image
                            style={styles.webItemImage}
                            source={require('../assets/images/web-01.jpg')}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.webItem}>
                      <View style={styles.webItemWrapper}>
                        <View style={styles.webItemHeder}>
        								  <Text style={styles.webRecipeName}>Vietnam Beef</Text>
                          <Text style={styles.webRecipeURL}>tasty.co</Text>
                        </View>
                        <View style={styles.webItemImageContainer}>
                          <Image
                            style={styles.webItemImage}
                            source={require('../assets/images/web-02.jpg')}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.webItem}>
                      <View style={styles.webItemWrapper}>
                        <View style={styles.webItemHeder}>
        								  <Text style={styles.webRecipeName}>Vietnam Beef</Text>
                          <Text style={styles.webRecipeURL}>tasty.co</Text>
                        </View>
                        <View style={styles.webItemImageContainer}>
                          <Image
                            style={styles.webItemImage}
                            source={require('../assets/images/web-03.jpg')}
                          />
                        </View>
                      </View>
                    </View>
  	            </ScrollView>
							</View>


              <View style={styles.categoriesContainer}>
                <Text style={styles.categoryTitle}>{"Categories".toUpperCase()}</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.webScrollArea}>
                    <View style={styles.categoryItemContainer}>
                      <View style={styles.categoryItem}>
                        <View style={[styles.categoryImageWrapper, { backgroundColor: "#FF5722" }]}>
                          <Image
                            style={[styles.categoryImage, styles.fatFree]}
                            source={require('../assets/images/fat-free.png')}
                          />
                        </View>
                      </View>
                      <Text style={styles.categoryItemName}>Fat Free</Text>
                    </View>
                    <View style={styles.categoryItemContainer}>
                      <View style={styles.categoryItem}>
                        <View style={[styles.categoryImageWrapper, { backgroundColor: "#81C784" }]}>
                          <Image
                            style={styles.categoryImage}
                            source={require('../assets/images/vegetarian.png')}
                          />
                        </View>
                      </View>
                      <Text style={styles.categoryItemName}>Vegetarian</Text>
                    </View>
                    <View style={styles.categoryItemContainer}>
                      <View style={styles.categoryItem}>
                        <View style={[styles.categoryImageWrapper, { backgroundColor: "#FFF176", flex: 1, justifyContent: "center", alignItems: "center" }]}>
                          <Image
                            style={[styles.categoryImage, styles.glutenFree]}
                            source={require('../assets/images/gluten-free.png')}
                          />
                        </View>
                      </View>
                      <Text style={styles.categoryItemName}>Gluten Free</Text>
                    </View>
  	            </ScrollView>
              </View>


              <View style={styles.typesContainer}>
                <Text style={styles.typesTitle}>{"Types".toUpperCase()}</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.webScrollArea}>
                    <View style={[styles.typesItem, styles.basicRecipes]}>
                        <Text style={styles.typeSubTitle}>Basic</Text>
                    </View>
                    <View style={[styles.typesItem, styles.fastRecipes]}>
      								 <Text style={styles.typeSubTitle}>Fast</Text>
                    </View>
                    <View style={[styles.typesItem, styles.drinkRecipes]}>
      								 <Text style={styles.typeSubTitle}>Drinks</Text>
                    </View>
                    <View style={[styles.typesItem, styles.healthRecipes]}>
      								 <Text style={styles.typeSubTitle}>Healthy</Text>
                    </View>
  	            </ScrollView>
              </View>
						</View>
        )
    }
}
