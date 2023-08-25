import React, { Component } from 'react';
import Fullcalender from '../../common/fullcalender';
import SweetAlert from 'sweetalert2-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TabContent, TabPane, Nav, NavLink, NavItem } from "reactstrap";
import classnames from 'classnames';

export default class Holiday extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			activeTab: 1,
			isCardRemove: false,
			isCollapsed: false
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
								<h1 className="page-title">Holiday</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><a href>Ericsson</a></li>
									<li className="breadcrumb-item active" aria-current="page">Holiday</li>
								</ol>
							</div>
							<Nav tabs className="page-header-tab">
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 1 })}
										onClick={() => this.setState({ activeTab: 1 })}
									>
										Calendar
                   				</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 2 })}
										onClick={() => this.setState({ activeTab: 2 })}
									>
										List View
                   				</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 3 })}
										onClick={() => this.setState({ activeTab: 3 })}
									>
										Add
    			               </NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 4 })}
										onClick={() => this.setState({ activeTab: 4 })}
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
								<div className="card">
									<div className="card-body">
										<Fullcalender />
									</div>
								</div>
							</TabPane>
							<TabPane tabId={2} className={classnames(['fade show'])}>
								<div className="card">
									<div className="card-body">
										<div className="table-responsive">
											<table className="table table-hover table-vcenter text-nowrap js-basic-example dataTable table-striped table_custom border-style spacing5">
												<thead>
													<tr>
														<th>#</th>
														<th>Title</th>
														<th>Subject</th>
														<th>Department</th>
														<th>Year</th>
														<th>Status</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>New Year's Day</td>
														<td>Public Holiday</td>
														<td>01 January 2019</td>
														<td>03 January 2019</td>
														<td>
															<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
															<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
															<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
														</td>
													</tr>
													<tr>
														<td>2</td>
														<td>Memorial Day</td>
														<td>Public Holiday</td>
														<td>29 May 2019</td>
														<td>29 May 2019</td>
														<td>
															<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
															<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
															<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
														</td>
													</tr>
													<tr>
														<td>3</td>
														<td>Christmas Day</td>
														<td>Public Holiday</td>
														<td>25 December 2019</td>
														<td>03 January 2019</td>
														<td>
															<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
															<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
															<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
														</td>
													</tr>
													<tr>
														<td>4</td>
														<td>Annual Function</td>
														<td>Holiday By Collage</td>
														<td>01 March 2019</td>
														<td>03 March 2019</td>
														<td>
															<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
															<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
															<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
														</td>
													</tr>
													<tr>
														<td>5</td>
														<td>New Year's Day</td>
														<td>Public Holiday</td>
														<td>01 January 2019</td>
														<td>03 January 2019</td>
														<td>
															<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
															<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
															<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
														</td>
													</tr>
													<tr>
														<td>6</td>
														<td>Memorial Day</td>
														<td>Public Holiday</td>
														<td>29 May 2019</td>
														<td>29 May 2019</td>
														<td>
															<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
															<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
															<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
														</td>
													</tr>
													<tr>
														<td>7</td>
														<td>Christmas Day</td>
														<td>Public Holiday</td>
														<td>25 December 2019</td>
														<td>03 January 2019</td>
														<td>
															<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
															<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
															<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
														</td>
													</tr>
													<tr>
														<td>8</td>
														<td>Annual Function</td>
														<td>Holiday By Collage</td>
														<td>01 March 2019</td>
														<td>03 March 2019</td>
														<td>
															<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
															<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
															<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
														</td>
													</tr>
													<tr>
														<td>9</td>
														<td>New Year's Day</td>
														<td>Public Holiday</td>
														<td>01 January 2019</td>
														<td>03 January 2019</td>
														<td>
															<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
															<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
															<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
														</td>
													</tr>
													<tr>
														<td>10</td>
														<td>Memorial Day</td>
														<td>Public Holiday</td>
														<td>29 May 2019</td>
														<td>29 May 2019</td>
														<td>
															<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
															<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
															<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
														</td>
													</tr>
													<tr>
														<td>11</td>
														<td>Christmas Day</td>
														<td>Public Holiday</td>
														<td>25 December 2019</td>
														<td>03 January 2019</td>
														<td>
															<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
															<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
															<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
														</td>
													</tr>
													<tr>
														<td>12</td>
														<td>Annual Function</td>
														<td>Holiday By Collage</td>
														<td>01 March 2019</td>
														<td>03 March 2019</td>
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
								</div>
							</TabPane>
							<TabPane tabId={3} className={classnames(['fade show'])}>
								<div className={`card ${isCardRemove ? 'card-remove' : ''} ${isCollapsed ? 'card-collapsed' : ''}`}>
									<div className="card-header">
										<h3 className="card-title">Add Holiday</h3>
										<div className="card-options ">
											<a href className="card-options-collapse" onClick={() => this.setState({ isCollapsed: !isCollapsed })}><i className="fe fe-chevron-up"></i></a>
											<a href className="card-options-remove" onClick={() => this.setState({ isCardRemove: !isCardRemove })}><i className="fe fe-x"></i></a>
										</div>
									</div>
									<div className="card-body">
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<input type="text" value="" placeholder="Enter Title" className="form-control" />
												</div>
											</div>
											<div className="col-sm-12">
												<div className="form-group">
													<input type="text" value="" placeholder="Holiday Type" className="form-control" />
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-group">
													<DatePicker
														placeholderText="Holiday Start Date"
														className="form-control"
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-group">
													<DatePicker
														placeholderText="Holiday End Date"
														className="form-control"
													/>
												</div>
											</div>
											<div className="col-sm-12">
												<div className="form-group">
													<textarea rows="4" className="form-control no-resize" placeholder="Please type what you want..."></textarea>
												</div>
											</div>
											<div className="col-sm-12">
												<button className="btn btn-primary btn-lg btn-simple">Add Holiday</button>
											</div>
										</div>
									</div>
								</div>
							</TabPane>
							<TabPane tabId={4} className={classnames(['fade show'])}>
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Add Library</h3>
										<div className="card-options">
											<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
											<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
										</div>
									</div>
									<form className="card-body">
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Title <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Holiday Type  <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<select className="form-control input-height" name="type">
													<option value="">Select...</option>
													<option value="Category 1">Public Holiday</option>
													<option value="Category 2">Holiday By University</option>
												</select>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Holiday Start Date <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<DatePicker
													className="form-control"
												/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Holiday End Date <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<DatePicker
													className="form-control"
												/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Holiday Details <span className="text-danger">*</span></label>
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
