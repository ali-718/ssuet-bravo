import React, { Component } from 'react';


class Header extends Component {
    render(){
        return(
        <div style={{width:"100%",height:100,backgroundColor:"brown",display:"flex",flexDirection:"row",alignItems:'center',justifyContent:"center"}}>
            <p>ali</p>
            <p style={{marginLeft:10}}>haider</p>
        </div>
        );
    }
}

export default Header;