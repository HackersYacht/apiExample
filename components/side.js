import React from 'react'
import {View} from 'react-native'
import {Button, Text} from 'native-base'

export default ()=>(
  <View style={{flex:1, justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#FFF'
  }}>
    <Text style={{fontSize: 24}}>Welcome to the drawer</Text>
    <Button style={{alignSelf: 'center'}}
        //onPress={()=>}
      >
      <Text>Go back</Text>
    </Button>
  </View>
)
