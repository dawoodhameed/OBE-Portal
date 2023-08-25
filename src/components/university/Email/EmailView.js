import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EmailView extends Component {
	render() {
		return (
			<>
				<div className="section-body">
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center ">
							<div className="header-action">
								<h1 className="page-title">Email Veiw</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><a href>App</a></li>
									<li className="breadcrumb-item"><Link to="email">Inbox</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Email Veiw</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div className="section-body mt-4">
					<div className="container-fluid">
						<div className="row row-deck">
							<div className="col-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title"><Link to="/email"><i className="fa fa-arrow-left"></i></Link> Back</h3>
										<div className="card-options">
											<a href><i className="fe fe-star"></i></a>
											<a href><i className="fe fe-inbox"></i></a>
											<a href><i className="fe fe-trash"></i></a>
											<a href className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
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
									<div className="card-body detail">
										<div className="detail-header">
											<div className="media">
												<div className="float-left">
													<div className="mr-3"><img src="../assets/images/xs/avatar1.jpg" alt="" /></div>
												</div>
												<div className="media-body">
													<p className="mb-0"><strong className="text-muted mr-1">From:</strong><a href>info@gmail.com</a><span className="text-muted text-sm float-right">12:48, 23.06.2018</span></p>
													<p className="mb-0"><strong className="text-muted mr-1">To:</strong>Me <small className="float-right"><i className="fe fe-paperclip mr-1"></i>(2 files, 89.2 KB)</small></p>
												</div>
											</div>
										</div>
										<div className="mail-cnt mt-3">
											<p>Hello <strong>Marshall Nichols</strong>,</p><br />
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
											<ul>
												<li>standard dummy text ever since the 1500s, when an unknown printer</li>
												<li>Lorem Ipsum has been the industry's standard dummy</li>
											</ul>
											<p>printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
											<br />
											<div className="file_folder">
												<a href className="mr-1">
													<div className="icon">
														<i className="fa fa-file-excel-o text-success"></i>
													</div>
													<div className="file-name">
														<p className="mb-0 text-muted">Report2017.xls</p>
														<small>Size: 68KB</small>
													</div>
												</a>
												<a href className="mr-1">
													<div className="icon">
														<i className="fa fa-file-word-o text-primary"></i>
													</div>
													<div className="file-name">
														<p className="mb-0 text-muted">Report2017.doc</p>
														<small>Size: 68KB</small>
													</div>
												</a>
												<a href>
													<div className="icon">
														<i className="fa fa-file-pdf-o text-danger"></i>
													</div>
													<div className="file-name">
														<p className="mb-0 text-muted">Report2017.pdf</p>
														<small>Size: 68KB</small>
													</div>
												</a>
											</div>

											<p>Thank youm,<br /><strong>Wendy Abbott</strong></p>
											<hr />
											<strong>Click here to</strong>
											<Link to="compose">Reply</Link> or
                                    <Link to="compose">Forward</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
