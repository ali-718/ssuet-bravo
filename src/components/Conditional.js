import React, { Component } from 'react'

export default class Conditional extends Component {

    state = {
        data:[
            {
                name:"ali haider",
                email:"alimurtuza718@gmail.com",
                status:1
            },
            {
                name:"Mohtashim",
                email:"mohtashim@gmail.com",
                status:1
            },
            {
                name:"hammad",
                email:"hammad@gmail.com",
                status:0
            },
            {
                name:"Faraz Javed",
                email:"faraz@gmail.com",
                status:1
            },
            {
                name:"Kazim",
                email:"kazim@gmail.com",
                status:0
            },
        ]
    }

    render() {
        return (
            <div style={{display:'flex',flexDirection:"column",alignItems: 'center',}}>
                {
                    this.state.data.map((item,i) => (
                        item.status == 0 ? 
                        <div key={i} style={{width:300,height:100,marginTop:50}}>
                            <p>Name : {item.name}</p>
                            <p style={{marginTop:20}}>Email : {item.email}</p>
                            <p style={{marginTop:20}}>Status : <span style={{color:item.status ? "green" : "red"}}>{item.status ? "Active" : "Inactive"}</span></p>
                        </div>
                        : null
                    ))
                }
            </div>
        )
    }
}
