import React from 'react';
import "./Topbar.css";
import logo from '../../images/logo.svg';
import { NotificationsNone, Chat, Person, ArrowDropDown } from '@material-ui/icons';



function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                   <img src={logo} alt="" />
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer"> <span> Notifications </span>
                        <NotificationsNone />
                        <span className="topIconBadge">
                            
                        </span>
                    </div>
                    <div className="topbarIconContainer"> <span>Messages</span> 
                        <Chat />
                        <span className="topIconBadge">
                            1
                        </span>
                    </div>
                    <div className="topbarIconContainer"> <ArrowDropDown /> <span> Ayoleyi </span>
                     <Person /> 
                    
                    </div>
                   
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
