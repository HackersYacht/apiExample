import React from 'react'
import {View} from 'react-native'
import { Button, Text} from 'native-base'

export default ({navigation})=>(
  <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
    <Button onPress={()=>navigation.navigate('Home')}>
      <Text>Go to Home</Text>
    </Button>
  </View>
)
