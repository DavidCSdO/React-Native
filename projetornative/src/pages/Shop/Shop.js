import React from 'react';
import { Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import st from './style'

function Shop() {
    return (
        
      <ScrollView>
        <View style ={st.container}>
      
          <View style ={st.header}>

              <Text style={st.titulo}>Cuidado Verde</Text>


          </View>

          <Image style={st.ic} source={require('../../../images/Logo.png')}/>
          <View>
           <TouchableOpacity>
            <Image style={st.imagem} source={require('../../../images/Bab.png')}/>
            </TouchableOpacity> 

            <TouchableOpacity>
            <Image style={st.imagem2} source={require('../../../images/Bon.png')}/>
            </TouchableOpacity> 

            <TouchableOpacity>
            <Image style={st.imagem3} source= {require ('../../../images/Ros.png')}/>
            </TouchableOpacity> 

            <TouchableOpacity>
            <Image style={st.imagem4} source= {require ('../../../images/sam.png')}/>
            </TouchableOpacity> 

          </View>
          
          
            <Text style ={st.textoEx}>

          Vaso com babosa, ótimo pro teu belinho! R$39,90

            </Text>

            <Text style ={st.textoEx2}>
           
          Bonsai maravilhoso, sinta-se asiatico! R$1079,90

            </Text>

            <Text style ={st.textoEx3}>
            
          Rosa no vasinho, tira o cartão do bolcinho! R$89,90

            </Text>

            <Text style ={st.textoEx4}>
            
          Alô, vó?! Ta baratinha a samambaia! R$29,90

            </Text>
          <Text style={st.foot}>Direitos da aplicação reservados ao 'Grupo KDRF'.</Text>
          
    
        </View>
        </ScrollView>   
      )
}

export default Shop;
