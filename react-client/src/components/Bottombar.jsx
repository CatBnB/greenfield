import React from 'react';

const Bottombar = (props) => (
	<footer className="text-muted">
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
			  <div className="navbar-brand">Want to be a sitter? </div>
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item">
			        <div className="nav-link" onClick={props.pageState.bind(null,'SignIn')} >Sitter Sign-Up</div>
			      </li>
			      <li className="nav-item">
			        <div className="nav-link">Sitter Sign-In</div>
			      </li>
			    </ul>
			  </div>
			</div>
		</nav>
	</footer>
)

export default Bottombar
;