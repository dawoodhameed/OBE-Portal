import React, { Component } from 'react';
import Gridviewcomponent from '../../common/gridviewcomponent';
import Profilecomponent from '../../common/profilecomponent';
import SweetAlert from 'sweetalert2-react';
import DatePicker from "react-datepicker";
import ToolTip from "../../common/toolTip";
import "react-datepicker/dist/react-datepicker.css";
import { TabContent, TabPane, Nav, NavLink, NavItem } from "reactstrap";
import classnames from 'classnames';
import Dropzone from '../../common/DropzoneExample';
export default class Staff extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 1,
			show: false
		};
	}
	render() {
		const { activeTab } = this.state
		return (
			<>
				<div className="section-body">
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center ">
							<div className="header-action">
								<h1 className="page-title">Staff</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><a href>Ericsson</a></li>
									<li className="breadcrumb-item active" aria-current="page">Staff</li>
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
										Grid View
    			               </NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 3 })}
										onClick={() => this.setState({ activeTab: 3 })}
									>
										Profile
    			               </NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 4 })}
										onClick={() => this.setState({ activeTab: 4 })}
									>
										Add
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
									<div className="table-responsive">
										<table className="table table-hover table-vcenter text-nowrap table-striped mb-0">
											<thead>
												<tr>
													<th>#</th>
													<th>Name</th>
													<th>Number</th>
													<th>Designation</th>
													<th>Email</th>
													<th>Joining Date</th>
													<th></th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="w60">
														<img className="avatar" src="../assets/images/xs/avatar3.jpg" alt="" />
													</td>
													<td><div className="font-15">Ken Smith</div></td>
													<td><span>(417) 646-8377</span></td>
													<td><span className="text-muted">Peon</span></td>
													<td>ken@gmail.com</td>
													<td><strong>04 Jan, 2019</strong></td>
													<td><span className="tag tag-success">Full-time</span></td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td className="w60">
														<img className="avatar" src="../assets/images/xs/avatar4.jpg" alt="" />
													</td>
													<td><div className="font-15">Alice A Smith</div></td>
													<td><span>(417) 646-5023</span></td>
													<td><span className="text-muted">Purchase Officer</span></td>
													<td>Alice@info.com</td>
													<td><strong>04 Jan, 2019</strong></td>
													<td><span className="tag tag-success">Full-time</span></td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td className="w60">
														<img className="avatar" src="../assets/images/xs/avatar5.jpg" alt="" />
													</td>
													<td><div className="font-15">Gladys J Smith</div></td>
													<td><span>(417) 646-9207</span></td>
													<td><span className="text-muted">Receptionist</span></td>
													<td>Gladys@info.com</td>
													<td><strong>04 Jan, 2019</strong></td>
													<td><span className="tag tag-success">Full-time</span></td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td className="w60">
														<ToolTip id="gs" text="Avatar Name" />
														<div className="avatar avatar-pink" data-tip data-for="gs" title="">
															<span>GS</span>
														</div>
													</td>
													<td><div className="font-15">Gladys J Smith</div></td>
													<td><span>(417) 646-8377</span></td>
													<td><span className="text-muted">Clerk</span></td>
													<td>sarah@gmail.com</td>
													<td><strong>04 Jan, 2019</strong></td>
													<td><span className="tag tag-success">Full-time</span></td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td className="w60">
														<img className="avatar" src="../assets/images/xs/avatar1.jpg" alt="" />
													</td>
													<td><div className="font-15">Alan Johnson</div></td>
													<td><span>(417) 646-8377</span></td>
													<td><span className="text-muted">Librarian</span></td>
													<td>kenh@gmail.com</td>
													<td><strong>04 Jan, 2019</strong></td>
													<td><span className="tag tag-warning">Part-time</span></td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td className="w60">
														<img className="avatar" src="../assets/images/xs/avatar2.jpg" alt="" />
													</td>
													<td><div className="font-15">James A Johnson</div></td>
													<td><span>(417) 646-1636</span></td>
													<td><span className="text-muted">Librarian</span></td>
													<td>johnson@gmail.com</td>
													<td><strong>04 Jan, 2019</strong></td>
													<td><span className="tag tag-success">Full-time</span></td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td className="w60">
														<img className="avatar" src="../assets/images/xs/avatar7.jpg" alt="" />
													</td>
													<td><div className="font-15">Gladys J Smith</div></td>
													<td><span>(417) 646-9207</span></td>
													<td><span className="text-muted">Driver</span></td>
													<td>Gladys@info.com</td>
													<td><strong>04 Jan, 2019</strong></td>
													<td><span className="tag tag-warning">Part-time</span></td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td className="w60">
														<img className="avatar" src="../assets/images/xs/avatar8.jpg" alt="" />
													</td>
													<td><div className="font-15">Danny M Johnson</div></td>
													<td><span>(417) 646-8377</span></td>
													<td><span className="text-muted">Driver</span></td>
													<td>Danny@info.com</td>
													<td><strong>04 Jan, 2019</strong></td>
													<td><span className="tag tag-success">Full-time</span></td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td className="w60">
														<img className="avatar" src="../assets/images/xs/avatar9.jpg" alt="" />
													</td>
													<td><div className="font-15">Patricia Smith</div></td>
													<td><span>(417) 646-8377</span></td>
													<td><span className="text-muted">Purchase Officer</span></td>
													<td>Patricia@info.com</td>
													<td><strong>04 Jan, 2019</strong></td>
													<td><span className="tag tag-warning">Part-time</span></td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td className="w60">
														<img className="avatar" src="../assets/images/xs/avatar10.jpg" alt="" />
													</td>
													<td><div className="font-15">Gladys J Smith</div></td>
													<td><span>(417) 646-9207</span></td>
													<td><span className="text-muted">Librarian</span></td>
													<td>Gladys@info.com</td>
													<td><strong>04 Jan, 2019</strong></td>
													<td><span className="tag tag-success">Full-time</span></td>
													<td>
														<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
														<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
														<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													</td>
												</tr>
												<tr>
													<td className="w60">
														<img className="avatar" src="../assets/images/xs/avatar6.jpg" alt="" />
													</td>
													<td><div className="font-15">Gerald K Smith</div></td>
													<td><span>(417) 646-8377</span></td>
													<td><span className="text-muted">Lab Assistent</span></td>
													<td>Smith@info.com</td>
													<td><strong>04 Jan, 2019</strong></td>
													<td><span className="tag tag-success">Full-time</span></td>
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
								<Gridviewcomponent />
							</TabPane>
							<TabPane tabId={3} className={classnames(['fade show'])}>
								<Profilecomponent />
							</TabPane>
							<TabPane tabId={4} className={classnames(['fade show'])}>
								<div className="row clearfix">
									<div className="col-lg-8 col-md-12 col-sm-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Basic Information</h3>
												<div className="card-options ">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
													<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
												</div>
											</div>
											<div className="card-body">
												<div className="row clearfix">
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>First Name</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Last Name</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Joining Date</label>
															<DatePicker
																className="form-control"
															/>
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<label>Gender</label>
														<select className="form-control show-tick">
															<option value="">-- Gender --</option>
															<option value="10">Male</option>
															<option value="20">Female</option>
														</select>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Department</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Position</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Phone</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Enter Your Email</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-sm-12">
														<div className="form-group mt-2 mb-3">
	<Dropzone />
															<small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
														</div>
													</div>
													<div className="col-sm-12">
														<div className="form-group mt-3">
															<label>Messages</label>
															<textarea rows="4" className="form-control no-resize" placeholder="Please type what you want..."></textarea>
														</div>
													</div>
													<div className="col-sm-12">
														<button type="submit" className="mr-1 btn btn-primary">Submit</button>
														<button type="submit" className="btn btn-outline-secondary">Cancel</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-12 col-sm-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Account Information</h3>
												<div className="card-options ">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
													<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
												</div>
											</div>
											<div className="card-body">
												<div className="row clearfix">
													<div className="col-sm-12">
														<div className="form-group">
															<label>User Name</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Password</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Confirm Password</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-sm-12">
														<button type="submit" className="mr-1 btn btn-primary">Submit</button>
														<button type="submit" className="btn btn-outline-secondary">Cancel</button>
													</div>
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Account Information</h3>
												<div className="card-options ">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
													<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
												</div>
											</div>
											<div className="card-body">
												<div className="form-group">
													<label>Facebook</label>
													<input type="text" className="form-control" />
												</div>
												<div className="form-group">
													<label>Twitter</label>
													<input type="text" className="form-control" />
												</div>
												<div className="form-group">
													<label>LinkedIN</label>
													<input type="text" className="form-control" />
												</div>
												<div className="form-group">
													<label>Behance</label>
													<input type="text" className="form-control" />
												</div>
												<div className="form-group">
													<label>dribbble</label>
													<input type="text" className="form-control" />
												</div>
												<button type="submit" className="mr-1 btn btn-primary">Submit</button>
												<button type="submit" className="btn btn-outline-secondary">Cancel</button>
											</div>
										</div>
									</div>
								</div>
							</TabPane>
						</TabContent>
					</div>
				</div>

			</>
		);
	}
}
