import React, { Component } from 'react'
import TalentList from '../../view/talentList/talent-list'

class TalentListContainer extends Component {
  constructor() {
   super();
   this.state = {
     talentList: [{ id:1, name:'Ian Bear', isActive:true}, { id:2, name:'Nicola Rodgers'}, { id:3, name:'Lucy Newton'}, { id:4, name:'Sapphire Sines'}],
   };
 }

  render() {
    return (
      <TalentList talentList={this.state.talentList} />
    );
  }
}

export default TalentListContainer;
