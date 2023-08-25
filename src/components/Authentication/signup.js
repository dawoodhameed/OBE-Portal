import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
	render() {
		return (
			<div className="auth option2">
				<div className="auth_left">
					<div className="card">
						<div className="card-body">
							<div className="text-center">
								<Link className="header-brand" to="/">
									<i className="fa fa-graduation-cap brand-logo"></i>
								</Link>
								<div className="card-title">Create new account</div>
								<button type="button" className="mr-1 btn btn-facebook"><i className="fa fa-facebook mr-2"></i>Facebook</button>
								<button type="button" className="btn btn-google"><i className="fa fa-google mr-2"></i>Google</button>
								<h6 className="mt-3 mb-3">Or</h6>
							</div>
							<div className="form-group">
								<label className="form-label">Name</label>
								<input type="text" className="form-control" placeholder="Enter name" />
							</div>
							<div className="form-group">
								<label className="form-label">Email address</label>
								<input type="email" className="form-control" placeholder="Enter email" />
							</div>
							<div className="form-group">
								<label className="form-label">Password</label>
								<input type="password" className="form-control" placeholder="Password" />
							</div>
							<div className="form-group">
								<label className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" />
									<span className="custom-control-label">Agree the <Link to="/">terms and policy</Link></span>
								</label>
							</div>
							<div className="text-center">
								<button type="submit" className="btn btn-primary btn-block">Create new account</button>
								<div className="text-muted mt-4">Already have account? <Link to="/login">Sign in</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
