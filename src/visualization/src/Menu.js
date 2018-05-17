import React, { Component } from 'react';
import './App.css';

class MenuItem extends Component {
    constructor(props) {
	super(props);
	this.handleClick = this.handleClick.bind(this);
	this.state = { clicked: null };
    }

    handleClick(s) {
	this.setState({ clicked: s });
	this.props.handleClick(s);
    };
	
    render() {
	var self = this;
	const list = self.props.item
	      .subcategories
	      .map((s,i) =>
		   <a onClick={() => self.handleClick(s)}>
	           <li key={i.toString()} style={{paddingLeft: "20px", paddingBottom: "4px", fontSize: "16px"}}>
		           {s.label}
		       </li>
		   </a>
		  );
	return (
	    <div>
	        <li style={{color: "black", fontWeight: "bold", fontSize: "18px"}}>
		    {self.props.item.category}
	        </li>
	        <ul>{list}</ul>
	    </div>
        )	
    };
}

class Menu extends Component {
    constructor(props) {
	super(props);
	this.handleClick = this.handleClick.bind(this);   
	this.state = { clicked: null };
    }

    handleClick(s) {
	this.setState({ clicked: s });
	this.props.handleClick(s);
    };
    
    render() {
	return <nav role="navigation">
	           <div id="menuToggle">
	               <input type="checkbox" />
	               <span></span>
                       <span></span>
	               <span></span>
	               <ul id="menu">
	                   {this.props.menu.map(m =>
				<MenuItem item={m} handleClick={this.handleClick}/>)} 
	               </ul>
	           </div>
	       </nav>

    };
}

export default Menu;
	    
