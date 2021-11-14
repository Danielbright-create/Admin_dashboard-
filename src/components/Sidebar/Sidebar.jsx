import React from 'react';
import "./Sidebar.css"
import { AccountCircle, Dashboard, WebAsset, DirectionsBus, ContactSupport, ReceiptOutlined, NotificationsOutlined, ExitToApp, MailOutline

} from '@material-ui/icons'; 

function Sidebar() {
    return (
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <div className="sidebarIcon">
                         
                            <AccountCircle className="MaterialIcons" />
                           
                             <h4>Real Explorer</h4>
                        </div>
                        <p className="sidebarTitle">
                            <ul className="sidebarList">
                                <li className="sidebarListItem active">
                                    <Dashboard className="MaterialIcon"/>
                                   <p> Dashboard </p> 
                                    </li>
                                <li className="sidebarListItem">
                                    <Dashboard className="MaterialIcon"/>
                                   <p>  Add property </p> 
                                    </li>
                                 <li className="sidebarListItem">
                                    <WebAsset className="MaterialIcon"/>
                                 <p>  Manage Property </p>  <span> <p>0</p> </span> 
                                    </li>
                                <li className="sidebarListItem">
                                    <AccountCircle className="MaterialIcon"/>
                                   <p>  Manage agent  </p> <span> <p>0</p> </span>   
                                    </li>
                                 <li className="sidebarListItem">
                                    <DirectionsBus className="MaterialIcon"/>
                                    <p> Manage account </p>  <span> <p>0</p> </span> 
                                    </li>
                                <li className="sidebarListItem">
                                    <AccountCircle className="MaterialIcon"/>
                                    <p> Manage staff </p>  <span> <p>0</p> </span> 
                                    </li> 
                                    <li className="sidebarListItem">
                                    <WebAsset className="MaterialIcon"/>
                                     <p> Manage property request </p>  <span> <p>0</p> </span> 
                                    </li> 
                                    <li className="sidebarListItem">
                                    <ContactSupport className="MaterialIcon"/>
                                   <p> Manage suscriber </p> <span> <p>0</p> </span> 
                                    </li>  

                                    <li className="sidebarListItem">
                                    <WebAsset className="MaterialIcon"/>
                                     <p> Manage inspection request </p>  <span> <p>0</p> </span> 
                                    </li> 

                                    <li className="sidebarListItem">
                                    <MailOutline className="MaterialIcon"/>
                                     <p> Message</p>  <span> <p>0</p> </span> 
                                    </li> 

                                    <li className="sidebarListItem">
                                    <ReceiptOutlined className="MaterialIcon"/>
                                   <p> Manage payment (Invoice) </p>
                                    </li>  
                                    <li className="sidebarListItem">
                                    <NotificationsOutlined className="MaterialIcon"/>
                                   <p> Notification </p> <span> <p>0</p> </span> 
                                    </li>  
                                    <li className="sidebarListItem">
                                    <AccountCircle className="MaterialIcon"/>
                                   <p> Profile </p>
                                    </li>  
                                    <li className="sidebarListItem">
                                    <ExitToApp className="MaterialIcon"/>
                                   <p> Logout</p>
                                    </li>  
                                    

                            </ul>
                        </p>
                    </div>
                </div>
            </div>
       
    )
}

export default Sidebar
