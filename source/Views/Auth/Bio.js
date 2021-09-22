import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Picker ,Button} from 'react-native';
import { headings } from '../../utils/Styles';
import { connect } from 'react-redux'
import ReducersProps from '../../../source/data/local/reducers/ReducersProps'
import ReducersActions from '../../../source/data/local/reducers/ReducersActions'
import Helper from '../../utils/Helper'
import DateTimePicker from '@react-native-community/datetimepicker';
const helper = new Helper()




class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            dateOfBirth: '',
            datePickerShow: true,
             mode:'', 
             setMode:'',
             show:false, 
             setShow:false

        };
    }
     onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        this.state.setShow(Platform.OS === 'ios');
        this.state.setDate(currentDate);
      };
      
      
      showDatepicker = () => {
        this.state.showMode('date');
      };

    render() {
        let { theme, language } = this.props
        return (
            <View>
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

                <View>
                    <View>
                        <Button onPress={this.showDatepicker} title="Show date picker!" />
                    </View>
                   
                    {this.state.show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>

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




