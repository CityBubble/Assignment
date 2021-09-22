import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { headings } from '../../utils/Styles';
import { connect } from 'react-redux'
import ReducersProps from '../../../source/data/local/reducers/ReducersProps'
import ReducersActions from '../../../source/data/local/reducers/ReducersActions'
import Helper from '../../utils/Helper'
import Feather from 'react-native-vector-icons/Feather';

const helper = new Helper()




class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            dateOfBirth: '',
            date: "",
            mobileNumber: ''


        };
    }

    render() {
        let { theme, language } = this.props
        return (
            <View>
                <TouchableOpacity 
        onPress={()=> this.props.navigation.goBack()}
        style={{
            marginTop:'5%',
            marginLeft: '5%',
            position:'absolute'
          }}>
            <Feather name="chevron-left" size={30} ></Feather></TouchableOpacity>
                <Text style={{
                    marginTop: '8%',
                    ...headings.h3,
                    textAlign: 'center',
                    color: theme.text_color
                }}>Name</Text>


                <TextInput
                    onChangeText={(name) => this.setState({
                        name: name
                    })}
                    style={{
                        marginTop: '5%',
                        borderWidth: 0.75,
                        borderRadius: 15,
                        marginHorizontal: "12%",
                        backgroundColor: theme.background,
                        padding: '3%'
                    }}
                // keyboardType={'number-pad'}
                ></TextInput>
                <Text style={{
                    marginTop: '5%',
                    ...headings.h3,
                    textAlign: 'center',
                    color: theme.text_color
                }}>Gender</Text>
                <View style={styles.container}>
                    <Picker style={styles.pickerStyle}
                        selectedValue={this.state.selectedName}
                        onValueChange={(itemValue, itemPosition) =>
                            this.setState({ selectedName: itemValue, choosenIndex: itemPosition })}
                    >

                        <Picker.Item label=" --Select--" value="sl" />

                        <Picker.Item label="Male" value="m" />
                        <Picker.Item label="Female" value="f" />
                        <Picker.Item label="Other" value="o" />
                    </Picker>
                </View>

                <Text style={{
                    marginTop: '5%',
                    ...headings.h3,
                    textAlign: 'center',
                    color: theme.text_color
                }}>DOB</Text>
                <DatePicker
                    style={{
                        width: '80%',
                        marginLeft: '5%',
                        borderRadius: 15,
                        // borderWidth:1
                    }}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: '80%',
                            top: 4,

                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => { this.setState({ date: date }) }}
                />

                <Text style={{
                    marginTop: '8%',
                    ...headings.h3,
                    textAlign: 'center',
                    color: theme.text_color
                }}>Mobile Number</Text>


                <TextInput
                    onChangeText={(mobileNumber) => this.setState({
                        mobileNumber: mobileNumber
                    })}
                    style={{
                        marginTop: '5%',
                        borderWidth: 0.75,
                        borderRadius: 15,
                        marginHorizontal: "12%",
                        backgroundColor: theme.background,
                        padding: '3%'
                    }}
                    keyboardType={'phone-pad'}
                ></TextInput>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("OtpVerify")}
                    style={{
                        backgroundColor: theme.button_color,
                        borderRadius: 25,
                        borderWidth: 1,
                        borderColor: theme.button_color,
                        height: 50,
                        justifyContent: 'center',
                        marginHorizontal: '16%',
                        marginTop: '15%',
                        elevation: 15
                    }}>
                    <Text style={{
                        ...headings.h2,
                        textAlign: 'center',

                    }}>Next</Text>

                </TouchableOpacity>
            </View>
        );
    }
}
export default connect(ReducersProps, ReducersActions)(Bio)
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 0.75,
        borderRadius: 15,
        height: 50,
        marginHorizontal: '12%',
        marginTop: '5%'
    },

    pickerStyle: {
        // height: 150,
        width: "100%",
        color: '#344953',
        justifyContent: 'center',

    }
})




