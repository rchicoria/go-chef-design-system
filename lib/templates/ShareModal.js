import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

import NavBarButton from '@gochef/go-chef-design-system/lib/atoms/NavBarButton'
import { SearchNavBarIcon, SearchNavBarIconActive } from '@gochef/go-chef-design-system/lib/atoms/SearchNavBarIcon'

import colors from '../colors.js';
import Icon from '../atoms/Icon';

const styles = StyleSheet.create({
  ModalOverlay: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.72)",
		padding: 50,
  },

	Modal: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		backgroundColor: colors.white,
		borderWidth: 6,
		borderStyle: "solid",
		borderColor: colors.yellow,
		borderRadius: 15,
		paddingRight: 30,
		paddingBottom: 30,
		paddingLeft: 30,
	},

	symbol: {
		marginTop: -53,
		marginBottom: 30,
		justifyContent: "center",
		alignItems: "center",
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: colors.yellow,
	},

	button: {
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
		paddingRight: 24,
		paddingLeft: 24,
  },

  buttonText: {
    fontSize: 17,
    fontWeight: "900",
    color: colors.white,
  },

	buttonCancel: {
		marginTop: 30,
		fontSize: 10,
		fontWeight: "bold",
		color: colors.grey,
	}
});

export default class ShareModal extends Component {
    render(){
        return (
          <View style={styles.ModalOverlay}>
						<View style={styles.Modal}>
							<View style={styles.symbol}>
								<Icon name="GoChefSymbol" height="60" />
							</View>

							<TouchableHighlight>
								<View style={styles.button}>
									<Text style={styles.buttonText}>{"Add Recipe".toUpperCase()}</Text>
								</View>
							</TouchableHighlight>

							<TouchableHighlight>
								<Text style={styles.buttonCancel}>{"Cancel".toUpperCase()}</Text>
							</TouchableHighlight>
						</View>
          </View>
        )
    }
}
