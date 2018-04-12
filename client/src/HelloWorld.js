import React, {PureComponent } from 'react';

import PropTypes from 'prop-types'; // 16版本后，propTypes属性弃用了，需要安装prop-types

class HelloWorld extends PureComponent  {  // 与Component相比， PureComponent可以避免不必要的渲染，提高性能
    constructor(props) {
        super(props);
        this.state = {
            value: 'hello:',
            inputValue: ''
        };
        // 在es6 语法里(createClass方式ok)，方法里的this绑定有问题，通过bind设定使this指向实例
        ['handleClick', 'handleChange'].forEach(functionItem => {
            this[functionItem] = this[functionItem].bind(this);
        });
    }
    // 表示已插入真实DOM，一般在此阶段ajax请求数据
    componentDidMount() {
        console.log('渲染ok')
    }
    handleClick() {
        console.log(this.state.value)
    }
    handleChange(e) {
        // setState设置state里的值，event.target.value 取表单的值（input、textarea、select、radio）
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        var innerValue = this.state.value;
        var lists = ['apple', 'pear', 'kiwi'];
        // 样式要写成className,for写成htmlFor
        // 渲染列表直接map循环。大括号表示jsx语法，尖括号表示html
        return(
             <div className="helloworld" style={{color:"#5cc"}}>  
                {innerValue + this.props.name}
                <ul>
                {
                    lists.map((val, index) => {
                        return <li key={index}>item + {index}: {val}</li>
                    })
                }
                </ul>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                <p>{this.state.inputValue}</p>
                <button onClick={this.handleClick}>ok</button>
            </div>
            
        )
    }
}

// prop验证
HelloWorld.propTypes = {
    name: PropTypes.string
}
// props默认值
HelloWorld.defaultProps = {
    name: 'lala'
};
export default HelloWorld;