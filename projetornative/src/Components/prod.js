import React from "react";
import { Link, Image, View, Rating } from 'react-native';
import Rating from "./rat";

export default function Product(props){
    const {product} = props;
    return(           
            <View key={product._id} className='card'>
                      <Link to={`/product/${product._id}`}>
                          
                          <Image className='medium' sorce={product.imagem} alt={product.name}/>
                      </Link>
                      <View className='card-body'>
                        <Link to={`/product/${product._id}`}>
                              <h2>{product.name}</h2>
                        </Link>
                         <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                          <View className='price'>
                              R${product.price}
                          </View>
                      </View>                        
                  </View>
        
    )
}