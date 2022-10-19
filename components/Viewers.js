import { View, Text,Image } from 'react-native'
import React from 'react'
import { COLORS,FONTS,SIZES } from '../constants'


function testinGiNFORMATION(){
   

    
   
}

const Viewers=({viewerList})=>{
    
    if(viewerList?.length==0){

        return(
            <View style={{
                alignItems:'center',
                justifyContent:'center'
            }}>
        
                <Text style={{
                    color:COLORS.lightGray2,
                    ...FONTS.body4,
                }}>Be the first one to try this</Text>
        
            </View>)
    } else  if(viewerList?.length<=4){

        return(
            <View style={{

            }}>
                {/* profile section */}
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'flex-end',
                    marginBottom:10,

                }}>

                    {viewerList?.map((item,index)=> (
                        <View key={index}
                        style={{
                            height:50,
                            width:50,
                            marginLeft: index==0? 0: -20,
                        }}>

                            <Image
                            source={item.profilePic}
                            style={{
                                width:50,
                                height:50,
                                borderRadius:25,

                            }}
                            
                            />
                            
                        </View>
                    ))}

                </View>

                {/* text section */}
                <Text style={{
                    color:COLORS.lightGray2,
                    textAlign:'right',
                    ...FONTS.body4,
                    lineHeight:18,
                }}>
                    {viewerList?.length} people
                </Text>

                <Text style={{
                    color:COLORS.lightGray2,
                    textAlign:'right',
                    ...FONTS.body4,
                    lineHeight:18

                }}>
                    Already tried this

                </Text>

            </View>

        )

    }

   else
   {
    return(
        <View>
            {/* Profile section */}
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                marginBottom:10,

            }}>
                {
                    viewerList?.map((item,index)=>{
                        if(index<=2){
                            return(
                                <View 
                                key={index}
                                style={{
                                    height:50,
                                    width:50,
                                    marginLeft: index==0?0:-20
                                }}>
                                    <Image
                                    source={item.profilePic}
                                    style={{
                                        width:50,
                                        height:50,
                                        borderRadius:25
                                    }}
                                    
                                    />


                                </View>

                            )
                        }
                        if(index==3){
                            return(
                                <View key={index}
                                style={{
                                    height:50,
                                    width:50,
                                    borderRadius:25,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    backgroundColor:COLORS.darkGreen,
                                    marginLeft:-20,

                                }}>
                                    <Text style={{
                                        color:COLORS.white,
                                        ...FONTS.body4
                                    }}>
                                    {viewerList?.length-3} +
                                    </Text>
                                    

                                </View>
                            )

                        }
})
                }

            </View>

            {/* Text Section */}
            <Text style={{
                    color:COLORS.lightGray2,
                    textAlign:'right',
                    ...FONTS.body4,
                    lineHeight:18,
                }}>
                    {viewerList?.length} people
                </Text>

                <Text style={{
                    color:COLORS.lightGray2,
                    textAlign:'right',
                    ...FONTS.body4,
                    lineHeight:18

                }}>
                    Already tried this

                </Text>



        </View>

    )
}
   
   

    
    
    
}

export default Viewers