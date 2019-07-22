import React, { Component } from 'react';
import {CardComponent} from './cardComponent';

export default class Card extends Component {

    state={
        Name:"",
        Class:"",
        Roll:"",
        students:[],
        Loading:true
    }

    componentDidMount(){
        console.log("component did mount")
        // this.state.students.push({Name:"ali",class:"bravo",roll:23})

    //    fetch("http://dummy.restapiexample.com/api/v1/employee/1")
    //     .then((data) => {data.json()})
    //     .then((dataJson) => console.log(dataJson))
    //     .catch(e => console.log(e))

    // setInterval(() => {
    //     this.setState({Loading:!this.state.Loading})
    // },1000)

    setTimeout(() => {
        this.setState({Loading:false})
    }, 3000);
    }

    componentDidUpdate(){
        console.log("component did update")
    }

    submitForm = () => {
        // event.preventDefault()

       this.state.students.push({
           Name:this.state.Name,
           Class:this.state.Class,
           RollNo:this.state.Roll
       })

        console.log(this.state.students)

    }
    
    componentWillMount(){
        console.log("component will mount")
    }

    render() {
        console.log("render")
        return (
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
               {
                  this.state.Loading == true ? <p>Loading</p> :
                  <div>
                    <input name="Name" onChange={(val) => {
                        this.setState({
                            Name:val.target.value
                        })
                    }} value={this.state.Name} />

                    <input name="Class" onChange={(val) => {
                        this.setState({
                            Class:val.target.value
                        })
                    }} value={this.state.Class} />

                        <input name="Roll" onChange={(val) => {
                        this.setState({
                            Roll:val.target.value
                        })
                    }} value={this.state.Roll} />
                    <input type="submit" onClick={this.submitForm}/> 
                </div>
               }
                
            </div>
        )
    }
}

// var data = {
//     name:"ali",
//     greeting: () => {
//         return this.name
//     }
// }

// const getName = data.greeting.bind(data)

// console.log(getName())