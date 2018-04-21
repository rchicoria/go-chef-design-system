import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../colors';
import Icon from './Icon'

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 11,
    paddingLeft: 11,
		// borderWidth: 1,
		// borderStyle: "solid",
		// borderColor: "black"
  }
});

export default (props) => (
  <TouchableOpacity {...props} style={styles.button}>
    <Icon
      name={props.iconName}
      width={28}
      height={28}
      fill={props.disabled ? colors.lightGrey : colors.black}
    />
  </TouchableOpacity>
)
