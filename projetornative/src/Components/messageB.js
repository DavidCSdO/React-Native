import React from "react";

export default function MessageBox(props){
    
    return <View className={`alert alert-${props.variant || 'info'}`}>{props.children}</View>
        
   

}