import { View, Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,

} from 'react-native'
import React from 'react'

import {COLORS, SIZES, FONTS, icons} from '../constants'
import { BlurView } from '@react-native-community/blur'

const RecipeDetails=({recipeItem})=>{
    return(
        <View style={{
            flex:1,
        }}>
            {/* Name and Bookmarks */}
            <View 
            style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'space-between'
            }}
            >
                <Text style={{
                    width:'70%',
                    color: COLORS.white,
                    ...FONTS.h3,
                    fontSize:18,
                }}
                >
                    {recipeItem.name} 
                </Text>

                <Image
                source={recipeItem.isBookMark ? icons.bookmarkFilled: icons.bookmark}
                style={
                    {
                        height:20,
                        width:20,
                        marginRight: SIZES.base,
                        tintColor:COLORS.darkGreen,
                    }
                }
                
                
                />

            </View>

            {/* Duration and serving */}

            <Text style={{
                color:COLORS.lightGray,
                ...FONTS.body4,

            }}>
                {recipeItem.duration} | {recipeItem.serving} serving
            </Text>

        </View>

    )

}

const RecipeCardInfo=({recipeItem})=>{

    

    if(Platform.OS==='ios'){
        return(
            <BlurView 
            blurType='dark'
            style={styles.recipeCardContainer}
            >
                <RecipeDetails
                recipeItem={recipeItem}
                />
    
            </BlurView>
        )
    }
    else{
        return(
            <View style={
              {  ...styles.recipeCardContainer,
                backgroundColor:COLORS.transparentDarkGray
            }}>
                <RecipeDetails
                recipeItem={recipeItem}
                />
              

            </View>
        )
    }

}

const TrendingCard = ({recipeItem, onPress, containerStyle}) => {
  
   
  
    return (
    <TouchableOpacity style={{
        height:350,
        width:250,
        marginTop:SIZES.radius,
        marginRight:20,
        borderRadius:SIZES.radius,
        ...containerStyle
    }}
    onPress={onPress}>
      


      {/* Background image */}
      <Image 
      source={recipeItem.image}
      resizeMode='cover'
      style={{
        width:250,
        height:350,
        borderRadius:SIZES.radius,
      }}
      />
      {/* Cateogry */}
      <View style={{
        position:'absolute',
        top:20,
        left:15,
        paddingHorizontal:SIZES.radius,
        paddingVertical:5,
        backgroundColor:COLORS.transparentGray,
        borderRadius:SIZES.radius,
      }}>
        <Text style={{
            color:COLORS.white,
            ...FONTS.h4,
        }}>
            {recipeItem.category}
        </Text>

      </View>

      
      {/* Render Recipe Card info */}
      <RecipeCardInfo
      recipeItem={recipeItem}
      
      />




    </TouchableOpacity>
  )
}


const styles=StyleSheet.create({
    recipeCardContainer:{
        position:'absolute',
        bottom:10,
        left:10,
        right:10,
        height:100,
        paddingVertical:SIZES.radius,
        paddingHorizontal:10,
        borderRadius:SIZES.radius,
    },
})


export default TrendingCard