import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';
import ToolTip from "../../common/toolTip";
import { TabContent, TabPane, Nav, NavLink, NavItem } from "reactstrap";
import classnames from 'classnames';
import Dropzone from '../../common/DropzoneExample';

export default class Contact extends Component {
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
								<h1 className="page-title">Contact</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><a href>Ericsson</a></li>
									<li className="breadcrumb-item active" aria-current="page">Contact</li>
								</ol>
							</div>
						
							<Nav tabs className="page-header-tab">
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 1 })}
										onClick={() => this.setState({ activeTab: 1 })}
									>
										<i className="fa fa-list-ul"></i> List
                   				</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 2 })}
										onClick={() => this.setState({ activeTab: 2 })}
									>
										<i className="fa fa-th"></i> Grid
    			               </NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 3 })}
										onClick={() => this.setState({ activeTab: 3 })}
									>
										<i className="fa fa-plus"></i> Add New
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
								<div className="table-responsive" id="users">
									<table className="table table-hover table-vcenter text-nowrap table_custom list">
										<tbody>
											<tr className="">
												<td className="width35 hidden-xs">
													<a href className="mail-star"><i className="fa fa-star"></i></a>
												</td>
												<td className="text-center width40">
													<div className="avatar d-block">
														<img className="avatar" src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
													</div>
												</td>
												<td>
													<div><a href>John Smith</a></div>
													<div className="text-muted">+264-625-2583</div>
												</td>
												<td className="hidden-xs">
													<div className="text-muted">johnsmith@info.com</div>
												</td>
												<td className="hidden-sm">
													<div className="text-muted">455 S. Airport St. Moncks Corner, SC 29461</div>
												</td>
												<td className="text-right">
													<ToolTip id="phone0" text="Phone" />
													<ToolTip id="mail0" text="Mail" />
													<ToolTip id="delete0" text="Delete" />
													<a className="btn btn-icon btn-sm" href data-tip data-for="phone0" title="Phone"><i className="fa fa-phone"></i></a>
													<a className="btn btn-icon btn-sm" href data-tip data-for="mail0" title="Mail"><i className="fa fa-envelope"></i></a>
													<a onClick={() => this.setState({ show: true })} className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" href data-tip data-for="delete0" title="Delete"><i className="fa fa-trash"></i></a>
												</td>
											</tr>
											<tr className="">
												<td className="width35 hidden-xs">
													<a href className="mail-star active"><i className="fa fa-star"></i></a>
												</td>
												<td className="text-center width40">
													<div className="avatar d-block">
														<img className="avatar" src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
													</div>
												</td>
												<td>
													<div><a href>Merri Diamond</a></div>
													<div className="text-muted">+264-625-2583</div>
												</td>
												<td className="hidden-xs">
													<div className="text-muted">hermanbeck@info.com</div>
												</td>
												<td className="hidden-sm">
													<div className="text-muted">455 S. Airport St. Moncks Corner, SC 29461</div>
												</td>
												<td className="text-right">
													<ToolTip id="phone0" text="Phone" />
													<ToolTip id="mail0" text="Mail" />
													<ToolTip id="delete0" text="Delete" />
													<a className="btn btn-icon btn-sm" href data-tip data-for="phone0" title="Phone"><i className="fa fa-phone"></i></a>
													<a className="btn btn-icon btn-sm" href data-tip data-for="mail0" title="Mail"><i className="fa fa-envelope"></i></a>
													<a onClick={() => this.setState({ show: true })} className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" href data-tip data-for="delete0" title="Delete"><i className="fa fa-trash"></i></a>
												</td>
											</tr>
											<tr className="">
												<td className="hidden-xs">
													<a href className="mail-star love"><i className="fa fa-heart"></i></a>
												</td>
												<td className="text-center width40">
													<div className="avatar d-block">
														<img className="avatar" src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
													</div>
												</td>
												<td>
													<div className="from"><a href>Sara Hopkins</a></div>
													<div className="text-muted">+264-625-3333</div>
												</td>
												<td className="hidden-xs">
													<div className="text-muted">maryadams@info.com</div>
												</td>
												<td className="hidden-sm">
													<div className="text-muted">19 Ohio St. Snellville, GA 30039</div>
												</td>
												<td className="text-right">
													<ToolTip id="phone0" text="Phone" />
													<ToolTip id="mail0" text="Mail" />
													<ToolTip id="delete0" text="Delete" />
													<a className="btn btn-icon btn-sm" href data-tip data-for="phone0" title="Phone"><i className="fa fa-phone"></i></a>
													<a className="btn btn-icon btn-sm" href data-tip data-for="mail0" title="Mail"><i className="fa fa-envelope"></i></a>
													<a onClick={() => this.setState({ show: true })} className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" href data-tip data-for="delete0" title="Delete"><i className="fa fa-trash"></i></a>
												</td>
											</tr>
											<tr className="">
												<td className="hidden-xs">
													<a href className="mail-star active"><i className="fa fa-star"></i></a>
												</td>
												<td className="text-center width40">
													<div className="avatar d-block">
														<img className="avatar" src="../assets/images/xs/avatar7.jpg" alt="Avatar" />
													</div>
												</td>
												<td>
													<div className="from"><a href>Andrew Patrick</a></div>
													<div className="text-muted">+264-625-2586</div>
												</td>
												<td className="hidden-xs">
													<div className="text-muted">mikethimas@info.com</div>
												</td>
												<td className="hidden-sm">
													<div className="text-muted">728 Blackburn St. Andover, MA 01810</div>
												</td>
												<td className="text-right">
													<ToolTip id="phone0" text="Phone" />
													<ToolTip id="mail0" text="Mail" />
													<ToolTip id="delete0" text="Delete" />
													<a className="btn btn-icon btn-sm" href data-tip data-for="phone0" title="Phone"><i className="fa fa-phone"></i></a>
													<a className="btn btn-icon btn-sm" href data-tip data-for="mail0" title="Mail"><i className="fa fa-envelope"></i></a>
													<a onClick={() => this.setState({ show: true })} className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" href data-tip data-for="delete0" title="Delete"><i className="fa fa-trash"></i></a>
												</td>
											</tr>
											<tr className="">
												<td className="hidden-xs">
													<a href className="mail-star"><i className="fa fa-star"></i></a>
												</td>
												<td className="text-center width40">
													<div className="avatar d-block">
														<img className="avatar" src="../assets/images/xs/avatar5.jpg" alt="Avatar" />
													</div>
												</td>
												<td>
													<div className="from"><a href>Claire Peters</a></div>
													<div className="text-muted">+264-625-3333</div>
												</td>
												<td className="hidden-xs">
													<div className="text-muted">clairepeters@info.com</div>
												</td>
												<td className="hidden-sm">
													<div className="text-muted">19 Ohio St. Snellville, GA 30039</div>
												</td>
												<td className="text-right">
													<ToolTip id="phone0" text="Phone" />
													<ToolTip id="mail0" text="Mail" />
													<ToolTip id="delete0" text="Delete" />
													<a className="btn btn-icon btn-sm" href data-tip data-for="phone0" title="Phone"><i className="fa fa-phone"></i></a>
													<a className="btn btn-icon btn-sm" href data-tip data-for="mail0" title="Mail"><i className="fa fa-envelope"></i></a>
													<a onClick={() => this.setState({ show: true })} className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" href data-tip data-for="delete0" title="Delete"><i className="fa fa-trash"></i></a>
												</td>
											</tr>
											<tr className="" >
												<td className="hidden-xs">
													<a href className="mail-star"><i className="fa fa-star"></i></a>
												</td>
												<td className="text-center width40">
													<div className="avatar d-block">
														<img className="avatar" src="../assets/images/xs/avatar6.jpg" alt="Avatar" />
													</div>
												</td>
												<td>
													<div className="from"><a href>Allen Collins</a></div>
													<div className="text-muted">+264-625-4526</div>
												</td>
												<td className="hidden-xs">
													<div className="text-muted">kenpatrick@info.com</div>
												</td>
												<td className="hidden-sm">
													<div className="text-muted">728 Blackburn St. Andover, MA 01810</div>
												</td>
												<td className="text-right">
													<ToolTip id="phone0" text="Phone" />
													<ToolTip id="mail0" text="Mail" />
													<ToolTip id="delete0" text="Delete" />
													<a className="btn btn-icon btn-sm" href data-tip data-for="phone0" title="Phone"><i className="fa fa-phone"></i></a>
													<a className="btn btn-icon btn-sm" href data-tip data-for="mail0" title="Mail"><i className="fa fa-envelope"></i></a>
													<a onClick={() => this.setState({ show: true })} className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" href data-tip data-for="delete0" title="Delete"><i className="fa fa-trash"></i></a>
												</td>
											</tr>
											<tr className="">
												<td className="width35 hidden-xs">
													<a href className="mail-star"><i className="fa fa-star"></i></a>
												</td>
												<td className="text-center width40">
													<div className="avatar d-block">
														<img className="avatar" src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
													</div>
												</td>
												<td>
													<div><a href>Erin Gonzales</a></div>
													<div className="text-muted">+264-625-1593</div>
												</td>
												<td className="hidden-xs">
													<div className="text-muted">eringonzales@info.com</div>
												</td>
												<td className="hidden-sm">
													<div className="text-muted">455 S. Airport St. Moncks Corner, SC 29461</div>
												</td>
												<td className="text-right">
													<ToolTip id="phone0" text="Phone" />
													<ToolTip id="mail0" text="Mail" />
													<ToolTip id="delete0" text="Delete" />
													<a className="btn btn-icon btn-sm" href data-tip data-for="phone0" title="Phone"><i className="fa fa-phone"></i></a>
													<a className="btn btn-icon btn-sm" href data-tip data-for="mail0" title="Mail"><i className="fa fa-envelope"></i></a>
													<a onClick={() => this.setState({ show: true })} className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" href data-tip data-for="delete0" title="Delete"><i className="fa fa-trash"></i></a>
												</td>
											</tr>
											<tr className="">
												<td className="hidden-xs">
													<a href className="mail-star"><i className="fa fa-star"></i></a>
												</td>
												<td className="text-center width40">
													<div className="avatar d-block">
														<img className="avatar" src="../assets/images/xs/avatar5.jpg" alt="Avatar" />
													</div>
												</td>
												<td>
													<div className="from"><a href>Harry McCall</a></div>
													<div className="text-muted">+264-625-2468</div>
												</td>
												<td className="hidden-xs">
													<div className="text-muted">susiewillis@info.com</div>
												</td>
												<td className="hidden-sm">
													<div className="text-muted">19 Ohio St. Snellville, GA 30039</div>
												</td>
												<td className="text-right">
													<ToolTip id="phone0" text="Phone" />
													<ToolTip id="mail0" text="Mail" />
													<ToolTip id="delete0" text="Delete" />
													<a className="btn btn-icon btn-sm" href data-tip data-for="phone0" title="Phone"><i className="fa fa-phone"></i></a>
													<a className="btn btn-icon btn-sm" href data-tip data-for="mail0" title="Mail"><i className="fa fa-envelope"></i></a>
													<a onClick={() => this.setState({ show: true })} className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" href data-tip data-for="delete0" title="Delete"><i className="fa fa-trash"></i></a>
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
							</TabPane>
							<TabPane tabId={2} className={classnames(['fade show'])}>
								<div className="row row-deck">
									<div className="col-xl-4 col-md-6 col-sm-12">
										<div className="card " >
											<div className="card-body">
												<div className="card-status bg-blue"></div>
												<div className="mb-3"> <img src="../assets/images/sm/avatar1.jpg" className="rounded-circle w100" alt="" /> </div>
												<div className="mb-2">
													<h5 className="mb-0">Paul Schmidt</h5>
													<p className="text-muted">Aalizeethomas@info.com</p>
													<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
												</div>
												<span className="font-12 text-muted">Common Contact</span>
												<ul className="list-unstyled team-info margin-0 pt-2">
													<li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
													<li><img src="../assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
													<li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-sm-12">
										<div className="card ">
											<div className="card-body">
												<div className="mb-3"> <img src="../assets/images/sm/avatar2.jpg" className="rounded-circle w100" alt="" /> </div>
												<div className="mb-2">
													<h5 className="mb-0">Andrew Patrick</h5>
													<p>Aalizeethomas@info.com</p>
													<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
												</div>
												<span className="font-12 text-muted">Common Contact</span>
												<ul className="list-unstyled team-info margin-0 pt-2">
													<li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
													<li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
													<li><img src="../assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
													<li><img src="../assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-sm-12">
										<div className="card ">
											<div className="card-body">
												<div className="mb-3"> <img src="../assets/images/sm/avatar3.jpg" className="rounded-circle w100" alt="" /> </div>
												<div className="mb-2">
													<h5 className="mb-0">Mary Schneider</h5>
													<p>Aalizeethomas@info.com</p>
													<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
												</div>
												<span className="font-12 text-muted">Common Contact</span>
												<ul className="list-unstyled team-info margin-0 pt-2">
													<li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-sm-12">
										<div className="card " >
											<div className="card-body">
												<div className="card-status bg-green"></div>
												<div className="mb-3"> <img src="../assets/images/sm/avatar4.jpg" className="rounded-circle w100" alt="" /> </div>
												<div className="mb-2">
													<h5 className="mb-0">Sean Black</h5>
													<p>Aalizeethomas@info.com</p>
													<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
												</div>
												<span className="font-12 text-muted">Common Contact</span>
												<ul className="list-unstyled team-info margin-0 pt-2">
													<li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
													<li><img src="../assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
													<li><img src="../assets/images/xs/avatar5.jpg" alt="Avatar" /></li>
													<li><img src="../assets/images/xs/avatar7.jpg" alt="Avatar" /></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-sm-12">
										<div className="card ">
											<div className="card-body">
												<div className="mb-3"> <img src="../assets/images/sm/avatar5.jpg" className="rounded-circle w100" alt="" /> </div>
												<div className="mb-2">
													<h5 className="mb-0">David Wallace</h5>
													<p>Aalizeethomas@info.com</p>
													<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
												</div>
												<span className="font-12 text-muted">Common Contact</span>
												<ul className="list-unstyled team-info margin-0 pt-2">
													<li><img src="../assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
													<li><img src="../assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-sm-12">
										<div className="card ">
											<div className="card-body">
												<div className="card-status bg-pink"></div>
												<div className="mb-3"> <img src="../assets/images/sm/avatar6.jpg" className="rounded-circle w100" alt="" /> </div>
												<div className="mb-2">
													<h5 className="mb-0">Andrew Patrick</h5>
													<p>Aalizeethomas@info.com</p>
													<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
												</div>
												<span className="font-12 text-muted">Common Contact</span>
												<ul className="list-unstyled team-info margin-0 pt-2">
													<li><img src="../assets/images/xs/avatar5.jpg" alt="Avatar" /></li>
													<li><img src="../assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
													<li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-sm-12">
										<div className="card ">
											<div className="card-body">
												<div className="mb-3"> <img src="../assets/images/sm/avatar2.jpg" className="rounded-circle w100" alt="" /> </div>
												<div className="mb-2">
													<h5 className="mb-0">Michelle Green</h5>
													<p>Aalizeethomas@info.com</p>
													<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
												</div>
												<span className="font-12 text-muted">Common Contact</span>
												<ul className="list-unstyled team-info margin-0 pt-2">
													<li><img src="../assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
													<li><img src="../assets/images/xs/avatar7.jpg" alt="Avatar" /></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-sm-12">
										<div className="card ">
											<div className="card-body">
												<div className="mb-3"> <img src="../assets/images/sm/avatar4.jpg" className="rounded-circle w100" alt="" /> </div>
												<div className="mb-2">
													<h5 className="mb-0">Mary Schneider</h5>
													<p>Aalizeethomas@info.com</p>
													<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
												</div>
												<span className="font-12 text-muted">Common Contact</span>
												<ul className="list-unstyled team-info margin-0 pt-2">
													<li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
													<li><img src="../assets/images/xs/avatar7.jpg" alt="Avatar" /></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</TabPane>
							<TabPane tabId={3} className={classnames(['fade show'])}>
								<div className="card">
									<div className="card-body">
										<div className="row clearfix">
											<div className="col-lg-4 col-md-12">
												<div className="form-group">
													<input type="text" className="form-control" placeholder="Enter Name" />
												</div>
											</div>
											<div className="col-lg-4 col-md-12">
												<div className="form-group">
													<input type="number" className="form-control" placeholder="Enter Number" />
												</div>
											</div>
											<div className="col-lg-4 col-md-12">
												<div className="form-group">
													<input type="email" className="form-control" placeholder="Enter Email" />
												</div>
											</div>
											<div className="col-lg-12 col-md-12">
												<div className="form-group">
													<textarea type="text" className="form-control" rows="4">Enter your Address</textarea>
												</div>
											</div>
											<div className="col-lg-12">
												<Dropzone />
											</div>
											<div className="col-lg-12 mt-3">
												<button type="submit" className="mr-1 btn btn-primary">Add</button>
												<button type="submit" className="btn btn-default">Cancel</button>
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
