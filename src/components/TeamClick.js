//import files & react component
import React, { Component } from 'react'
import TeamMember from './TeamMember'
import memberInfo from './MemberInfo'

class TeamClick extends Component {
    //builds
    constructor() {
        super()
        this.state = {
            memberInfo: memberInfo,
            members: [],
            counter:0,
        }
      this.clickEvent = this.clickEvent.bind(this)
    }
//methods
    clickEvent() {
        if (this.state.counter < this.state.memberInfo.length) {
            this.state.members.push(this.state.memberInfo[this.state.counter]);
            this.setState((prevState) => {
                return { counter: prevState.counter + 1 }
            });
          console.log(this.state.members)
            this.newMembers = this.state.members.map((member) => {
                return <TeamMember
                 key={member.id}
                 img={member.img}
                 name={member.name}
                 position={member.position}
                 phone={member.phone}
                 email={member.email}
                 website={member.website}
               />
           })
         
     }


    }
// print
    render() {
        return (
            <div className="row">
          
                <button className="btn btn-primary btn-lg btn-block"
                        onClick={this.clickEvent}>Click me!</button>
                   
                    {this.newMembers}
                    
            </div>
        )
    }
}
// export file
export default TeamClick
