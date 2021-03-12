import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 },
        ]
    }

    //method triggers from child compoments

    handleIncrement = (counter) => {

       // this.setState({ count: this.state.count + 1 });
        const counters = [... this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {... counter};
        counters[index].value++;
        this.setState({counters});
        console.log("state", {counters});

    }

    handleDelete = counterId => {

        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters: counters });
    }

    resetAllCount = () => {
        const counters = this.state.counters.map(counter =>{ 
            counter.value = 0;
            return counter;
        });
        this.setState({ counters });
        console.log("state", {counters});

    }

    render() {
        return (<div>

            <buttton onClick={this.resetAllCount} 
            className="btn btn-primary btn-small m-2">Reset</buttton>
            {this.state.counters.map(counter =>
                <Counter
                    key={counter.id}
                    onDelete={this.handleDelete}
                    counter={counter}
                    onIncrement={this.handleIncrement}
                />
            )}
        </div>);
    }
}

export default Counters;