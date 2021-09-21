import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { container, headings } from '../../source/utils/Styles'
import ReducersProps from '../../source/data/local/reducers/ReducersProps'
import ReducersActions from '../../source/data/local/reducers/ReducersActions'
import Urdu from '../../source/assets/languages/urdu.json';
import Eng from '../../source/assets/languages/english.json';
import Light from '../../source/assets/themes/light.json';
import Dark from '../../source/assets/themes/dark.json';
import Helper from '../utils/Helper';

const helper = new Helper()

class TestingScreen extends Component {

    render() {
        let { theme, language ,languageReducer ,themeReducer } = this.props
        return (
            <View style={{ ...container.center, backgroundColor: theme.background }}>
                <StatusBar backgroundColor={theme.background} barStyle={theme.content} />

                <Text style={{ ...headings.h3, color: theme.text }} onPress={()=>{
                    languageReducer(Eng)
                    themeReducer(Dark)
                    
                    helper.showToast("Language change to english and dark theme is active","#fff","black")


                    }}>Lang English  theme :DARk</Text>
                <Text style={{ ...headings.h3, color: theme.text }} onPress={()=>{
                    languageReducer(Urdu)
                    themeReducer(Light)
                    helper.showToast("Language change to urdu and light theme is active","#000","white")
                    }}>Lang Urdu light theme</Text>


                <Text style={{ ...headings.h1, color: theme.text }} > {language.app_name} </Text>
                
            </View>
        )
    }
}


export default connect(ReducersProps, ReducersActions)(TestingScreen)