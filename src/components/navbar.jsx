import React, { Component } from 'react';
import {Link} from "react-router-dom";
import"./navbar.css"
class Navbar extends Component {
    
    render(){

        return (

            <div className="navbar bg-neutral text-neutral-content">
              <Link
                to='/'   
                className={this.props.page === "home" ? 'navbar-button btn btn-primary text-xl' : 'navbar-button btn btn-ghost text-xl'}>
                chqn.xyz
              </Link>
              <Link 
                to='/about' 
                className={this.props.page === "about" ? 'navbar-button btn btn-primary text-xl' : 'navbar-button btn btn-ghost text-xl'}>
                about
              </Link>
            </div>
            
        );

    }

}

export default Navbar;
