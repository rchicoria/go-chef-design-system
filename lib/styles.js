import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
    navBar: {
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
        backgroundColor: colors.white,
    },
    tabBar: {
        borderTopWidth: 1,
        borderTopColor: colors.lightGrey,
        backgroundColor: colors.veryLightGrey,
    }
});