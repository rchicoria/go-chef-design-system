
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';


import colors from '../colors.js';

const styles = StyleSheet.create({
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


export default (props) => {
    return (
        <TouchableHighlight onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.title.toUpperCase()}</Text>
            </View>
        </TouchableHighlight>
    )
}

