import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { headings } from '../utils/Styles';
import { connect } from 'react-redux'
import ReducersProps from '../../source/data/local/reducers/ReducersProps'
import ReducersActions from '../../source/data/local/reducers/ReducersActions'
import Helper from '../utils/Helper'
import Feather from 'react-native-vector-icons/Feather';
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { theme, language } = this.props

        return (
            <View style={{
                height: '100%',
                backgroundColor: theme.background
            }}>
                <Image source={require('../assets/images/giftbox.png')}
                    style={{
                        width: '70%',
                        height: '50%',
                        alignSelf: 'center',
                        marginTop: '10%',
                    }}
                ></Image>
                <Text style={{
                    ...headings.h1,
                    color: theme.text_color,
                    textAlign: 'center',
                    fontSize: 22
                }}>{language.hello_message}</Text>
                <Text style={{
                    ...headings.h2,
                    color: theme.text_color,
                    textAlign: 'center',
                    fontSize: 18
                }}>{language.gifts}</Text>
                <Text style={{
                    ...headings.h3,
                    color: theme.text_color,
                    textAlign: 'center',
                    fontSize: 16,
                    marginTop: '5%'
                }}>{language.promotions}</Text>
                <Text style={{
                    marginTop: "13%",
                    textAlign: 'center'
                }}>{language.know_work}</Text>
                <View style={{
                    marginTop: "3%", height: "0.2%", width: "50%", backgroundColor: theme.background_secondary_color
                    , alignSelf: "center"
                }}>

                </View>

            </View>

        );
    }
}
export default connect(ReducersProps, ReducersActions)(HomeScreen)