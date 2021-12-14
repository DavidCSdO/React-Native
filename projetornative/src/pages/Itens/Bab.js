import React from 'react';
import sty from './styles'
import { Image, Text, TouchableOpacity, View } from 'react-native';
//import {
  //  View, useEffect, 
  // Text } from 'react-native';
// import Product from '../../Components/prod';
// import MessageBox from '../../Components/messageB';
// import LoadingBox from '../../Components/loadingB';
// import { useDispatch, useSelector } from 'react-native';
// import { listProducts } from '../../Actions/product';




// function Home(){
  // const dispatch = useDispatch();
  // const productList = useSelector(state => state.productList);
  // const {loading,error, products} = productList;


    
  //   useEffect(() => {
  //       dispatch(listProducts());
  //   }, [dispatch])
    // return(

    //  <Text>AEWEEE</Text>

      // <View>
        
      //   {
      //     loading? ( <LoadingBox></LoadingBox> ) :error? (<MessageBox variant="danger">{error}</MessageBox>) :
      //     (<View className='row center'>
      //     {products.map((product) => (
      //       <Product key={product._id} product={product}></Product>
      //     ))

      //     }                                  
      //     </View>
      //     )}         
      // </View>

      
  //  )
//}


function Bab() {
    return (
        
      
      <View style ={sty.container}>
    
      

          <Text style ={sty.header}>Cuidado Verde</Text>
        
        <Image style={sty.icons} source={require('../../../images/Logo.png')}/>
        

        <TouchableOpacity>
        <Image style={sty.i2} source={require('../../../images/Bab.png')}/>
        </TouchableOpacity>
         
        

          <Text style ={sty.textoEx}>Planta Babosa acompanhando um lindo vazo de cor gelo! (podendo chegar morta)
          </Text>

          <Text style={sty.texto}>

          R$39,90
          
          </Text>


          <TouchableOpacity>
          <Text style={sty.cp}>Compre agora</Text>
          </TouchableOpacity>
          

      </View>

      
        
    )
}


export default Bab;
