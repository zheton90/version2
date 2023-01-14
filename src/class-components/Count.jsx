import React from 'react'

export class Count extends React.Component{

    state = {
        count: 1,
        arr: ['ivanov', 'petrov', 'sidorov']
     }

    handelClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
        console.log('click')
    }

    render () {
        return <>
        <p>Count props: {this.props.count}</p>
        <p>Count state: {this.state.count}</p>
        <button type="button" onClick={this.handelClick}>Click</button>
        {this.state.arr.map((item, idx) => <div key={idx}>{item}</div>)}
        </>
    }
}