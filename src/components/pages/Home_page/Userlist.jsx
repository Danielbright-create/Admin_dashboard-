import React from 'react'
import "./userlist.css";


const Userlist = () => {
      return (
      <div>
      
<div className="table-wrapper">
<p>Recent request for inspection</p>
<table className="fl-table">
        <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email Adress</th>
            <th>Title Of Property</th>
            <th>Date</th>
            <th>Time</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Ayoleyi Lurogho</td>
            <td>08102914133</td>
            <td>ayoleyilurogho@gmail.com</td>
            <td>spacious 2-BD apartment <br /> at Ikoyi,Burdillion</td>
            <td>11/12/2020</td>
            <td>10:10am</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jise ojo properties</td>
            <td>+23490877554</td>
            <td>admin@jideojo.com</td>
            <td>spacious 2-BD apartment <br /> at Ikoyi,Burdillion</td>
            <td>11/12/2020</td>
            <td>10:10am</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Adebimpe Omolaso</td>
            <td>09054366765</td>
            <td>adebimlaso@gmail.com</td>
            <td>spacious 2-BD apartment <br /> at Ikoyi,Burdillion</td>
            <td>11/12/2020</td>
            <td>10:10am</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Tammy Owoefie</td>
            <td>09102914133</td>
            <td>tammy@hfuuihruirjhngjh</td>
            <td>spacious 2-BD apartment <br /> at Ikoyi,Burdillion</td>
            <td>11/12/2020</td>
            <td>10:10am</td>
        </tr>
        </tbody>
        </table>
</div>

<div className="table-wrapper two">
<p>Recent request for Property</p>
<table className="fl-table">
        <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email Adress</th>
            <th>Property Type</th>
            <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Ayoleyi Lurogho</td>
            <td>08102914133</td>
            <td>ayoleyilurogho@gmail.com</td>
            <td>Reasidential</td>
            <td>11/12/2020</td>
            
        </tr>
        <tr>
            <td>2</td>
            <td>Jise ojo properties</td>
            <td>+23490877554</td>
            <td>admin@jideojo.com</td>
            <td>Commercial</td>
            <td>11/12/2020</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Adebimpe Omolaso</td>
            <td>09054366765</td>
            <td>adebimlaso@gmail.com</td>
            <td>land</td>
            <td>11/12/2020</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Tammy Owoefie</td>
            <td>09102914133</td>
            <td>tammy@hfuuihruirjhngjh</td>
            <td>Commercial</td>
            <td>11/12/2020</td>
        </tr>
        </tbody>
        </table>
</div>
        </div>
    )
}

export default Userlist

