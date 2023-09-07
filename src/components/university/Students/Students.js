import React, { Component, useState } from "react";
import Profilecomponent from "../../common/profilecomponent";
import SweetAlert from "sweetalert2-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  TabContent,
  TabPane,
  Nav,
  NavLink,
  NavItem,
  Button,
  Alert,
  Table,
} from "reactstrap";
import classnames from "classnames";
import Dropzone from "../../common/DropzoneExample";

/* import the xlsx module */
import * as XLSX from "xlsx";

/* Package to download the CSV file */
import { CSVLink, CSVDownload } from "react-csv";

export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      show: false,
      /* Save the excel file in this */
      excelFile: null,
      /* If there is an error then save the error in type error */
      typeError: null,
      /* The data from excel file will be saved in excel data */
      excelData: null,
    };
  }
  render() {
    const { activeTab } = this.state;

    const csvData = [
      [
        " " , " " , " " , " " , "Assignments" , " " , " " , "Quizzes" , " " , " " , "Mid" , " " , "Final" , " " , " " , " " , " " , " " , " " , " " , " " , " " , " "
      ],
      [
        " " , " " , " " , "CLO-1" , "CLO-1" , "CLO-2" , "CLO-1" , "CLO-1" , "CLO-2" , "CLO-2" , "CLO-1" , "CLO-2" , "CLO-3" , "CLO-3" , " " , " " , " " , " " , " " , " " , " " , " " , " "
      ],
      [
        "#" , "Enrollment" , "Name" , "#1" , "#2" , "#3" , "#1" , "#2" , "#3" , "#4" , "Q1 & 2" , "Q1" , "Q2" , "Q3" , "CLO-1" , "CLO-2" , "CLO-3" , "PLO-1" , "PLO-2" , "PLO-3" , "Total" , " " , " "
      ],
      [
        " " , " " , " " , "5" , "5" , "10" , "2.5" , "2.5" , "2.5" , "2.5" , "20" , "15" , "15" , "20" , "35" , "30" , "35" , " " , " " , " " , " " , "100" , " "
      ],
      [
        "ROLL NO",
        "NAME",
        "Assignment 1",
        "Assignment 2",
        "Assignment 3",
        "Quiz 1",
        "Quiz 2",
        "Mids",
        "Final"
      ],
      ["A25", "Ken Smith"],
      ["A26", "Gerald K Smith"],
      ["A25", "Ken Smith"],
      ["A27", "Alice A Smith"],
      ["A17", "Ken Smith"],
      ["A11", "Corrine M Johnson"],
      ["A12", "Alan Johnson"],
      ["A23", "John Smith"],
    ];

    /* CSV file changes and update and show error if invalid format uploaded*/
    /* const [excelFile, setExcelFile] = useState(null)
    const [typeError, setTypeError] = useState(null) */

    /* submit state */
    /* const [excelData, setExcelData] = useState(null) */

    /* onChange event: When file is uploaded. This function is checking whether the uplaoded file is an excel file or not */
    const handleFileUpload = (e) => {
      let fileTypes = [
        "text/csv",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
      ];

      let selectedFile = e.target.files[0];

      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        // Set the error which was encountered in file uploading
        this.setState({
          typeError: null,
        });

        let reader = new FileReader();

        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          // Set the error which was encountered in file uploading
          this.setState({
            excelFile: e.target.result,
          });
        };
      } else {
        // Set the error which was encountered in file uploading
        this.setState({
          typeError: "Please select only excel file types",
          excelFile: null,
        });
      }
    };

    /*  */
    const handleSubmit = (e) => {
      e.preventDefault();

      if (this.state.excelFile !== null) {
        const workbook = XLSX.read(this.state.excelFile, { type: "buffer" });

        /* This will extract the name of the first excel sheet in the excel file */
        const workSheetName = workbook.SheetNames[0];

        /* This will retrieve the data of the sheet with the specified name */
        const workSheet = workbook.Sheets[workSheetName];

        /* This converts the excel data to JSON fromat */
        const data = XLSX.utils.sheet_to_json(workSheet);

        this.setState({
          excelData: data.slice(0, 10),
        });

        console.log("this.state.excelData");
        console.log(this.state.excelData);
      }
    };

    return (
      <>
        {/* <div className="section-body">
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center ">
							<div className="header-action">
								<h1 className="page-title">Students</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><a href>Ericsson</a></li>
									<li className="breadcrumb-item active" aria-current="page">Students</li>
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
										Profile
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
							</Nav>

						</div>
					</div>
				</div> */}
        <div className="section-body mt-4">
          <div className="container-fluid">
            <TabContent activeTab={activeTab}>
              <TabPane tabId={1} className={classnames(["fade show"])}>
                {/* <div className="card">
									<div className="card-body">
										<div className="row">
											<div className="col-lg-2 col-md-4 col-sm-6">
												<div className="input-group">
													<input type="text" className="form-control" placeholder="Roll No." />
												</div>
											</div>
											<div className="col-lg-2 col-md-4 col-sm-6">
												<div className="input-group">
													<input type="text" className="form-control" placeholder="Name" />
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<div className="input-group">
													<input type="text" className="form-control" placeholder="Department" />
												</div>
											</div>
											<div className="col-lg-2 col-md-4 col-sm-6">
												<div className="input-group">
													<DatePicker
														placeholderText="Admission Date"
														className="form-control"
													/>
												</div>
											</div>
											<div className="col-lg-2 col-md-4 col-sm-6">
												<a href className="btn btn-sm btn-primary btn-block" title="">Search</a>
											</div>
										</div>
									</div>
								</div> */}
                <div className="table-responsive card">
                  <table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
                    <thead>
                      <tr>
                        <th>Roll No.</th>
                        <th>Name</th>
                        {/* <th></th>
												<th>Department</th>
												<th>Email</th>
												<th>Phone</th>
												<th>Admission Date</th>
												<th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A25</td>
                        <td className="w60">
                          <img
                            className="avatar"
                            src="../assets/images/xs/avatar1.jpg"
                            alt=""
                          />
                        </td>
                        <td>
                          <span className="font-16">Ken Smith</span>
                        </td>
                        {/* <td>Science</td>
												<td>ken@gmail.com</td>
												<td>(417) 646-7483</td>
												<td>04 Jan, 2019</td>
												<td>
													<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
													<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
													<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
												</td> */}
                      </tr>
                      <tr>
                        <td>A26</td>
                        <td className="w60">
                          <img
                            className="avatar"
                            src="../assets/images/xs/avatar2.jpg"
                            alt=""
                          />
                        </td>
                        <td>
                          <span className="font-16">Gerald K Smith</span>
                        </td>
                        {/* <td>M.C.A.</td>
												<td>Gerald@gmail.com</td>
												<td>(154) 646-2486</td>
												<td>04 Jan, 2019</td>
												<td>
													<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
													<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
													<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
												</td> */}
                      </tr>
                      <tr>
                        <td>A25</td>
                        <td className="w60">
                          <img
                            className="avatar"
                            src="../assets/images/xs/avatar3.jpg"
                            alt=""
                          />
                        </td>
                        <td>
                          <span className="font-16">Ken Smith</span>
                        </td>
                        {/* <td>Mechanical</td>
												<td>ken@gmail.com</td>
												<td>(417) 646-8377</td>
												<td>04 Jan, 2019</td>
												<td>
													<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
													<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
													<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
												</td> */}
                      </tr>
                      <tr>
                        <td>A27</td>
                        <td className="w60">
                          <img
                            className="avatar"
                            src="../assets/images/xs/avatar4.jpg"
                            alt=""
                          />
                        </td>
                        <td>
                          <span className="font-16">Alice A Smith</span>
                        </td>
                        {/* <td>M.B.B.S.</td>
												<td>Patricia@gmail.com</td>
												<td>(753) 646-4931</td>
												<td>04 Jan, 2019</td>
												<td>
													<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
													<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
													<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
												</td> */}
                      </tr>
                      <tr>
                        <td>A17</td>
                        <td className="w60">
                          <img
                            className="avatar"
                            src="../assets/images/xs/avatar5.jpg"
                            alt=""
                          />
                        </td>
                        <td>
                          <span className="font-16">Ken Smith</span>
                        </td>
                        {/* <td>Arts</td>
												<td>ken@gmail.com</td>
												<td>(417) 646-7642</td>
												<td>04 Jan, 2019</td>
												<td>
													<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
													<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
													<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
												</td> */}
                      </tr>
                      <tr>
                        <td>A11</td>
                        <td className="w60">
                          <img
                            className="avatar"
                            src="../assets/images/xs/avatar6.jpg"
                            alt=""
                          />
                        </td>
                        <td>
                          <span className="font-16">Corrine M Johnson</span>
                        </td>
                        {/* <td>Mechanical</td>
												<td>Gladys@gmail.com</td>
												<td>(349) 646-8377</td>
												<td>04 Jan, 2019</td>
												<td>
													<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
													<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
													<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
												</td> */}
                      </tr>
                      <tr>
                        <td>A12</td>
                        <td className="w60">
                          <img
                            className="avatar"
                            src="../assets/images/xs/avatar7.jpg"
                            alt=""
                          />
                        </td>
                        <td>
                          <span className="font-16">Alan Johnson</span>
                        </td>
                        {/* <td>Music</td>
												<td>ken@gmail.com</td>
												<td>(648) 646-8523</td>
												<td>04 Jan, 2019</td>
												<td>
													<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
													<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
													<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
												</td> */}
                      </tr>
                      <tr>
                        <td>A23</td>
                        <td className="w60">
                          <img
                            className="avatar"
                            src="../assets/images/xs/avatar8.jpg"
                            alt=""
                          />
                        </td>
                        <td>
                          <span className="font-16">John Smith</span>
                        </td>
                        {/* <td>Civil</td>
												<td>Corrine@gmail.com</td>
												<td>(417) 646-7845</td>
												<td>04 Jan, 2019</td>
												<td>
													<button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
													<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
													<button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
												</td> */}
                      </tr>
                    </tbody>
                  </table>

                  {/* This link or button will download the CSV file of students */}
                  <CSVLink data={csvData}>
                    <Button color="success" className="mt-5">
                      Download Students Data
                    </Button>
                  </CSVLink>

                  {/* This form is used to allow the user to upload the excel file */}
                  <form
                    className="form-group custom-form"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="file"
                      className="form-control mt-5"
                      required
                      onChange={handleFileUpload}
                    />
                    <Button color="success" className="">
                      Upload Students Data
                    </Button>
                    {this.state.typeError && (
                      <>
                        <Alert color="danger">{this.state.typeError}</Alert>
                      </>
                    )}
                  </form>

                  {/* All the excel data will be shared in this Table */}
                  <div>
                    {this.state.excelData ? (
                      <div>
                        <Table>
                          <thead>
                            <tr>
                              {Object.keys(this.state.excelData[0]).map(
                                (key) => (
                                  <th key={key}>{key}</th>
                                )
                              )}
                            </tr>
                          </thead>

                          <tbody>
                            {this.state.excelData.map(
                              (indiviualExcelData, index) => (
                                <tr key={index}>
                                  {Object.keys(indiviualExcelData).map(
                                    (key) => (
                                      <td key={key}>
                                        {indiviualExcelData[key]}
                                      </td>
                                    )
                                  )}
                                </tr>
                              )
                            )}
                          </tbody>
                        </Table>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  {/*  */}

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
              <TabPane tabId={2} className={classnames(["fade show"])}>
                <Profilecomponent />
              </TabPane>
              <TabPane tabId={3} className={classnames(["fade show"])}>
                <div className="row clearfix">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Basic Information</h3>
                        <div className="card-options ">
                          <a
                            href
                            className="card-options-collapse"
                            data-toggle="card-collapse"
                          >
                            <i className="fe fe-chevron-up"></i>
                          </a>
                          <a
                            href
                            className="card-options-remove"
                            data-toggle="card-remove"
                          >
                            <i className="fe fe-x"></i>
                          </a>
                        </div>
                      </div>
                      <form className="card-body">
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            First Name <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter First name"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Last Name <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Last name"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Roll No <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Email
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Registration Date{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-9">
                            <DatePicker className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Class <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control input-height"
                              name="department"
                            >
                              <option value="">Select...</option>
                              <option value="Category 1">Computer</option>
                              <option value="Category 2">Mechanical</option>
                              <option value="Category 3">Mathematics</option>
                              <option value="Category 3">Commerce</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Gender <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control input-height"
                              name="gender"
                            >
                              <option value="">Select...</option>
                              <option value="Category 1">Male</option>
                              <option value="Category 2">Female</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Mobile No. <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Parents Name <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Parents Mobile No.{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Date Of Birth <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Address <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Profile Picture
                          </label>
                          <div className="col-md-9">
                            <Dropzone />
                            <small
                              id="fileHelp"
                              className="form-text text-muted"
                            >
                              This is some placeholder block-level help text for
                              the above input. It's a bit lighter and easily
                              wraps to a new line.
                            </small>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Account Information</h3>
                        <div className="card-options ">
                          <a
                            href
                            className="card-options-collapse"
                            data-toggle="card-collapse"
                          >
                            <i className="fe fe-chevron-up"></i>
                          </a>
                          <a
                            href
                            className="card-options-remove"
                            data-toggle="card-remove"
                          >
                            <i className="fe fe-x"></i>
                          </a>
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
                            <button
                              type="submit"
                              className="mr-1 btn btn-primary"
                            >
                              Submit
                            </button>
                            <button
                              type="submit"
                              className="btn btn-outline-secondary"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Account Information</h3>
                        <div className="card-options ">
                          <a
                            href
                            className="card-options-collapse"
                            data-toggle="card-collapse"
                          >
                            <i className="fe fe-chevron-up"></i>
                          </a>
                          <a
                            href
                            className="card-options-remove"
                            data-toggle="card-remove"
                          >
                            <i className="fe fe-x"></i>
                          </a>
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
                        <button type="submit" className="mr-1 btn btn-primary">
                          Submit
                        </button>
                        <button
                          type="submit"
                          className="btn btn-outline-secondary"
                        >
                          Cancel
                        </button>
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
