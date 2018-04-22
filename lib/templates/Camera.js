import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { RNCamera } from 'react-native-camera';

import NavBarButton from '@gochef/go-chef-design-system/lib/atoms/NavBarButton'
import Icon from '../atoms/Icon';
import colors from '../colors';

export default class extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#212121',
            borderBottomWidth: 0,
        },
        headerLeft: <NavBarButton iconName="Close" fill='white' />,
        tabBarVisible: false
    };
    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                    aspect={'fill'}
                />

                <View style={styles.maskCircle}></View>

                <View style={styles.cameraOptions}>
                    <Icon name="Cup" width="32" height="32" fill={colors.text} />
                    <Icon name="Dish" width="32" height="32" fill={colors.white} />
                    <Icon name="Pan" width="32" height="32" fill={colors.text} />
                    <Icon name="Board" width="32" height="32" fill={colors.text} />
                    <Icon name="Cupecake" width="32" height="32" fill={colors.text} />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <View style={styles.captureInside}></View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    takePicture = async function () {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options)
            console.log(data.uri);
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        marginTop: 100,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    },
    maskCircle: {
        position: "absolute",
        marginLeft: 35,
        marginTop: 136,
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.75)"
    },
    cameraOptions: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30,
        marginLeft: 60,
        marginRight: 60,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    capture: {
        justifyContent: "center",
        alignItems: "center",
        width: 74,
        height: 74,
        borderWidth: 4,
        borderStyle: "solid",
        borderColor: "#26E69D",
        borderRadius: 37,
    },
    captureInside: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#EEEEEE"
    }
});