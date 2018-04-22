import React from 'react'
import { View, StyleSheet } from 'react-native'

import Icon from '../atoms/Icon';
import colors from '../colors.js';

const styles = StyleSheet.create({
	detailIcon: {
		marginRight: 5
	},
})

export default (props) => {
    return (
        <View style={styles.detailIcon}>
            <Icon name={ props.icon } width="26" height="26" fill={colors.grey} />
        </View>
    )
}