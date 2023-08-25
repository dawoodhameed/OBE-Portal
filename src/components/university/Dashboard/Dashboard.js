import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavLink, NavItem } from "reactstrap";
import classnames from 'classnames';
import Columnchart from '../../common/columnchart';
import Radarchart from '../../common/radarchart';
import Ckeditor from '../../common/ckeditor';
import ToolTip from "../../common/toolTip";
import { toggle3DotMenuAction } from "../../../actions/settingsAction";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 1,
			isCardRemove: false,
			isFullScreen: false,
			isCollapsed: false,
		};
	}
	render() {
		const { is3DotMenu, toggle3DotMenuAction } = this.props
		const { activeTab, isCardRemove, isFullScreen, isCollapsed } = this.state
		return (
			<>
				<div className="section-body">
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center">
							<div className="header-action">
								<h1 className="page-title">Dashboard</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><span>Ericsson</span></li>
									<li className="breadcrumb-item"><span>University</span></li>
									<li className="breadcrumb-item active" aria-current="page">Dashboard</li>
								</ol>
							</div>
							<Nav tabs className="page-header-tab">
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 1 })}
										onClick={() => this.setState({ activeTab: 1 })}
									>
										Dashboard
                   				</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 2 })}
										onClick={() => this.setState({ activeTab: 2 })}
									>
										Activity
    			               </NavLink>
								</NavItem>
							</Nav>
						</div>
					</div>
				</div>
				<div className="section-body mt-4">
					<div className="container-fluid">
						<div className="row clearfix row-deck">
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body ribbon">
										<ToolTip id="newProfessors" text="New Professors" />
										<div className="ribbon-box green" data-tip data-for="newProfessors">5</div>
										<Link to="/professors" className="my_sort_cut text-muted">
											<i className="fa fa-black-tie"></i>
											<span>Professors</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body">
										<Link to="/contact" className="my_sort_cut text-muted">
											<i className="fa fa-address-book"></i>
											<span>Contact</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body ribbon">
										<ToolTip id="newStaff" text="New Staff" />
										<div className="ribbon-box orange" data-tip data-for="newStaff">8</div>
										<Link to="/staff" className="my_sort_cut text-muted">
											<i className="fa fa-user-circle-o"></i>
											<span>Staff</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body">
										<Link to="/filemanager" className="my_sort_cut text-muted">
											<i className="fa fa-folder"></i>
											<span>FileManager</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body">
										<Link to="/library" className="my_sort_cut text-muted">
											<i className="fa fa-book"></i>
											<span>Library</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body">
										<Link to="/holiday" className="my_sort_cut text-muted">
											<i className="fa fa-bullhorn"></i>
											<span>Holiday</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<TabContent activeTab={activeTab}>
							<TabPane tabId={1} className={classnames(['fade show'])}>
								<div className="row clearfix">
									<div className="col-xl-12">
										<div className={`card ${isCardRemove ? 'card-remove' : ''} ${isFullScreen ? 'card-fullscreen' : ''} ${isCollapsed ? 'card-collapsed' : ''}`}>
											<div className="card-header">
												<h3 className="card-title">University Report</h3>
												<div className="card-options">
													<a href className="card-options-collapse" onClick={() => this.setState({ isCollapsed: !isCollapsed })}><i
														className="fe fe-chevron-up"></i></a>
													<a href className="card-options-fullscreen"
														data-toggle="card-fullscreen" onClick={() => this.setState({ isFullScreen: !isFullScreen })}><i className="fe fe-maximize"></i></a>
													<a href className="card-options-remove" onClick={() => this.setState({ isCardRemove: !isCardRemove })}><i
														className="fe fe-x"></i></a>
												</div>
											</div>
											<div className="card-body">
												<div className="d-sm-flex justify-content-between">
													<div className="font-12 mb-2"><span>Measure How Fast You’re Growing Monthly
                                                        Recurring Revenue. <a href>Learn More</a></span></div>
													<div className="selectgroup w250">
														<label className="selectgroup-item">
															<input type="radio" name="intensity" value="low"
																className="selectgroup-input" defaultChecked />
															<span className="selectgroup-button">1D</span>
														</label>
														<label className="selectgroup-item">
															<input type="radio" name="intensity" value="medium"
																className="selectgroup-input" />
															<span className="selectgroup-button">1W</span>
														</label>
														<label className="selectgroup-item">
															<input type="radio" name="intensity" value="high"
																className="selectgroup-input" />
															<span className="selectgroup-button">1M</span>
														</label>
														<label className="selectgroup-item">
															<input type="radio" name="intensity" value="veryhigh"
																className="selectgroup-input" />
															<span className="selectgroup-button">1Y</span>
														</label>
													</div>
												</div>
												<Columnchart></Columnchart>
											</div>
											<div className="card-footer">
												<div className="row">
													<div className="col-xl-3 col-md-6 mb-2">
														<div className="clearfix">
															<div className="float-left"><strong>Fees</strong></div>
															<div className="float-right"><small className="text-muted">35%</small>
															</div>
														</div>
														<div className="progress progress-xs">
															<div className="progress-bar bg-indigo" role="progressbar"
																style={{ width: "35%" }} aria-valuenow="35" aria-valuemin="0"
																aria-valuemax="100"></div>
														</div>
														<span className="text-uppercase font-10">Compared to last year</span>
													</div>
													<div className="col-xl-3 col-md-6 mb-2">
														<div className="clearfix">
															<div className="float-left"><strong>Donation</strong></div>
															<div className="float-right"><small className="text-muted">61%</small>
															</div>
														</div>
														<div className="progress progress-xs">
															<div className="progress-bar bg-yellow" role="progressbar"
																style={{ width: "61%" }} aria-valuenow="61" aria-valuemin="0"
																aria-valuemax="100"></div>
														</div>
														<span className="text-uppercase font-10">Compared to last year</span>
													</div>
													<div className="col-xl-3 col-md-6 mb-2">
														<div className="clearfix">
															<div className="float-left"><strong>Income</strong></div>
															<div className="float-right"><small className="text-muted">87%</small>
															</div>
														</div>
														<div className="progress progress-xs">
															<div className="progress-bar bg-green" role="progressbar"
																style={{ width: "87%" }} aria-valuenow="87" aria-valuemin="0"
																aria-valuemax="100"></div>
														</div>
														<span className="text-uppercase font-10">Compared to last year</span>
													</div>
													<div className="col-xl-3 col-md-6 mb-2">
														<div className="clearfix">
															<div className="float-left"><strong>Expense</strong></div>
															<div className="float-right"><small className="text-muted">42%</small>
															</div>
														</div>
														<div className="progress progress-xs">
															<div className="progress-bar bg-pink" role="progressbar"
																style={{ width: "42%" }} aria-valuenow="42" aria-valuemin="0"
																aria-valuemax="100"></div>
														</div>
														<span className="text-uppercase font-10">Compared to last year</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="row clearfix row-deck">
									<div className="col-xl-6 col-lg-6 col-md-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Exam Toppers</h3>
												<div className="card-options">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i
														className="fe fe-chevron-up"></i></a>
													<div className={`item-action dropdown ml-2 ${is3DotMenu ? 'show' : ''}`}>
														<a href data-toggle="dropdown" onClick={() => toggle3DotMenuAction(!is3DotMenu)}><i
															className="fe fe-more-vertical"></i></a>
														<div className={`dropdown-menu dropdown-menu-right${is3DotMenu ? ' show d3Dot' : ''}`}>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-eye"></i> View Details </a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-share-alt"></i> Share </a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-cloud-download"></i>
                                                           Download</a>
															<div className="dropdown-divider"></div>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-copy"></i> Copy to</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-folder"></i> Move to</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-edit"></i> Rename</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-trash"></i> Delete</a>
														</div>
													</div>
												</div>
											</div>
											<div className="table-responsive" style={{ height: "310px" }}>
												<table
													className="table card-table table-vcenter text-nowrap table-striped mb-0">
													<tbody>
														<tr>
															<th>No.</th>
															<th>Name</th>
															<th></th>
															<th>Marks</th>
															<th>%AGE</th>
														</tr>
														<tr>
															<td>11</td>
															<td className="w40">
																<div className="avatar">
																	<img className="avatar" src="../assets/images/xs/avatar1.jpg" alt="avatar" />
																</div>
															</td>
															<td>
																<div>Merri Diamond</div>
																<div className="text-muted">Science</div>
															</td>
															<td>199</td>
															<td>99.00</td>
														</tr>
														<tr>
															<td>23</td>
															<td className="w40">
																<div className="avatar">
																	<img className="avatar"
																		src="../assets/images/xs/avatar2.jpg" alt="avatar" />
																</div>
															</td>
															<td>
																<div>Sara Hopkins</div>
																<div className="text-muted">Mechanical</div>
															</td>
															<td>197</td>
															<td>98.00</td>
														</tr>
														<tr>
															<td>41</td>
															<td className="w40">
																<div className="avatar">
																	<img className="avatar"
																		src="../assets/images/xs/avatar3.jpg" alt="avatar" />
																</div>
															</td>
															<td>
																<div>Allen Collins</div>
																<div className="text-muted">M.C.A.</div>
															</td>
															<td>197</td>
															<td>98.00</td>
														</tr>
														<tr>
															<td>17</td>
															<td className="w40">
																<div className="avatar">
																	<img className="avatar"
																		src="../assets/images/xs/avatar4.jpg" alt="avatar" />
																</div>
															</td>
															<td>
																<div>Erin Gonzales</div>
																<div className="text-muted">Arts</div>
															</td>
															<td>194</td>
															<td>97.00</td>
														</tr>
														<tr>
															<td>57</td>
															<td className="w40">
																<div className="avatar">
																	<img className="avatar"
																		src="../assets/images/xs/avatar5.jpg" alt="avatar" />
																</div>
															</td>
															<td>
																<div>Claire Peters</div>
																<div className="text-muted">Science</div>
															</td>
															<td>192</td>
															<td>95.00</td>
														</tr>
														<tr>
															<td>85</td>
															<td className="w40">
																<div className="avatar">
																	<img className="avatar"
																		src="../assets/images/xs/avatar6.jpg" alt="avatar" />
																</div>
															</td>
															<td>
																<div>Claire Peters</div>
																<div className="text-muted">Science</div>
															</td>
															<td>192</td>
															<td>95.00</td>
														</tr>
														<tr>
															<td>9</td>
															<td className="w40">
																<div className="avatar">
																	<img className="avatar"
																		src="../assets/images/xs/avatar7.jpg" alt="avatar" />
																</div>
															</td>
															<td>
																<div>Claire Peters</div>
																<div className="text-muted">Science</div>
															</td>
															<td>191</td>
															<td>95.00</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="card-footer d-flex justify-content-between">
												<div className="font-14"><span>Measure How Fast You’re Growing Monthly Recurring
                                                    Revenue. <a href>View All</a></span></div>
												<div>
													<button type="button" className="btn btn-primary">Export</button>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Performance</h3>
											</div>
											<div className="card-body">
												<Radarchart></Radarchart>
												{/* <div id="apex-radar-multiple-series"></div> */}
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">New Student List</h3>
												<div className="card-options">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i
														className="fe fe-chevron-up"></i></a>
													<a href className="card-options-fullscreen"
														data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
													<a href className="card-options-remove" data-toggle="card-remove"><i
														className="fe fe-x"></i></a>
												</div>
											</div>
											<div className="card-body">
												<div className="table-responsive">
													<table className="table table-striped mb-0 text-nowrap">
														<thead>
															<tr>
																<th>No</th>
																<th>Name</th>
																<th>Assigned Professor</th>
																<th>Date Of Admit</th>
																<th>Fees</th>
																<th>Branch</th>
																<th>Edit</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>1</td>
																<td>Jens Brincker</td>
																<td>Kenny Josh</td>
																<td>27/05/2016</td>
																<td>
																	<span className="tag tag-success">paid</span>
																</td>
																<td>Mechanical</td>
																<td>
																	<a href><i
																		className="fa fa-check"></i></a>
																	<a href><i
																		className="fa fa-trash"></i></a>
																</td>
															</tr>
															<tr>
																<td>2</td>
																<td>Mark Hay</td>
																<td> Mark</td>
																<td>26/05/2018</td>
																<td>
																	<span className="tag tag-warning">unpaid</span>
																</td>
																<td>Science</td>
																<td>
																	<a href><i
																		className="fa fa-check"></i></a>
																	<a href><i
																		className="fa fa-trash"></i></a>
																</td>
															</tr>
															<tr>
																<td>3</td>
																<td>Anthony Davie</td>
																<td>Cinnabar</td>
																<td>21/05/2018</td>
																<td>
																	<span className="tag tag-success ">paid</span>
																</td>
																<td>Commerce</td>
																<td>
																	<a href><i
																		className="fa fa-check"></i></a>
																	<a href><i
																		className="fa fa-trash"></i></a>
																</td>
															</tr>
															<tr>
																<td>4</td>
																<td>David Perry</td>
																<td>Felix </td>
																<td>20/04/2019</td>
																<td>
																	<span className="tag tag-danger">unpaid</span>
																</td>
																<td>Mechanical</td>
																<td>
																	<a href><i
																		className="fa fa-check"></i></a>
																	<a href><i
																		className="fa fa-trash"></i></a>
																</td>
															</tr>
															<tr>
																<td>5</td>
																<td>Anthony Davie</td>
																<td>Beryl</td>
																<td>24/05/2017</td>
																<td>
																	<span className="tag tag-success ">paid</span>
																</td>
																<td>M.B.A.</td>
																<td>
																	<a href><i
																		className="fa fa-check"></i></a>
																	<a href><i
																		className="fa fa-trash"></i></a>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabPane>
							<TabPane tabId={2} className={classnames(['fade show'])}>
								<div className="row clearfix row-deck">
									<div className="col-xl-7 col-lg-6 col-md-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Quick Mail</h3>
												<div className="card-options">
													<a href className="card-options-remove"
														data-toggle="card-remove"><i className="fe fe-x"></i></a>
													<div className="item-action dropdown ml-2">
														<a href data-toggle="dropdown"><i
															className="fe fe-more-vertical"></i></a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-eye"></i> View Details </a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-share-alt"></i> Share </a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-cloud-download"></i>
                                                            Download</a>
															<div className="dropdown-divider"></div>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-copy"></i> Copy to</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-folder"></i> Move to</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-edit"></i> Rename</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-trash"></i> Delete</a>
														</div>
													</div>
												</div>
											</div>
											<div className="card-body">
												<div className="input-group">
													<div className="input-group-prepend">
														<span className="input-group-text w80">To:</span>
													</div>
													<input type="text" className="form-control" />
													<div className="input-group-append">
														<span className="input-group-text">CC BCC</span>
													</div>
												</div>
												<div className="input-group mt-1 mb-3">
													<div className="input-group-prepend">
														<span className="input-group-text w80">Subject:</span>
													</div>
													<input type="text" className="form-control" />
												</div>

												<div className="summernote">
													<Ckeditor />
												</div>
												<button className="btn btn-default mt-3">Send</button>
											</div>
										</div>

									</div>
									<div className="col-xl-5 col-lg-6 col-md-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">University Stats</h3>
												<div className="card-options">
													<a href className="card-options-remove"
														data-toggle="card-remove"><i className="fe fe-x"></i></a>
													<div className="item-action dropdown ml-2">
														<a href data-toggle="dropdown"><i
															className="fe fe-more-vertical"></i></a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-eye"></i> View Details </a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-share-alt"></i> Share </a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-cloud-download"></i>
                                                            Download</a>
															<div className="dropdown-divider"></div>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-copy"></i> Copy to</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-folder"></i> Move to</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-edit"></i> Rename</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-trash"></i> Delete</a>
														</div>
													</div>
												</div>
											</div>
											<div className="card-body">
												<div className="row text-center">
													<div className="col-lg-4 col-4 border-right">
														<label className="mb-0 font-10">Department</label>
														<h4 className="font-20 font-weight-bold">05</h4>
													</div>
													<div className="col-lg-4 col-4 border-right">
														<label className="mb-0 font-10">Total Teacher</label>
														<h4 className="font-20 font-weight-bold">43</h4>
													</div>
													<div className="col-lg-4 col-4">
														<label className="mb-0 font-10">Total Student</label>
														<h4 className="font-20 font-weight-bold">267</h4>
													</div>
												</div>
												<table className="table table-striped mt-4">
													<tbody>
														<tr>
															<td>
																<label className="d-block">Mechanical Engineering<span
																	className="float-right">43%</span></label>
																<div className="progress progress-xs">
																	<div className="progress-bar bg-indigo" role="progressbar"
																		aria-valuenow="43" aria-valuemin="0"
																		aria-valuemax="100" style={{ width: "43%" }}></div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<label className="d-block">Business Analysis - BUS <span
																	className="float-right">27%</span></label>
																<div className="progress progress-xs">
																	<div className="progress-bar bg-blue" role="progressbar"
																		aria-valuenow="27" aria-valuemin="0"
																		aria-valuemax="100" style={{ width: "27%" }}></div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<label className="d-block">Computer Technology - CT <span
																	className="float-right">81%</span></label>
																<div className="progress progress-xs">
																	<div className="progress-bar bg-cyan" role="progressbar"
																		aria-valuenow="77" aria-valuemin="0"
																		aria-valuemax="100" style={{ width: "81%" }}></div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<label className="d-block">Management - MGT <span
																	className="float-right">61%</span></label>
																<div className="progress progress-xs">
																	<div className="progress-bar bg-pink" role="progressbar"
																		aria-valuenow="77" aria-valuemin="0"
																		aria-valuemax="100" style={{ width: "61%" }}></div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<label className="d-block">Science <span
																	className="float-right">77%</span></label>
																<div className="progress progress-xs">
																	<div className="progress-bar bg-orange" role="progressbar"
																		aria-valuenow="77" aria-valuemin="0"
																		aria-valuemax="100" style={{ width: "77%" }}></div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="card-footer">
												<small>Measure How Fast You’re Growing Monthly Recurring Revenue. <a
													href>Learn More</a></small>
											</div>
										</div>
									</div>
									<div className="col-xl-12 col-lg-12">
										<div className="card">
											<div className="table-responsive todo_list">
												<table
													className="table table-hover text-nowrap table-striped table-vcenter mb-0">
													<thead>
														<tr>
															<th>Task</th>
															<th className="w150 text-right">Due</th>
															<th className="w100">Priority</th>
															<th className="w80 text-center"><i className="icon-user"></i></th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" defaultChecked />
																	<span className="custom-control-label">Report Panel
                                                                    Usag</span>
																</label>
															</td>
															<td className="text-right">Feb 12-2019</td>
															<td><span className="tag tag-danger ml-0 mr-0">HIGH</span></td>
															<td>
																<ToolTip id="id0" text="Avatar Name" />
																<span className="avatar avatar-pink" data-tip data-for="id0"
																	data-placement="top" title=""
																	data-original-title="Avatar Name">NG</span>
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" />
																	<span className="custom-control-label">Report Panel
                                                                    Usag</span>
																</label>
															</td>
															<td className="text-right">Feb 18-2019</td>
															<td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
															<td>
																<img src="../assets/images/xs/avatar1.jpg"
																	data-tip data-for="id0" data-placement="top" title=""
																	alt="Avatar" className="avatar"
																	data-original-title="Avatar Name" />
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" defaultChecked />
																	<span className="custom-control-label">New logo design for
                                                                    Angular Admin</span>
																</label>
															</td>
															<td className="text-right">March 02-2019</td>
															<td><span className="tag tag-success ml-0 mr-0">High</span></td>
															<td>
																<img src="../assets/images/xs/avatar2.jpg"
																	data-tip data-for="id0" data-placement="top" title=""
																	alt="Avatar" className="avatar"
																	data-original-title="Avatar Name" />
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" defaultChecked />
																	<span className="custom-control-label">Report Panel
                                                                    Usag</span>
																</label>
															</td>
															<td className="text-right">Feb 12-2019</td>
															<td><span className="tag tag-danger ml-0 mr-0">HIGH</span></td>
															<td>
																<span className="avatar avatar-pink" data-tip data-for="id0"
																	data-placement="top" title=""
																	data-original-title="Avatar Name">NG</span>
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" />
																	<span className="custom-control-label">Report Panel
                                                                    Usag</span>
																</label>
															</td>
															<td className="text-right">Feb 18-2019</td>
															<td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
															<td>
																<img src="../assets/images/xs/avatar3.jpg"
																	data-tip data-for="id0" data-placement="top" title=""
																	alt="Avatar" className="avatar"
																	data-original-title="Avatar Name" />
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" defaultChecked />
																	<span className="custom-control-label">New logo design for
                                                                    Angular Admin</span>
																</label>
															</td>
															<td className="text-right">March 02-2019</td>
															<td><span className="tag tag-success ml-0 mr-0">High</span></td>
															<td>
																<span className="avatar avatar-blue" data-tip data-for="id0"
																	data-placement="top" title=""
																	data-original-title="Avatar Name">NG</span>
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" />
																	<span className="custom-control-label">Design PSD files for
                                                                    Angular Admin</span>
																</label>
															</td>
															<td className="text-right">March 20-2019</td>
															<td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
															<td>
																<img src="../assets/images/xs/avatar4.jpg"
																	data-tip data-for="id0" data-placement="top" title=""
																	alt="Avatar" className="avatar"
																	data-original-title="Avatar Name" />
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" />
																	<span className="custom-control-label">Design PSD files for
                                                                    Angular Admin</span>
																</label>
															</td>
															<td className="text-right">March 20-2019</td>
															<td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
															<td>
																<img src="../assets/images/xs/avatar5.jpg" data-tip data-for="id0" data-placement="top" title="" alt="Avatar" className="avatar" data-original-title="Avatar Name" />
															</td>
														</tr>
													</tbody>
												</table>
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

const mapStateToProps = state => ({
	is3DotMenu: state.settings.is3DotMenu
})

const mapDispatchToProps = dispatch => ({
	toggle3DotMenuAction: (e) => dispatch(toggle3DotMenuAction(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);