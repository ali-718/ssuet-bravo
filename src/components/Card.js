import React, { Component } from 'react'

export default class Card extends Component {

    state={
        Name:"",
        Class:"",
        Roll:"",
        students:[]
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

    render() {
        return (
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                {/* <form onSubmit={this.submitForm} style={{display:"flex",flexDirection:"column",}}> */}
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
                <input type="submit" onClick={this.submitForm} />
                {/* </form> */}


               

                {this.state.students.map((item,i) => (
                    <div key={i} style={{marginTop:100,}}>
                        <div style={{display:"flex"}}>
                            <p>Name :- </p>
                            <p> {item.Name}</p>
                        </div>
                        <div style={{display:"flex",marginTop:10}}>
                            <p>Class :- </p>
                            <p> {item.Class}</p>
                        </div>
                        <div style={{display:"flex",marginTop:10}}>
                            <p>Roll :- </p>
                            <p> {item.RollNo}</p>
                     </div>
                    </div>
                    
                ))}
            </div>
        )
    }
}
