import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { headings } from '../../utils/Styles';
import { connect } from 'react-redux'
import ReducersProps from '../../../source/data/local/reducers/ReducersProps'
import ReducersActions from '../../../source/data/local/reducers/ReducersActions'
import Helper from '../../utils/Helper'
const helper = new Helper()

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber:''

        };
    }
    loginController(){
        let{phoneNumber}=this.state
        let{language,theme}=this.props
        if(phoneNumber == ''){
            helper.showToast(language.login_error, theme.alert_color)
            return
        }
        this.props.navigation.navigate('OtpVerify')
    }
    render() {
        let { theme, language } = this.props
        return (
            <View style={{
                backgroundColor:'#fff',
                height:'100%'

            }}>
                <Text style={{
                    ...headings.h1,
                    marginTop: '25%',
                    textAlign: 'center',
                    fontSize: 22,
                    color:theme.text_color

                }}>{language.welcome_message}</Text>
                <Text style={{
                    ...headings.h2,
                    color:theme.text_color,
                    fontSize: 18,
                    textAlign: 'center',
                    marginTop: "15%",
                }}>{language.provide_number}</Text>
                <TextInput 
                placeholder={'99999999999'}
                onChangeText={(phoneNumber)=>this.setState({
                    phoneNumber:phoneNumber
                })}
                    style={{
                    marginTop: '3%',
                    borderWidth: 1,
                    borderColor: 'grey',
                    borderRadius: 15,
                    marginHorizontal: "12%",
                    backgroundColor: theme.background,
                    padding: '3%',
                    elevation:10
                }}
                    keyboardType={'phone-pad'}
                ></TextInput>


                <TouchableOpacity
                onPress={()=>this.loginController()}
                style={{
                    backgroundColor: theme.button_color,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: theme.button_color,
                    height: 50,
                    justifyContent: 'center',
                    marginHorizontal: '18%',
                    marginTop: '10%',
                    elevation:15
                }}>
                    <Text style={{
                        ...headings.h2,
                        textAlign: 'center',

                    }}>Next</Text>

                </TouchableOpacity>
                <View
                style={{
                    flexDirection:'row',
                    marginTop: "3%",
                    // marginLeft:'18%'
                    marginHorizontal:'20%'

                }}
                >
                    <Text style={{
                        ...headings.h3,
                        color:theme.text_color
                    }}>{language.new_user}</Text>
                    <Text 
                    onPress={()=>this.props.navigation.navigate('Signup')}
                    style={{
                        ...headings.h3,
                        color:theme.text_signup_color
                    }}>{language.signup}</Text>
                </View>

                <Image
                    style={{
                        width: '60%',
                        height: '20%',
                        alignSelf: 'center',
                        marginTop:'25%'

                    }}
                    source={require('../../assets/images/login_screen.png')}
                ></Image>
            </View>
        );
    }
}
export default connect(ReducersProps, ReducersActions)(Login)

