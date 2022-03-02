import { createStore } from 'redux';
import React from 'react';

const defaultState = { checked: false };

const reducer = function(state = defaultState, action) {
    switch (action.type) {
        case 'TOGGLE':
            return { ...state, checked: !state.checked };
    }
    return state;
};

const store = createStore(reducer);

class Profile1 extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
        store.subscribe(() => this.setState(store.getState()));
        this.setState(store.getState());
    }

    render() {
        const onClick = () => store.dispatch({ type: 'TOGGLE' });
        return (
            <div>
                <input type="checkbox" checked={ !!this.state.checked } onClick={onClick} />
                <p>Состояние: { this.state.checked ? (<span>вкл</span>) : (<span>выкл</span>) }</p>
            </div>
        );
    }
}

export default Profile1