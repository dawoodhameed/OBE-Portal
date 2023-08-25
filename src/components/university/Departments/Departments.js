import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TabContent, TabPane, Nav, NavLink, NavItem } from "reactstrap";
import classnames from 'classnames';

export default class Departments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 1,
			isCardRemove: false,
			isCollapsed: false,
			show: false
		};
	}
	render() {
		const { activeTab, isCardRemove, isCollapsed } = this.state
		return (
			<>
				<div className="section-body">
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center ">
							<div className="header-action">
								<h1 className="page-title">Departments</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><a href>Ericsson</a></li>
									<li className="breadcrumb-item active" aria-current="page">Departments</li>
								</ol>
							</div>
							<Nav tabs className="page-header-tab">
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 1 })}
										onClick={() => this.setState({ activeTab: 1 })}
									>
										List View
                   				</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 2 })}
										onClick={() => this.setState({ activeTab: 2 })}
									>
										Add
    			               </NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 3 })}
										onClick={() => this.setState({ activeTab: 3 })}
									>
										Add Bootstrap Style
    			               </NavLink>
								</NavItem>
							</Nav>
						</div>
					</div>
				</div>
				<div className="section-body mt-4">
					<div className="container-fluid">
						<TabContent activeTab={activeTab}>
							<TabPane tabId={1} className={classnames(['fade show'])}>
								<div className="table-responsive">
									<div className="table-responsive card">
										<table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
											<thead>
												<tr>
													<th>#</th>
													<th>Dept. Name</th>
													<th>Head OF Dept.</th>
													<th>Phone</th>
													<th>Email</th>
													<th>establish</th>
													<th>Std. Capacity</th>
													<th>Edit</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>Mechanical Engg.</td>
													<td>Emmett L Johnson</td>
													<td>+123 4567890</td>
													<td>test@example.com</td>
													<td>1998</td>
													<td>150</td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td>2</td>
													<td>Computer Engg.</td>
													<td>Corrine M Johnson</td>
													<td>+123 4567890</td>
													<td>test@example.com</td>
													<td>2011</td>
													<td>205</td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td>3</td>
													<td>M.B.A.</td>
													<td>Gladys J Smith</td>
													<td>+123 4567890</td>
													<td>test@example.com</td>
													<td>2009</td>
													<td>128</td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td>4</td>
													<td>M.C.A.</td>
													<td>Patricia Smith</td>
													<td>+123 4567890</td>
													<td>test@example.com</td>
													<td>2014</td>
													<td>98</td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td>5</td>
													<td>Civil Engg.</td>
													<td>Danny M Johnson</td>
													<td>+123 4567890</td>
													<td>test@example.com</td>
													<td>2016</td>
													<td>231</td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
											</tbody>
										</table>
										<SweetAlert
											show={this.state.show}
											title="Are you sure?"
											text="You will not be able to recover this imaginary file!"
											type="warning"
											showCancelButton={true}
											confirmButtonColor="#dc3545"
											confirmButtonText="Yes, delete it!"
											closeOnConfirm={false}
											onConfirm={() => this.setState({ show: false })}
										/>
									</div>
								</div>
							</TabPane>
							<TabPane tabId={2} className={classnames(['fade show'])}>
								<div className="col-lg-12 col-md-12">
									<div className={`card ${isCardRemove ? 'card-remove' : ''} ${isCollapsed ? 'card-collapsed' : ''}`}>
										<div className="card-header">
											<h3 className="card-title">Department Basic Info</h3>
											<div className="card-options ">
												<a href className="card-options-collapse" onClick={() => this.setState({ isCollapsed: !isCollapsed })}><i className="fe fe-chevron-up"></i></a>
												<a href className="card-options-remove" onClick={() => this.setState({ isCardRemove: !isCardRemove })}><i className="fe fe-x"></i></a>
											</div>
										</div>
										<div className="card-body">
											<div className="row clearfix">
												<div className="col-sm-6">
													<div className="form-group">
														<input type="text" className="form-control" placeholder="Department Name " />
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<input type="text" className="form-control" placeholder="Head of Department" />
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<input type="number" className="form-control" placeholder="No. of Students " />
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<DatePicker
															placeholderText="Department Start Date"
															className="form-control"
														/>
													</div>
												</div>
												<div className="col-sm-12">
													<div className="form-group">
														<textarea rows="4" className="form-control no-resize" placeholder="Brief"></textarea>
													</div>
												</div>
												<div className="col-sm-12">
													<button type="submit" className="mr-1 btn btn-primary">Submit</button>
													<button type="submit" className="btn btn-outline-secondary btn-default">Cancel</button>
												</div>
											</div>
										</div>
									</div>
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Staff Member Account Info</h3>
											<div className="card-options ">
												<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
												<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
											</div>
										</div>
										<div className="card-body">
											<div className="row clearfix">
												<div className="col-sm-12">
													<div className="form-group">
														<input type="text" className="form-control" placeholder="Email" />
													</div>
												</div>
												<div className="col-sm-12">
													<div className="form-group">
														<input type="text" className="form-control" placeholder="Phone" />
													</div>
												</div>
												<div className="col-sm-12">
													<button type="submit" className="mr-1 btn btn-primary">Submit</button>
													<button type="submit" className="btn btn-outline-secondary btn-default">Cancel</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabPane>
							<TabPane tabId={3} className={classnames(['fade show'])}>
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Add Department</h3>
										<div className="card-options ">
											<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
											<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
										</div>
									</div>
									<form className="card-body">
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Department Name <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Head Of Department</label>
											<div className="col-md-7">
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Department Start Date <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<DatePicker
													className="form-control"
												/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Student Capacity <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Department Details <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<textarea rows="4" className="form-control no-resize" placeholder="Please type what you want..."></textarea>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label"></label>
											<div className="col-md-7">
												<button type="submit" className="mr-1 btn btn-primary">Submit</button>
												<button type="submit" className="btn btn-outline-secondary">Cancel</button>
											</div>
										</div>
									</form>
								</div>
							</TabPane>
						</TabContent>
					</div>
				</div>

			</>
		);
	}
}
