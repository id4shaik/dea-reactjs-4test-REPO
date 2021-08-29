import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Software Engineering" where="JNTU University" from="July 2006" to="Present"/>
            <Widecard title="SSLC | HSC" where="SBH Higher Secondary School" from="1998" to="1999"/>
            </div>
            )
        }
    }
    
export default Education
    