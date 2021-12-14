import React from 'react';
import sty from './styles'
import { Image, Text, TouchableOpacity, View } from 'react-native';


function Bon() {
    return (
        
      
      <View style ={sty.container}>
    
      

          <Text style ={sty.header}>Cuidado Verde</Text>
        
        <Image style={sty.icons} source={require('../../../images/Logo.png')}/>
        

        <TouchableOpacity>
        <Image style={sty.i2} source={require('../../../images/Bon.png')}/>
        </TouchableOpacity>
         
        

          <Text style ={sty.textoEx}>Um belissimo especime de arvrinha, mas você não virara asiatico! (podendo chegar morta)
          </Text>

          <Text style={sty.texto}>

          R$1079,90
          
          </Text>


          <TouchableOpacity>
          <Text style={sty.cp}>Compre agora</Text>
          </TouchableOpacity>
          

      </View>

      
        
    )
}


export default Bon;
