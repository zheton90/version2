import React from 'react'


export class Form extends React.Component {
    state = {
        name: 'xxx',
        
    }

    handelChangeName = (ev) => {
        this.setState({name: ev.target.value})
    }

    submiteChange = (ev) => {
        ev.preventDefault()
        console.log(ev)
    }

    render(){
        return <form onSubmit={this.submiteChange}>         
        <p>Name: {this.state.name}</p>
        <input type="text" onChange={this.handelChangeName}/>
        <button >Change name</button>        
    </form>
    }
}