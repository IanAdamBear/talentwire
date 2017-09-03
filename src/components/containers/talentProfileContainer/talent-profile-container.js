import React, { Component } from 'react'
import TalentProfile from '../../view/talentProfile/talent-profile'

class TalentProfileContainer extends Component {
  constructor() {
   super();
   this.state = {
     profile: {
       id:1,
       name:'Ian Bear',
       skills: ['C#', 'JavaScript', 'CSS']
     }
   };
 }

  render() {
    return (
      <TalentProfile profile={this.state.profile} />
    );
  }
}

export default TalentProfileContainer;
