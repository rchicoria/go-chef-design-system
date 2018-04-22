import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text, TouchableHighlight } from 'react-native'

import NavBarButton from '@gochef/go-chef-design-system/lib/atoms/NavBarButton'

import colors from '../colors.js';
import Icon from '../atoms/Icon';

const styles = StyleSheet.create({
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
});

export default class RecipeStep extends Component {
    render(){
        console.log([...Array(this.props.nSteps)])

        return (
            <View style={styles.steps}>
            {
                [...Array(this.props.nSteps)].map((val, i) => {
                    console.log(i, this.props.currStep-2 )
                    if(i == this.props.currStep-2 || i == this.props.currStep+2){
                        return <View style={[styles.step, styles.step20]}></View>
                    } else if(i == this.props.currStep-1 || i == this.props.currStep+1){
                        return <View style={[styles.step, styles.step25]}></View>
                    } else if(i == this.props.currStep){
                        return (<View style={styles.stepSelected}>
                            <View style={[styles.step, styles.stepSelectedBar]}></View>
                            <Text style={styles.stepNumber}>{this.props.currStep+1}</Text>
                        </View>)
                    } else {
                        return <View style={[styles.step]}></View>
                    }
                }, this)
            }
            </View>
        )
    }
}
