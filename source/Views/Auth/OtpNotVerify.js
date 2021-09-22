import React, { Component } from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { headings } from '../../utils/Styles';
import { connect } from 'react-redux'
import ReducersProps from '../../../source/data/local/reducers/ReducersProps'
import ReducersActions from '../../../source/data/local/reducers/ReducersActions'
import Helper from '../../utils/Helper'
import Feather from 'react-native-vector-icons/Feather';
const helper = new Helper()
class OtpNotVerify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      isloadingVerify: false
    };
  }
  otpVerifyCOntroller() {
    let { otp, user_id } = this.state
    let { theme, language, } = this.props
    if (otp == "" ) {
      helper.showToast(language.correct_otp, theme.alert_color)
      return
    }
    if (otp != "123456" ) {
      helper.showToast(language.otp_empty_alert, theme.alert_color)
      return
    }

    // this.setState({ isloadingVerify: true })

  }


  render() {
    let { theme, language } = this.props
    return (
      <View style={{
        backgroundColor: '#fff',
        // flex: 1
        height:'100%'
      }}>
         
        <View style={{
          width: '100%',
          height: 180,

        }}>
         
          
          <Image source={require('../../assets/images/bubbles.png')}
            style={{
              width: '100%',
              height: '130%',
              justifyContent: 'flex-end',
              marginLeft: '30%'
            }}
          ></Image>

        </View>
        <TouchableOpacity 
        onPress={()=> this.props.navigation.goBack()}
        style={{
            marginTop:'5%',
            marginLeft: '5%',
            position:'absolute'
          }}>
            <Feather name="chevron-left" size={30} ></Feather></TouchableOpacity>
        <Text style={{ ...headings.h2, color: theme.text_color, marginTop: "20%", textAlign: "center", fontWeight: "bold", }}>{language.invalid_otp}</Text>
        <Text style={{...headings.h3, color: theme.text_color, marginTop: "2%",fontSize:16, textAlign: "center",}}>{language.check_messgaes}

        </Text>
        <OTPInputView
          style={{ width: '90%', height: 90, alignSelf: "center", }}
          pinCount={6}

          autoFocusOnLoad={false}
          codeInputFieldStyle={{
            width: 35,
            height: 45,
            color: theme.text_color,
            fontSize: 20,
            marginHorizontal: 10,
            borderWidth: 1,
            borderColor: theme.button_color,
            borderRadius: 10
          }}
          codeInputHighlightStyle={{
            borderColor: "red",

            color: "black",
            fontSize: 20,
          }}
          onCodeFilled={(code => {
            console.log("Code is ", code, "you are good to go!")
            // console.log('Otpis',this.state.otp)
            this.setState({ otp: code })
          })}
        />

        


        <Text style={{ flexDirection: "row", width: "100%", marginTop: "5%", textAlign: "center" }}>
       
          <Text style={{ fontWeight: "900" }} onPress={() => this.props.navigation.navigate("OtpVerify")}> Resend OTP</Text>
        </Text>

        <View style={{
          marginTop: "3%", height: "0.2%", width: "50%", backgroundColor: theme.background_secondary_color
          , alignSelf: "center"
        }} />
      </View>
    );
  }
}
export default connect(ReducersProps, ReducersActions)(OtpNotVerify)