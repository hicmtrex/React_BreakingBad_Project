import React, { Component } from 'react';
import '../style.css'
 
class TeamMember extends Component{

    render() {
        return (
            <div className="col-md-4 col-sm-6">
            <div className="card m-2" style={{borderColor: this.props.website ? '' : 'red'}}>
                <div className="card-header">
                    <img style={{maxWidth: '100%'}} src={this.props.img} alt={this.props.name} />
                </div>
                <div className="card-body">
                    <h2>{this.props.name}</h2>
                    <h5>{this.props.position}</h5>
                    <div>{this.props.phone}</div>
                    <div>{this.props.email}</div>
                    <div>{this.props.website}</div>
                </div>
            </div>
        </div>
        )
    }
}
export default TeamMember;