import { View, Text, TouchableOpacity,Image} from 'react-native'
import React from 'react'

import { COLORS, FONTS, SIZES } from '../constants'

const CategoryCard = ({containerStyle,categoryItem,onPress}) => {
  return (
    <TouchableOpacity style={{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        paddingHorizontal:SIZES.padding,
        marginTop:10,
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.gray2,
        ...containerStyle,

    }}
    onPress={onPress}>
        {/* image */}
        <Image
        source={categoryItem.image}
        resizeMode='cover'
        style={{
            width:100,
            height:100,
            borderRadius:SIZES.radius,
        }}
        />
        

        {/* Details of category */}
        <View style={{
            flex:1,
            width:'65%',
            paddingHorizontal:20,
        }}>
            {/* Name of the category  */}
            <Text style={{
                flex:1,
                ...FONTS.h2
            }}>
                {categoryItem.name}
            </Text>

            {/* Servings of caegory */}
            <Text style={{
             
                color:COLORS.gray,
                ...FONTS.body4,
            }}>
                {categoryItem.duration} | {categoryItem.serving} Serving
            </Text>

        </View>
    </TouchableOpacity>
  )
}

export default CategoryCard