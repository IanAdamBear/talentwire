import React from 'react';
import { Route, Switch } from 'react-router-dom'
import TalentLayout from './components/layout/talentLayout/talent-layout'
import SkillsLayout from './components/layout/skillsLayout/skills-layout'


export default function() {
  return (
    <Switch>
        <Route path='/talent' component={TalentLayout} />
        <Route path='/skills' component={SkillsLayout} />
    </Switch>
  )
}
