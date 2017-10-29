import React from 'react';
import {connect} from "react-redux";
import {setTextFilter, sortByAmount, sortByDate} from "../actions/filters";

const ExpenseListFilter = (props) => (
    <div>
        <input
            value={props.filter.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}/>
        <select
            value={props.filter.sort}
            onChange={(e) => {
                const sort = e.target.value;
                if (sort === 'date') {
                    props.dispatch(sortByDate());
                } else if (sort === 'amount') {
                    props.dispatch(sortByAmount());
                }
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filter: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilter);