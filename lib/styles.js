import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
    navBar: {
      borderBottomWidth: 0,
      backgroundColor: colors.lightGrey,
    },

    tabBar: {
      borderTopWidth: 1,
      borderTopColor: colors.lightGrey,
      backgroundColor: colors.red,
    }
});
