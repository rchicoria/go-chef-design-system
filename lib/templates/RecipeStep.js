import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text, TouchableHighlight } from 'react-native'

import NavBarButton from '@gochef/go-chef-design-system/lib/atoms/NavBarButton'

import RecipeStepsIndicator from '../molecules/RecipesStepsIndicator.js';
import colors from '../colors.js';
import Icon from '../atoms/Icon';

const styles = StyleSheet.create({
  recipeStepContainer: {
		flex: 1,
		flexDirection: "column",
    backgroundColor: colors.white,
  },

	stepContainer: {
		flex: 1,
		flexDirection: "row",
	},

	steps: {
		flexDirection: "column",
		justifyContent: "center",
		width: 50,
	},

	stepContent: {
		justifyContent: "center",
	},

	step: {
		backgroundColor: colors.mediumGrey,
		marginTop: 5,
		marginBottom: 5,
		width: 15,
		height: 5,
	},

	step20: {
		width: 20
	},

	step25: {
		width: 25
	},

	stepSelected: {
		marginTop: -2,
		marginBottom: -2,
		flexDirection: "row",
		alignItems: "center"
	},

	stepSelectedBar: {
		backgroundColor: colors.green,
		width: 30
	},

	stepNumber: {
		marginLeft: 5,
		fontSize: 17,
		fontWeight: "900",
		color: colors.green
	},

	stepContent: {
		flex: 1,
		justifyContent: "center",
	},

	stepText: {
		marginLeft: 30,
		marginRight: 30,
		fontSize: 36,
		fontWeight: "900",
		color: colors.text,
	},

	timerContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 30,
		marginLeft: 30,
	},

	time: {
		fontSize: 46,
		fontWeight: "900",
		color: colors.text,
	},

	status: {
		marginLeft: 15,
		flexDirection: "row",
		alignItems: "center"
	},

	line: {
		marginRight: 2,
		width: 15,
		height: 2,
		backgroundColor: colors.yellow,
	},

	statusText: {
		fontSize: 14,
		fontWeight: "bold",
		color: colors.yellow,
	},

	recipeNav: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: 44,
		paddingLeft: 40,
		paddingRight: 40,
	},

	buttonCamera: {
		width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 }
	}
});

export default class RecipeStep extends Component {
	constructor(props){
		super(props)
		this.state = {
			currStep: 0
		}
		this._nextStep = this._nextStep.bind(this)
		this._prevStep = this._prevStep.bind(this)
	}

	_nextStep() {
		this.setState({
			currStep: this.state.currStep+1
		})
	}
	_prevStep() {
		this.setState({
			currStep: this.state.currStep-1
		})
	}

    render(){
        return (
          <SafeAreaView style={styles.recipeStepContainer}>

						<View style={styles.stepContainer}>
							<RecipeStepsIndicator currStep={this.state.currStep} nSteps={this.props.instructions.length} />

							<View style={styles.stepContent}>
								<Text style={styles.stepText}>{ this.props.instructions[this.state.currStep] }</Text>

								{/*<View style={styles.timerContainer}>
									<View style={styles.timer}>
										<Text style={styles.time}>00:14</Text>
									</View>
									<View style={styles.status}>
										<View style={styles.line}></View>
										<Text style={styles.statusText}>start</Text>
									</View>
								</View>*/}
							</View>
						</View>

						<View style={styles.recipeNav}>
							<TouchableHighlight onPress={this._prevStep}><Icon name="Previous" width="26" height="26" fill="#EEEEEE" /></TouchableHighlight>
							<TouchableHighlight onPress={this._nextStep}><Icon name="Next" width="26" height="26" fill="#EEEEEE" /></TouchableHighlight>

							{/*<TouchableHighlight>
								<View style={styles.buttonCamera}>
									<Icon name="Camera" width="26" height="26" fill="#FFFFFF" />
								</View>
							</TouchableHighlight>*/}
						</View>
          </SafeAreaView>
        )
    }
}
