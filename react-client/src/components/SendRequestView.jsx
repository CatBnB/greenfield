import React, {Component} from 'react';

const SendRequest = (props) => (
	<div>
		<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Sitting Request Form</button>
		<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div className="modal-dialog modal-lg" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h2 className="modal-title" id="exampleModalLabel">Sitter Information</h2>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
		      	<div className="row sitter-info-name">
			      	<h4 className="col-lg-9">
			      		Name:   Kevin Yeh
			      	</h4>
			      	<h5 className="col-lg-3">
			      		Rate: $50/hour
			      	</h5>
		      	</div>
		      	<div className="sitter-info-description">
			      	<h5>
			      		Description:
			      	</h5>
			      	<small>I am a cat lover!!</small>
		      	</div>
		        <form>
		          <div className="form-group">
		            <label for="message-text" className="form-control-label">Request Detial Message:</label>
		            <textarea className="form-control" id="message-text"></textarea>
		          </div>
		        </form>
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		        <button type="button" className="btn btn-primary">Send Quest</button>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
)
