import React from 'react';
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter, getItems} from '../redux/actions/counterActions';
import Button from '@/components/Button'

class App extends React.Component {

    static getInitialProps = async (ctx) => {
        const resp = await ctx.store.dispatch(getItems())
        return {
            props:{id: resp.id}
        }
    }

    render() {
      
        return (
            <div className="container-global">
                <button className="btn btn-warning" type="button" onClick={this.props.incrementCounter}>Increment</button>
                <Button decrementCounter={this.props.decrementCounter}/>
                <h1 className="container-global__font-color">{this.props.counterValue}</h1>
                <div className="container-global__font-color">Identification number:{ this.props.id}</div>
            </div>
        );
    }

}



const mapStateToProps = state => ({
    counterValue: state.counter.value, id:state.counter.counter.data[0].id 
})

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);