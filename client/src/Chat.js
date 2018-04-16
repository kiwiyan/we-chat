import React, {PureComponent } from 'react';
import './Chat.scss'
import PropTypes from 'prop-types'; 

class TodoList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            talkLists: ['system: 1 user is online','jack: where is my rose~']
        };
        ['handleChange', 'sengMsg'].forEach(func => {
            this[func] = this[func].bind(this);
        })
    }
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    sengMsg() {
        this.setState({
            talkLists: [...this.state.talkLists, this.state.inputValue],
            inputValue: ''
        })
    }
    render() {
        return(
            <article className="wrap">
                <header>this is header</header>
                <section>
                    <div className="talk-content">
                        <ul>
                        {
                            this.state.talkLists.map(val => {
                                return (
                                    <li>{val}</li>
                                )
                            })
                        }
                        </ul>
                    </div>
                    <div className="send-content">
                        <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
                        <button onClick={this.sengMsg}>send</button>
                    </div>
                </section>
                <footer>this is footer</footer>
            </article>
        )
    }
}
TodoList.propTypes = {
    name: PropTypes.string
};
TodoList.defaultProps = {

};

export default TodoList;