import React, {useEffect} from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import {createStore} from "redux";

const defaultState={author: 'qqq', message: 'aaa'};

const reducer = function(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_MSG':
            return { ...state, author: state.author, message: state.message };
    }
    return state;
};

const store = createStore(reducer);

class NameForm1 extends React.Component {

    //Добавляем в конец списка новый пункт:
    addItem(event) {

        //Добавляем новый элемент в массив:
        this.state.items.push(this.state.author + ' '+ this.state.message);

        //Применяем изменение:
        this.setState({items: this.state.items});

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    componentWillMount() {
        store.subscribe(() => this.setState(store.getState()));
        this.setState(store.getState());
    }

    render() {
/*        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>;
        });
*/
        const onClick = () => store.dispatch({ type: 'ADD_MSG' });

        return (
            <div>
                <ul>

                </ul>
                <form onSubmit={this.addItem.bind(this)}>
                    <Input name="author"  autoFocus
                           value={this.state.value}
                           onChange={this.handleChange.bind(this)}
                    /> Автор
                    <br />
                    <input name="message"
                           value={this.state.value}
                           onChange={this.handleChange.bind(this)}
                    /> Сообщение
                    <br />
                    <Button type="submit" variant="contained">ВВОД</Button>
                </form>
            </div>
        );
    }
}

export default NameForm1;