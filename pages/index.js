import React from 'react';
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';
import Button from '../components/Button'
class App extends React.Component {

    render() {
        return (
            <div className="container-global">
                <button className="btn btn-warning" type="button" onClick={this.props.incrementCounter}>Increment</button>
                <Button decrementCounter={this.props.decrementCounter}/>
                <h1 className="container-global__font-color">{this.props.counter}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.value
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);