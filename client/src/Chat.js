import React, {PureComponent } from 'react';

import PropTypes from 'prop-types'; 

class TodoList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        ['handleClick'].forEach(func => {
            this[func] = this[func].bind(this);
        })
    }
    handleClick() {
    }
    render() {
        return(
            <div>some component</div>
        )
    }
}
TodoList.propTypes = {
    name: PropTypes.string
};
TodoList.defaultProps = {

};

export default TodoList;