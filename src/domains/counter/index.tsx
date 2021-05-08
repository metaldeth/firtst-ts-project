import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ApplicationState } from "../../redux/store";
import * as counterActions from "../../redux/actions/counter";


type Props = {
    number: number;
}

interface StateProps {
    count: number;
}

interface DispatchProps {
    increment: VoidFunction;
    decrement: VoidFunction;
    clear: VoidFunction;
}

type CounterProps = StateProps & DispatchProps & Props;

const mapStateToProps = (state: ApplicationState, props: Props): StateProps => ({ count: state.counter.count });

const mapDispatchToProps = (dispatch: Dispatch, props: Props): DispatchProps => ({
    increment: () => dispatch(counterActions.increment(props.number)),
    decrement: () => dispatch(counterActions.decrement(-props.number)),
    clear: () => dispatch(counterActions.clear())
})


const CounterInner = (props: CounterProps) => {    
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.increment}>increment</button>
            <button onClick={props.decrement}>decrement</button>
            <button onClick={props.clear}>clear</button>
        </div>
    )
}

export const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterInner)
