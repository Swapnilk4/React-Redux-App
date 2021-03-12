import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     count: this.props.counter.value
    //     //tags:['tag1','tag2','tag3'] 
    // }

    // constructor(){
    //     super();
    //    this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = () => {

    //     this.setState({ count: this.state.count + 1 });
    // }

    render() {

        return (<div>
            {/* <h1>Counter# {this.props.id}</h1> */}
            <span className={this.getBadgeClasses()}>{this.formatcount()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-small m-2"> Delete</button>

            {/* <div>
                {this.renderTags()}
            </div> */}

        </div>);
    }


    formatcount() {

        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        return classes += this.props.counter.value === 0 ? "warning" : "primary";
    }

    // renderTags() {

    //     if (this.state.tags.length === 0) return <p>There are no tags</p>;

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }
}

export default Counter;