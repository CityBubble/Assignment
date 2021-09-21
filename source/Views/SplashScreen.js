import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { headings } from '../../utils/Styles';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Login");
        }, 3500)
    }
    render() {
        return (
            <View >
                <ImageBackground
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    source={{ uri: 'https://image.freepik.com/free-vector/blue-heart-bubble-background_53876-111685.jpg' }}>
                    <Text style={{
                    
                        textAlign: 'center',
                        fontSize:25,
                        color: '#000',
                        marginTop:'70%'

                    }}>Test App</Text>
                </ImageBackground>

            </View>
        );
    }
}
