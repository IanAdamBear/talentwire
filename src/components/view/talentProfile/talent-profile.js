import React from 'react';
import './talent-profile.css'

export default function(props) {
  return (
    <div className="talent-profile">
      <div>{props.profile.name}</div>
      <ul>{props.profile.skills.map(skill => { return (<li>{skill}</li>)})}</ul>            
    </div>
  );
}
