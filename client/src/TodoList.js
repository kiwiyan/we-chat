import React, {PureComponent } from 'react';

import PropTypes from 'prop-types'; 

class TodoList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'test',
            lists: ['apple','pear']
        };
        ['handleChange','addItem', 'deleteItem'].forEach(func => {
            this[func] = this[func].bind(this);
        })
    }
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    addItem() {
        // this.state.lists.push(this.state.inputValue);
        this.setState({
            lists: [...this.state.lists, this.state.inputValue]
        })
    }
    deleteItem(value, index) {
        console.log('delet:', value, index);
        this.setState({
            lists: this.state.lists.filter((v ,i) => {
                return index !== i;
            })
        })
    }
    render() {
        // onClick事件，需要绑定bind才能传参
        return(
            
            <div>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
                    <button onClick={this.addItem}>添加</button>
                </div>
                <ul>
                    {
                        this.state.lists.map((value, index) => {
                            return(
                                <li key={index}>
                                    item{index}-{value}
                                    <button onClick={this.deleteItem.bind(this, value, index)}>删除</button>
                                </li>
                            ) 
                        })
                    }
                </ul>
            </div>
        )
    }
}
TodoList.propTypes = {
    name: PropTypes.string
};
TodoList.defaultProps = {

};

export default TodoList;