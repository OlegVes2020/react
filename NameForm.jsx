import React, {useEffect} from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const answer="Привет я бот";

class NameForm extends React.Component {
    constructor() {
        super();
        this.state = {items: [], author: '',message: ''};
    }


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

    render() {
        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item}<p>{answer}</p></li>;
        });

        //По нажатию на кнопку вызываем addItem:
        return (
            <div>
                <ul>
                    {list}
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

export default NameForm;