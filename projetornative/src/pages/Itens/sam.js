import React from 'react';
import sty from './styles'
import { Image, Text, TouchableOpacity, View } from 'react-native';


function Sam() {
    return (
        
      
      <View style ={sty.container}>
    
      

          <Text style ={sty.header}>Cuidado Verde</Text>
        
        <Image style={sty.icons} source={require('../../../images/Logo.png')}/>
        

        <TouchableOpacity>
        <Image style={sty.i2} source={require('../../../images/sam.png')}/>
        </TouchableOpacity>
         
        

          <Text style ={sty.textoEx}>Artigo de luxo para as vovós, duvido tu falar uma que não tenha! (podendo chegar morta)
          </Text>

          <Text style={sty.texto}>

          R$29,90
          
          </Text>


          <TouchableOpacity>
          <Text style={sty.cp}>Compre agora</Text>
          </TouchableOpacity>
          

      </View>

      
        
    )
}


export default Sam;