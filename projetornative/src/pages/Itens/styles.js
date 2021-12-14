import { StyleSheet } from 'react-native';

const sty = StyleSheet.create({

    textoEx: {
      fontSize: 20,
      width: 300,
      height: 300, 
      position: 'absolute',  
      top: 590,
      textAlign: 'center',
      color: '#333',
      left: 55,
      zIndex: 90
    
    },

    
  
    header:{
      fontSize: 40,
      position: 'absolute',
      color: '#333',
      alignSelf: 'center'
     
    },
  
    container: {
        display: 'flex',
        flex: 1, 
        backgroundColor: '#fff', 
        
             
    },

    imagem:{
            width: 240,
            height: 300,
            left: 10,
            top: 140,
            borderRadius: 10,        
    },


    texto: {
      fontSize: 20, 
      color: '#333',
      top: 240,
      left: 165
    },

    icons:{
      top: 100,
      alignSelf: 'center' ,
      width:100,
      height:100,
      position: 'absolute'   
    },

    i2:{
      width: 390,
      height: 450,
      top: 230,
      alignSelf: 'center' ,
     
  },

  cp: {
    fontSize: 30,
    top: 250,
    alignSelf: 'center'
  }

    
});

export default sty; 
  