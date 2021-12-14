import React from 'react';
import sty from './styles'
import { Image, Text, TouchableOpacity, View } from 'react-native';


function Ros() {
    return (
        
      
      <View style ={sty.container}>
    
      

          <Text style ={sty.header}>Cuidado Verde</Text>
        
        <Image style={sty.icons} source={require('../../../images/Logo.png')}/>
        

        <TouchableOpacity>
        <Image style={sty.i2} source={require('../../../images/Ros.png')}/>
        </TouchableOpacity>
         
        

          <Text style ={sty.textoEx}>Mais rosa impossível, acredite, eu fui atras! (podendo chegar morta)
          </Text>

          <Text style={sty.texto}>

          R$89,90
          
          </Text>


          <TouchableOpacity>
          <Text style={sty.cp}>Compre agora</Text>
          </TouchableOpacity>
          

      </View>

      
        
    )
}


export default Ros;
