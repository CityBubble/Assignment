import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Modal, StyleSheet, Pressable, Image } from 'react-native';
import { headings } from '../utils/Styles';
import { connect } from 'react-redux'
import ReducersProps from '../../source/data/local/reducers/ReducersProps'
import ReducersActions from '../../source/data/local/reducers/ReducersActions'
import Helper from '../utils/Helper'
import Ionicons from 'react-native-vector-icons/Ionicons';
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render() {
        let { theme, language } = this.props

        return (
            <View 
            // onPress={() => this.setModalVisible(!this.state.modalVisible)}
            style={styles.centeredView}>
                <TouchableOpacity
                    onPress={() => this.setModalVisible(true)}
                    style={{
                        marginTop: '-180%',
                        marginLeft: '85%',
                        // position: 'absolute'
                    }}>
                    <Ionicons name="gift-outline" size={30} color={'pink'} ></Ionicons>
                    </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                      
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Image source={require('../assets/images/giftbox.png')}
                                style={{
                                    width: '70%',
                                    height: '25%',
                                    alignSelf: 'center',
                                    // marginTop: '5%',
                                }}
                            ></Image>
                            <Text style={{
                                ...headings.h1,
                                color: theme.text_color,
                                textAlign: 'center',
                                fontSize: 20,
                                marginTop: '3%'
                            }}>{language.hello_message}</Text>
                            <Text style={{
                                ...headings.h2,
                                color: theme.text_color,
                                textAlign: 'center',
                                fontSize: 15
                            }}>{language.gifts}</Text>
                            <Text style={{
                                ...headings.h3,
                                color: theme.text_color,
                                textAlign: 'center',
                                fontSize: 14,
                                marginTop: '2%'
                            }}>{language.promotions}</Text>
                            <Text style={{
                                marginTop: "18%",
                                textAlign: 'center'
                            }}>{language.know_work}</Text>
                            <View style={{
                                marginTop: "3%", height: "0.2%", width: "50%", backgroundColor: theme.background_secondary_color
                                , alignSelf: "center"
                            }}>

                            </View>
                            {/* <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable> */}
                        </View>
                    </View>
                </Modal>
               
            </View>

        );
    }
}
const styles = StyleSheet.create({
    centeredView: {
         flex: 1,
        // height:'60%',
        // backgroundColor:'plum',
        justifyContent: "center",
        alignItems: "center",
        //  marginTop: 22
    },
    modalView: {
        // margin: 20,
        height: '40%',
        width: '80%',
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default connect(ReducersProps, ReducersActions)(HomeScreen)

