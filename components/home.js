import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Drawer, Button} from 'native-base'
import Side from './side'
import {Icon} from 'native-base'

export default class Home extends Component{
  constructor(props){
    super (props)
  }

  closeDrawer(){
    this.drawer._root.close()
  }
  openDrawer(){
    this.drawer._root.open()
  }

  render(){
    const {navigation} = this.props

    return(
        <Drawer
          //drawerWidth={300}
          content={<Side navigator={this.navigator} />}
          onClose={()=>this.closeDrawer()}
          ref={(ref)=>this.drawer = ref}
        >
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 24}}>Hey Buddi!!!</Text>
            <Button onPress={()=>navigation.navigate('Login')}
              style={{alignSelf: 'center'}}
            >
              <Text style={{color:'#FFF'}}>Go Login</Text>
            </Button>
            <TouchableOpacity
            onPress={()=>this.openDrawer()}
            style={{
              position:'absolute',
              top:40,
              left:10,
              padding:5,
            }}>
              <Icon name='menu' size={20} />
            </TouchableOpacity>
          </View>
        </Drawer>
    )
  }
}
