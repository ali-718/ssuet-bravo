import React, { Component } from 'react';

export const CardComponent = (props) => (
    <div style={{marginTop:100,}}>
    <div style={{display:"flex"}}>
        <p>Name :- </p>
        <p> {props.Name}</p>
    </div>
    <div style={{display:"flex",marginTop:10}}>
        <p>Class :- </p>
        <p> {props.Class}</p>
    </div>
    <div style={{display:"flex",marginTop:10}}>
        <p>Roll :- </p>
        <p> {props.RollNo}</p>
 </div>
</div>
)