import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    notificationMenuAction,
    languageMenuAction,
    authMenuAction,
    pagesMenuAction, mailMenuAction, profileMenuAction
} from '../../actions/settingsAction';

class Header extends Component {
    UNSAFE_componentWillMount() {
        document.addEventListener("mousedown", this.hideLeftSidebarProxy, false);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.hideLeftSidebarProxy, false);
    }
    hideLeftSidebarProxy = e => {
        const { authMenuAction, pagesMenuAction, languageMenuAction, mailMenuAction,
            notificationMenuAction } = this.props
        if (this.leftSidebar.contains(e.target)) {
            authMenuAction(false)
            pagesMenuAction(false)
            languageMenuAction(false)
            mailMenuAction(false)
            notificationMenuAction(false)
            return;
        }
    };
    render() {
        const { authMenu, authMenuAction, fixNavbar, darkHeader,
            languageMenu, languageMenuAction, notificationMenu, notificationMenuAction,
            pagesMenu, mailMenu, profileMenu,
            pagesMenuAction, mailMenuAction, profileMenuAction,
            boxShadow
        } = this.props;
        return (
            // < !--Start Page header-- >
            <div
                ref={leftSidebar => {
                    this.leftSidebar = leftSidebar;
                }}
                className={`section-body ${fixNavbar ? "sticky-top" : ""} ${darkHeader ? "top_dark" : ""}`}
                id="page_top">
                <div className="container-fluid">
                    <div className="page-header">
                        <div className="left">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="What you want to find" />
                                <div className="input-group-append">
                                    <button className={`btn btn-outline-secondary${boxShadow ? ' box_shadow' : ''}`} type="button">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <ul className="nav nav-pills">
                                {/* <li className="nav-item dropdown" onBlur={() => this.setState({ pagesMenu: false })}> */}
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle" onClick={() => pagesMenuAction(!pagesMenu)}>Pages</span>
                                    <div className={`dropdown-menu${pagesMenu ? ' show' : ''}`}>
                                        <Link className="dropdown-item" to="/pageEmpty">Empty page</Link>
                                        <Link className="dropdown-item" to="/pageProfile">Profile</Link>
                                        <Link className="dropdown-item" to="/pageSearch">Search Results</Link>
                                        <Link className="dropdown-item" to="/pageTimeline">Timeline</Link>
                                        <Link className="dropdown-item" to="/pageInvoices">Invoices</Link>
                                        <Link className="dropdown-item" to="/pagePricing">Pricing</Link>
                                    </div>
                                </li>
                                {/* <li className="nav-item dropdown" onBlur={() => this.setState({ authMenu: false })}> */}
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle" onClick={() => authMenuAction(!authMenu)} >Auth</span>
                                    <div className={`dropdown-menu${authMenu ? ' show' : ''}`}>
                                        <Link className="dropdown-item" to="/login">Login</Link>
                                        <Link className="dropdown-item" to="/signup">Register</Link>
                                        <Link className="dropdown-item" to="/forgotpassword">Forgot password</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/notfound">404 error</Link>
                                        <Link className="dropdown-item" to="/internalserver">500 error</Link>
                                    </div>
                                </li>
                            </ul>
                            <div className="notification d-flex">
                                <div className={`dropdown d-flex${languageMenu ? ' show' : ''}`}>
                                    <span className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" onClick={() => languageMenuAction(!languageMenu)}><i className="fa fa-language"></i></span>
                                    <div className={`dropdown-menu dropdown-menu-right dropdown-menu-arrow${languageMenu ? ' show dLang' : ''}`}>
                                        <span className="dropdown-item" >
                                            <img className="w20 mr-2" src="../assets/images/flags/us.svg" alt="avatar" />English
											</span>
                                        <div className="dropdown-divider"></div>
                                        <span className="dropdown-item" >
                                            <img className="w20 mr-2" src="../assets/images/flags/es.svg" alt="avatar" />Spanish
											</span>
                                        <span className="dropdown-item" >
                                            <img className="w20 mr-2" src="../assets/images/flags/jp.svg" alt="avatar" />japanese
											</span>
                                        <span className="dropdown-item" >
                                            <img className="w20 mr-2" src="../assets/images/flags/bl.svg" alt="avatar" />France
											</span>
                                    </div>
                                </div>
                                <div className={`dropdown d-flex${mailMenu ? ' show' : ''}`}>
                                    <span className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" onClick={() => mailMenuAction(!mailMenu)}><i className="fa fa-envelope"></i>
                                        <span className="badge badge-success nav-unread"></span>
                                    </span>
                                    <div className={`dropdown-menu dropdown-menu-right dropdown-menu-arrow${mailMenu ? ' show dMail' : ''}`}>
                                        <ul className="right_chat list-unstyled w350 p-0">
                                            <li className="online">
                                                <a href="/" className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt="avatar" />
                                                    <div className="media-body">
                                                        <span className="name">Donald Gardner</span>
                                                        <div className="message">It is a long established fact that a reader
                                                        </div>
                                                        <small>11 mins ago</small>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="online">
                                                <a href="/" className="media">
                                                    <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt="avatar" />
                                                    <div className="media-body">
                                                        <span className="name">Wendy Keen</span>
                                                        <div className="message">There are many variations of passages of
                                                            Lorem Ipsum</div>
                                                        <small>18 mins ago</small>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="offline">
                                                <a href="/" className="media">
                                                    <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt="avatar" />
                                                    <div className="media-body">
                                                        <span className="name">Matt Rosales</span>
                                                        <div className="message">Contrary to popular belief, Lorem Ipsum is
                                                            not simply</div>
                                                        <small>27 mins ago</small>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="online">
                                                <a href="/" className="media">
                                                    <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt="avatar" />
                                                    <div className="media-body">
                                                        <span className="name">Phillip Smith</span>
                                                        <div className="message">It has roots in a piece of classical Latin
                                                            literature from 45 BC</div>
                                                        <small>33 mins ago</small>
                                                        <span className="badge badge-outline status"></span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="dropdown-divider"></div>
                                        <a href="/"
                                            className="dropdown-item text-center text-muted-dark readall">Mark all as
                                            read</a>
                                    </div>
                                </div>
                                <div className={`dropdown d-flex${notificationMenu ? ' show' : ''}`}>
                                    <span className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" onClick={() => notificationMenuAction(!notificationMenu)}><i className="fa fa-bell"></i><span
                                        className="badge badge-primary nav-unread"></span></span>
                                    <div className={`dropdown-menu dropdown-menu-right dropdown-menu-arrow${notificationMenu ? ' show dNoti' : ''}`}>
                                        <ul className="list-unstyled feeds_widget">
                                            <li>
                                                <div className="feeds-left">
                                                    <span className="avatar avatar-blue"><i className="fa fa-check"></i></span>
                                                </div>
                                                <div className="feeds-body ml-3">
                                                    <p className="text-muted mb-0">Campaign <strong
                                                        className="text-blue font-weight-bold">Holiday</strong> is
                                                        nearly reach budget limit.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="feeds-left">
                                                    <span className="avatar avatar-green"><i className="fa fa-user"></i></span>
                                                </div>
                                                <div className="feeds-body ml-3">
                                                    <p className="text-muted mb-0">New admission <strong
                                                        className="text-green font-weight-bold">32</strong> in computer
                                                        department.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="feeds-left">
                                                    <span className="avatar avatar-red"><i className="fa fa-info"></i></span>
                                                </div>
                                                <div className="feeds-body ml-3">
                                                    <p className="text-muted mb-0">6th sem result <strong
                                                        className="text-red font-weight-bold">67%</strong> in computer
                                                        department.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="feeds-left">
                                                    <span className="avatar avatar-azure"><i
                                                        className="fa fa-thumbs-o-up"></i></span>
                                                </div>
                                                <div className="feeds-body ml-3">
                                                    <p className="text-muted mb-0">New Feedback <strong
                                                        className="text-azure font-weight-bold">53</strong> for
                                                        university assessment.</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="dropdown-divider"></div>
                                        <span
                                            className="dropdown-item text-center text-muted-dark readall">Mark all as
                                            read</span>
                                    </div>
                                </div>
                                <div className={`dropdown d-flex${profileMenu ? ' show' : ''}`} >
                                    <span className="chip ml-3" onClick={() => profileMenuAction(!profileMenu)}>
                                        <span className="avatar"
                                            style={{ backgroundImage: "url(../assets/images/xs/avatar5.jpg)" }}></span>
                                        George</span>
                                    <div className={`dropdown-menu dropdown-menu-right dropdown-menu-arrow${profileMenu ? ' show dProfile' : ''}`}>
                                        <Link className="dropdown-item" to="/pageProfile"><i
                                            className="dropdown-icon fe fe-user"></i> Profile</Link>
                                        <Link className="dropdown-item" to="/setting"><i
                                            className="dropdown-icon fe fe-settings"></i> Settings</Link>
                                        <Link className="dropdown-item" to="/email"><span className="float-right"><span
                                            className="badge badge-primary">6</span></span><i
                                                className="dropdown-icon fe fe-mail"></i> Inbox</Link>
                                        <span className="dropdown-item" ><i
                                            className="dropdown-icon fe fe-send"></i> Message</span>
                                        <div className="dropdown-divider"></div>
                                        <span className="dropdown-item" ><i
                                            className="dropdown-icon fe fe-help-circle"></i> Need help?</span>
                                        <Link className="dropdown-item" to="/login"><i
                                            className="dropdown-icon fe fe-log-out"></i> Sign out</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
const mapStateToProps = state => ({
    boxShadow: state.settings.isBoxShadow,
    profileMenu: state.settings.isProfileMenu,
    pagesMenu: state.settings.isPagesMenu,
    mailMenu: state.settings.isMailMenu,
    languageMenu: state.settings.isLanguageMenu,
    authMenu: state.settings.isAuthMenu,
    fixNavbar: state.settings.isFixNavbar,
    darkHeader: state.settings.isDarkHeader,
    notificationMenu: state.settings.isNotificationMenu
})

const mapDispatchToProps = dispatch => ({
    authMenuAction: (e) => dispatch(authMenuAction(e)),
    notificationMenuAction: (e) => dispatch(notificationMenuAction(e)),
    languageMenuAction: (e) => dispatch(languageMenuAction(e)),
    mailMenuAction: (e) => dispatch(mailMenuAction(e)),
    profileMenuAction: (e) => dispatch(profileMenuAction(e)),
    pagesMenuAction: (e) => dispatch(pagesMenuAction(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);