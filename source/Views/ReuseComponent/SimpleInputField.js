import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import ReducersProps from '../../../source/data/local/reducers/ReducersProps'
import ReducersActions from '../../../source/data/local/reducers/ReducersActions'
import Helper from '../../utils/Helper'
import { headings } from '../../utils/Styles';

const helper = new Helper()
class SimpleInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TextInput
            style={{
              paddingHorizontal: "4%",
              paddingVertical: this.props.textInputFieldHeightAdjust != undefined ? this.props.textInputFieldHeightAdjust : null,
              ...headings.h3,
              fontSize: 14,
            //   color: theme.text_secondary_color,
              width: this.props.serachEnable ? "88%" : null
            }}
            
            value={this.props.value}
            onChangeText={(text) => { this.props.textChange(text) }}
            // placeholder={this.props.placeHolder}                                                                               "}
            keyboardType={this.props.keyboard_type}
           
          />
      </View>
    );
  }
}
export default connect(ReducersProps, ReducersActions)(SimpleInputField)