import React, { PureComponent, Component, PropTypes } from 'react';

class HelloWorld extends Component {
    /*static propTypes = {
        className: PropTypes.string,
        prop: PropTypes.Intege,
    };*/

    constructor(props) {
        super(props);

        this.state = {key: 'value'};
    }

    update() {
      this.setState({key: 'value'});
    }

    render() {
      console.log('rendering now ....');
        return (
          <span>
          <div className="somename">Hello World</div>
          <Child />
          <input type="button" value="Click me" onClick={this.update.bind(this)} />
          </span>
        );
    }
}

class Child extends PureComponent {
    constructor(props){
    	super(props);
    	this.state = {};
    }

    render() {
      console.log("render child now...");
      return (
        <div>Child component</div>
      );
    }
}

export default HelloWorld;
