import React, { Component } from 'react';
import { View, Text, Image, Picker, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { headings } from '../../utils/Styles';
import { connect } from 'react-redux'
import ReducersProps from '../../../source/data/local/reducers/ReducersProps'
import ReducersActions from '../../../source/data/local/reducers/ReducersActions'
import Helper from '../../utils/Helper'
const helper = new Helper()

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedName: '',
            phoneNumber: ""
        };
    }

    render() {
        let { theme, language } = this.props
        return (
            <View style={{
                backgroundColor: '#fff',
                height: '100%'
            }}>
                <Image
                    style={{
                        width: 150,
                        alignSelf: 'center',
                        height: 150
                    }}
                    resizeMode={'center'}
                    source={require('../../assets/images/location.png')}></Image>
                <Text style={{
                    ...headings.h3,
                    color: theme.text_color,
                    textAlign: 'center',
                    marginTop: '5%'
                }}>{language.tell_city}</Text>
                <View style={styles.container}>
                    <Picker style={styles.pickerStyle}
                        selectedValue={this.state.selectedName}
                        onValueChange={(itemValue, itemPosition) =>
                            this.setState({ selectedName: itemValue, choosenIndex: itemPosition })}
                    >

                        <Picker.Item label=" --Select--" value="sl" />

                        <Picker.Item label="Amritsar" value="amr" />
                        <Picker.Item label="Lahore" value="lhr" />
                        <Picker.Item label="Delhi" value="dl" />
                    </Picker>
                </View>

                <View style={{
                    marginTop: "7%", height: "0.4%", width: "90%", backgroundColor: 'grey'
                    , alignSelf: "center"
                }} />


                <Text style={{
                    marginTop: '8%',
                    ...headings.h2,
                    fontSize: 18,
                    color: theme.text_color,
                    textAlign: 'center'
                }}>{language.any_referall}</Text>
                <Text style={{
                    ...headings.h3,
                    fontSize: 15,
                    color: theme.text_color,
                    textAlign: 'center',
                    // marginTop: 0,
                }}>{language.provide_us}</Text>


                <TextInput
                    placeholder={'999999999'}
                    onChangeText={(phoneNumber) => this.setState({
                        phoneNumber: phoneNumber
                    })}
                    style={{
                        marginTop: '8%',
                        borderWidth: 1,
                        borderColor: 'grey',
                        borderRadius: 15,
                        marginHorizontal: "12%",
                        backgroundColor: theme.background,
                        padding: '3%',
                        elevation:12
                    }}
                    keyboardType={'phone-pad'}
                ></TextInput>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Bio")}
                    style={{
                        backgroundColor: theme.button_color,
                        borderRadius: 25,
                        borderWidth: 1,
                        borderColor: theme.button_color,
                        height: 50,
                        justifyContent: 'center',
                        marginHorizontal: '16%',
                        marginTop: '21%',
                        elevation: 15
                    }}>
                    <Text style={{
                        ...headings.h2,
                        textAlign: 'center',

                    }}>Next</Text>

                </TouchableOpacity>
            </View >
        );
    }
}
export default connect(ReducersProps, ReducersActions)(Signup)
const styles = StyleSheet.create({
    container: {

        borderWidth: 1,
        borderRadius: 20,
        height: 50,
        marginHorizontal: '10%',
        borderColor: 'grey',
        // elevation:20
    },

    pickerStyle: {
        // height: 150,
        // width: "100%",
        color: '#cf0268',
        justifyContent: 'center',

    }
})