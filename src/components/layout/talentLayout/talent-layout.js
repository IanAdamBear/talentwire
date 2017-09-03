import React from 'react';
import { Route } from 'react-router-dom';
import TalentListContainer from '../../containers/talentListContainer/talent-list-container'
import TalentProfileContainer from '../../containers/talentProfileContainer/talent-profile-container'

export default function(props) {
  return (
    <div >
      <TalentListContainer />
      <Route path='/talent/profile/:id' component={TalentProfileContainer}/>
    </div>
  );
}
