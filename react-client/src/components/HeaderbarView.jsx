import React from 'react';
import Login from './LoginView.jsx';

const Headerbar = (props) => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<div className="container">
		  <div className="navbar-brand" onClick={props.pageState.bind(null,'HomePage')}>Cat BnB</div>
		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item">
		        <div className="nav-link" onClick={props.pageState.bind(null,'SignUp')} >Sign-Up</div>
		      </li>
		      <li className="nav-item">
		        <Login initAuth={props.initAuth} />
		      </li>
		    </ul>
		    <form className="form-inline my-2 my-lg-0">
		      <input className="form-control mr-sm-2" type="text" placeholder="Input Your Zip Code" aria-label="Search"></input>
		      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		    </form>
		  </div>
		</div>
	</nav>
)

export default Headerbar
