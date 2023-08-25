import React, { Component } from 'react';
import { Donut } from 'react-dial-knob'
import Nestable from 'react-nestable';
import ToolTip from "../../common/toolTip";
import { TabContent, TabPane, Nav, NavLink, NavItem } from "reactstrap";
import classnames from 'classnames';


export default class Taskboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 1,
			isCardRemove: false,
			isCollapsed: false,
			isFullScreen: false
		};
	}
	render() {
		const { activeTab, isCardRemove, isFullScreen, isCollapsed } = this.state
		const itemsPlanned = [
			{
				id: 0, text: <li className="dd-item" data-id="1">
					<div className="dd-handle">
						<h6>Dashbaord</h6>
						<span className="time"><span className="text-primary">Start: 5 Aug</span> to <span className="text-danger">Complete: 15 Aug</span></span>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<ToolTip id="completed" text="Avtar" />
						<ul className="list-unstyled team-info">
							<li><img src="../assets/images/xs/avatar1.jpg" data-tip data-for="completed" title="Avatar" alt="Avatar" /></li>
							<li><img src="../assets/images/xs/avatar2.jpg" data-tip data-for="completed" title="Avatar" alt="Avatar" /></li>
							<li><img src="../assets/images/xs/avatar5.jpg" data-tip data-for="completed" title="Avatar" alt="Avatar" /></li>
						</ul>
					</div>
				</li>
			},
			{
				id: 1, text: <li className="dd-item" data-id="2">
					<div className="dd-handle">
						<h6>New project</h6>
						<span className="time"><span className="text-primary">Start: 6 Aug</span> to <span className="text-danger">Complete: 28 Aug</span></span>
						<p>It is a long established fact that a reader will be distracted.</p>
					</div>
				</li>
			},
			{
				id: 2, text: <li className="dd-item" data-id="3">
					<div className="dd-handle">
						<h6>Feed Details</h6>
						<p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
					</div>
				</li>
			}
		];
		const renderItemsPlanned = ({ item }) => item.text;
		const itemsProgress = [
			{
				id: 0, text: <li className="dd-item" data-id="1">
					<div className="dd-handle">
						<h6>New Code Update</h6>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</li>
			},
			{
				id: 1, text: <li className="dd-item" data-id="2">
					<div className="dd-handle">
						<h6>Meeting</h6>
						<span className="time"><span className="text-primary">Start: 5 Aug</span> to <span className="text-danger">Complete: 11 Aug</span></span>
						<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero</p>
						<ToolTip id="progress" text="Avtar" />
						<ul className="list-unstyled team-info">
							<li><img src="../assets/images/xs/avatar7.jpg" data-tip data-for="progress" title="Avatar" alt="Avatar" /></li>
							<li><img src="../assets/images/xs/avatar9.jpg" data-tip data-for="progress" title="Avatar" alt="Avatar" /></li>
						</ul>
					</div>
				</li>
			},
			{
				id: 2, text:
					<li className="dd-item" data-id="2">
						<div className="dd-handle">
							<h6>New project</h6>
							<p>It is a long established fact that a reader will be distracted.</p>
						</div>
					</li>
			},
			{
				id: 3, text:
					<li className="dd-item" data-id="3">
						<div className="dd-handle">
							<h6>Feed Details</h6>
							<p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
						</div>
					</li>
			},
		]
		const renderItemsProgress = ({ item }) => item.text;
		const itemsCompleted = [
			{
				id: 0, text: <li className="dd-item" data-id="1">
					<div className="dd-handle">
						<h6>Job title</h6>
						<p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
						<ToolTip id="completed" text="Avtar" />
						<ul className="list-unstyled team-info">
							<li><img src="../assets/images/xs/avatar4.jpg" data-tip data-for="completed" title="Avatar" alt="Avatar" /></li>
							<li><img src="../assets/images/xs/avatar5.jpg" data-tip data-for="completed" title="Avatar" alt="Avatar" /></li>
							<li><img src="../assets/images/xs/avatar6.jpg" data-tip data-for="completed" title="Avatar" alt="Avatar" /></li>
							<li><img src="../assets/images/xs/avatar8.jpg" data-tip data-for="completed" title="Avatar" alt="Avatar" /></li>
						</ul>
					</div>
				</li>
			},
			{
				id: 1, text: <li className="dd-item" data-id="2">
					<div className="dd-handle">
						<h6>Event Done</h6>
						<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
					</div>
				</li>
			},
			{
				id: 2, text: <li className="dd-item" data-id="1">
					<div className="dd-handle">
						<h6>New Code Update</h6>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</li>
			}
		]
		const renderItemsCompleted = ({ item }) => item.text;
		return (
			<>
				<div className="section-body">
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center ">
							<div className="header-action">
								<h1 className="page-title">TaskBoard</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><a href>Ericsson</a></li>
									<li className="breadcrumb-item active" aria-current="page">TaskBoard</li>
								</ol>
							</div>

						
						<Nav tabs className="page-header-tab">
							<NavItem>
								<NavLink
									className={classnames({ active: activeTab === 1 })}
									onClick={() => this.setState({ activeTab: 1 })}
								>
									Task List
                   				</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className={classnames({ active: activeTab === 2 })}
									onClick={() => this.setState({ activeTab: 2 })}
								>
									Scrum Type
    			               </NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className={classnames({ active: activeTab === 3 })}
									onClick={() => this.setState({ activeTab: 3 })}
								>
									Add Task
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
								<div className="row clearfix mt-2">
									<div className="col-lg-3 col-md-6">
										<div className="card">
											<div className="card-body text-center">
												<h6>Planned</h6>
												<Donut
													diameter={90}
													min={0}
													max={100}
													step={1}
													value={23}
													style={{ display: 'inline-block' }}
													theme={{
														donutThickness: 5,
														donutColor: '#2185d0'
													}}
												/>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="card">
											<div className="card-body text-center">
												<h6>In progress</h6>
												<Donut
													diameter={90}
													min={0}
													max={100}
													step={1}
													value={43}
													style={{ display: 'inline-block' }}
													theme={{
														donutThickness: 5,
														donutColor: '#f2711c'
													}}
												/>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="card">
											<div className="card-body text-center">
												<h6>Completed</h6>
												<Donut
													diameter={90}
													min={0}
													max={100}
													step={1}
													value={83}
													style={{ display: 'inline-block' }}
													theme={{
														donutThickness: 5,
														donutColor: '#21ba45'
													}}
												/>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="card">
											<div className="card-body text-center">
												<h6>In Completed</h6>
												<Donut
													diameter={90}
													min={0}
													max={100}
													step={1}
													value={12}
													style={{ display: 'inline-block' }}
													theme={{
														donutThickness: 5,
														donutColor: '#e03997'
													}}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="table-responsive">
									<table className="table table-hover table-vcenter mb-0 table_custom spacing8 text-nowrap">
										<thead>
											<tr>
												<th>#</th>
												<th>Task</th>
												<th>Team</th>
												<th>Duration</th>
												<th>Action</th>
												<th className="w200"></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>01</td>
												<td>
													<h6 className="mb-0">New code Update on github</h6>
													<span>It is a long established fact that a reader will be distracted...</span>
												</td>
												<td>
													<ul className="list-unstyled team-info mb-0 w150">
														<ToolTip id="0" text="Avtar" />
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="0" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="0" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="0" title="Avatar" alt="Avatar" /></li>
													</ul>
												</td>
												<td>
													<div className="text-info">Start: 3 Jun 2019</div>
													<div className="text-pink">End: 15 Jun 2019</div>
												</td>
												<td>
													<span className="tag tag-blue">Planned</span>
												</td>
												<td>
													<div className="clearfix">
														<div className="float-left"><strong>0%</strong></div>
														<div className="float-right"><small className="text-muted">Progress</small></div>
													</div>
													<div className="progress progress-xs">
														<div className="progress-bar bg-azure" role="progressbar" style={{ width: "0%" }} aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</td>
											</tr>
											<tr>
												<td>02</td>
												<td>
													<h6 className="mb-0">Design Events</h6>
													<span>It is a long established fact that a reader will be distracted...</span>
												</td>
												<td>
													<ul className="list-unstyled team-info mb-0 w150">
														<ToolTip id="1" text="Avtar" />
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="1" title="Avatar" alt="Avatar" /></li>
													</ul>
												</td>
												<td>
													<div className="text-info">Start: 02 Jun 2019</div>
													<div className="text-pink">End: 08 Jun 2019</div>
												</td>
												<td>
													<span className="tag tag-green">Completed</span>
												</td>
												<td>
													<div className="clearfix">
														<div className="float-left"><strong>100%</strong></div>
														<div className="float-right"><small className="text-muted">Progress</small></div>
													</div>
													<div className="progress progress-xs">
														<div className="progress-bar bg-green" role="progressbar" style={{ width: "100%" }} aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</td>
											</tr>
											<tr>
												<td>03</td>
												<td>
													<h6 className="mb-0">Feed Details on Dribbble</h6>
													<span>The point of using Lorem Ipsum is that...</span>
												</td>
												<td>
													<ul className="list-unstyled team-info mb-0 w150">
														<ToolTip id="2" text="Avtar" />
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="2" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="2" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="2" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="2" title="Avatar" alt="Avatar" /></li>
													</ul>
												</td>
												<td>
													<div className="text-info">Start: 3 Jun 2019</div>
													<div className="text-pink">End: 15 Jun 2019</div>
												</td>
												<td>
													<span className="tag tag-orange">In progress</span>
												</td>
												<td>
													<div className="clearfix">
														<div className="float-left"><strong>35%</strong></div>
														<div className="float-right"><small className="text-muted">Progress</small></div>
													</div>
													<div className="progress progress-xs">
														<div className="progress-bar bg-azure" role="progressbar" style={{ width: "35%" }} aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</td>
											</tr>
											<tr>
												<td>04</td>
												<td>
													<h6 className="mb-0">New code Update on github</h6>
													<span>It is a long established fact that a reader will be distracted...</span>
												</td>
												<td>
													<ul className="list-unstyled team-info mb-0 w150">
														<ToolTip id="3" text="Avtar" />
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="3" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="3" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="3" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="3" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="3" title="Avatar" alt="Avatar" /></li>
													</ul>
												</td>
												<td>
													<div className="text-info">Start: 13 Jun 2019</div>
													<div className="text-pink">End: 23 Jun 2019</div>
												</td>
												<td>
													<span className="tag tag-orange">In progress</span>
												</td>
												<td>
													<div className="clearfix">
														<div className="float-left"><strong>75%</strong></div>
														<div className="float-right"><small className="text-muted">Progress</small></div>
													</div>
													<div className="progress progress-xs">
														<div className="progress-bar bg-green" role="progressbar" style={{ width: "75%" }} aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</td>
											</tr>
											<tr>
												<td>05</td>
												<td>
													<h6 className="mb-0">New code Update on github</h6>
													<span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
												</td>
												<td>
													<ul className="list-unstyled team-info mb-0 w150">
														<ToolTip id="4" text="Avtar" />
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="4" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="4" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="4" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="4" title="Avatar" alt="Avatar" /></li>
													</ul>
												</td>
												<td>
													<div className="text-info">Start: 8 Jun 2019</div>
													<div className="text-pink">End: 15 Jun 2019</div>
												</td>
												<td>
													<span className="tag tag-orange">In progress</span>
												</td>
												<td>
													<div className="clearfix">
														<div className="float-left"><strong>35%</strong></div>
														<div className="float-right"><small className="text-muted">Progress</small></div>
													</div>
													<div className="progress progress-xs">
														<div className="progress-bar bg-azure" role="progressbar" style={{ width: "35%" }} aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</td>
											</tr>
											<tr>
												<td>06</td>
												<td>
													<h6 className="mb-0">Angular App Design bug</h6>
													<span>There are many variations of passages of Lorem Ipsum available...</span>
												</td>
												<td>
													<ul className="list-unstyled team-info mb-0 w150">
														<ToolTip id="5" text="Avtar" />
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="5" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="5" title="Avatar" alt="Avatar" /></li>
														<li><img src="../assets/images/xs/avatar1.jpg" data-tip="tooltip" data-for="5" title="Avatar" alt="Avatar" /></li>
													</ul>
												</td>
												<td>
													<div className="text-info">Start: 3 Jun 2019</div>
													<div className="text-pink">End: 15 Jun 2019</div>
												</td>
												<td>
													<span className="tag tag-orange">Planned</span>
												</td>
												<td>
													<div className="clearfix">
														<div className="float-left"><strong>35%</strong></div>
														<div className="float-right"><small className="text-muted">Progress</small></div>
													</div>
													<div className="progress progress-xs">
														<div className="progress-bar bg-azure" role="progressbar" style={{ width: "35%" }} aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</TabPane>
							<TabPane tabId={2} className={classnames(['fade show'])}>
								<div className="row clearfix">
									<div className="col-lg-4 col-md-12">
										<div className={`card planned_task ${isCardRemove ? 'card-remove' : ''} ${isFullScreen ? 'card-fullscreen' : ''} ${isCollapsed ? 'card-collapsed' : ''}`}>
											<div className="card-header">
												<h3 className="card-title">Planned</h3>
												<div className="card-options">
													<a href className="card-options-collapse" onClick={() => this.setState({ isCollapsed: !isCollapsed })}><i
														className="fe fe-chevron-up"></i></a>
													<a href className="card-options-fullscreen"
														data-toggle="card-fullscreen" onClick={() => this.setState({ isFullScreen: !isFullScreen })}><i className="fe fe-maximize"></i></a>
													<a href className="card-options-remove" onClick={() => this.setState({ isCardRemove: !isCardRemove })}><i
														className="fe fe-x"></i></a>
													<div className="item-action dropdown ml-2">
														<a href data-toggle="dropdown"><i className="fe fe-more-vertical"></i></a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-eye"></i> View Details </a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-share-alt"></i> Share </a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download"></i> Download</a>
															<div className="dropdown-divider"></div>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-copy"></i> Copy to</a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-folder"></i> Move to</a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-edit"></i> Rename</a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-trash"></i> Delete</a>
														</div>
													</div>
												</div>
											</div>
											<div className="card-body">
												<Nestable
													items={itemsPlanned}
													renderItem={renderItemsPlanned}
												/>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-12">
										<div className="card progress_task">
											<div className="card-header">
												<h3 className="card-title">In progress</h3>
												<div className="card-options">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
													<a href className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
													<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
													<div className="item-action dropdown ml-2">
														<a href data-toggle="dropdown"><i className="fe fe-more-vertical"></i></a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-eye"></i> View Details </a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-share-alt"></i> Share </a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download"></i> Download</a>
															<div className="dropdown-divider"></div>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-copy"></i> Copy to</a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-folder"></i> Move to</a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-edit"></i> Rename</a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-trash"></i> Delete</a>
														</div>
													</div>
												</div>
											</div>
											<div className="card-body">
												<Nestable
													items={itemsProgress}
													renderItem={renderItemsProgress}
												/>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-12">
										<div className="card completed_task">
											<div className="card-header">
												<h3 className="card-title">Completed</h3>
												<div className="card-options">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
													<a href className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
													<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
													<div className="item-action dropdown ml-2">
														<a href data-toggle="dropdown"><i className="fe fe-more-vertical"></i></a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-eye"></i> View Details </a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-share-alt"></i> Share </a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download"></i> Download</a>
															<div className="dropdown-divider"></div>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-copy"></i> Copy to</a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-folder"></i> Move to</a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-edit"></i> Rename</a>
															<a href className="dropdown-item"><i className="dropdown-icon fa fa-trash"></i> Delete</a>
														</div>
													</div>
												</div>
											</div>
											<div className="card-body">
												<div className="dd" data-plugin="nestable">

													<Nestable
														items={itemsCompleted}
														renderItem={renderItemsCompleted}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabPane>
							<TabPane tabId={3} className={classnames(['fade show'])}>
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Add Task</h3>
										<div className="card-options ">
											<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
											<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
										</div>
									</div>
									<form className="card-body">
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Task no. <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Job title <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Select Team <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<select className="form-control show-tick">
													<option>Select</option>
													<option>John Smith</option>
													<option>Claire Peters</option>
													<option>Allen Collins</option>
													<option>Cory Carter</option>
													<option>Rochelle Barton</option>
												</select>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Description <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<textarea rows="4" className="form-control no-resize" placeholder="Please type what you want..."></textarea>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Range <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<div className="input-daterange input-group" data-provide="datepicker">
													<input type="text" className="form-control" name="start" />
													<span className="input-group-addon"> to </span>
													<input type="text" className="form-control" name="end" />
												</div>
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
