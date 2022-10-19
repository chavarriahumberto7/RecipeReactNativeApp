import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient'
import { COLORS,FONTS } from '../constants'
import { color } from 'react-native-reanimated'
const CustomButton = ({butttonText,buttonContainerStyle,colors,onPress}) => {

   
  
  if(colors.length>0){

      return (
        <TouchableOpacity onPress={onPress}>
             <LinearGradient 
            start={{x:0, y:0}}
            end={{x:1,y:0}}
            colors={colors}
            style={{
                ...buttonContainerStyle
            }}
            >
            <Text style={
                {
                    textAlign:'center',
                    color: COLORS.white,
                    ...FONTS.h2,
                }
            }>
                {butttonText}

            </Text>
            </LinearGradient>
        </TouchableOpacity>
      )
  }else{
    return(<TouchableOpacity onPress={onPress}
    style={{...buttonContainerStyle}}>
        <Text style={
            {
                textAlign:'center',
                color: COLORS.white,
                ...FONTS.h2,
            }
        }>
            {butttonText}

        </Text>
    </TouchableOpacity>)
  }
  
}

export default CustomButton