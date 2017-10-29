import React from 'react';
import 'react-dates/lib/css/_datepicker.css';
import moment from "moment";

export default class ExpenseFrom extends React.Component {

    constructor(props) {
        super(props);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            description: '',
            amount: 0,
            note: '',
            createdAt: moment(),
            error: undefined
        };
    }

    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({description: description}));
    };

    onAmountChange(e) {
        const amount = e.target.value;
        if (amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({amount: amount}))
        }
    }

    onNoteChange(e) {
        e.persist();
        this.setState(() => ({note: e.target.value}));
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please, provide description and amount'}));
        } else {
            this.setState(() => ({error: undefined}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                ExpenseForm
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        onChange={this.onDescriptionChange}
                        value={this.state.description}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onNoteChange}
                    />
                    <button>
                        Add expense
                    </button>
                </form>
            </div>
        );
    }
}
