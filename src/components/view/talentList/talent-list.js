import React from 'react';
import { Link } from 'react-router-dom';
import './talent-list.css'
var classNames = require('classnames');

export default function(props) {
  return (
    <div className="talent-list">
      {props.talentList.map(talent => {
        return (
          <div className={classNames('talent-item', {active: talent.isActive})}>
            <Link className="talent-item-link" to={'/talent/profile/' + talent.id}>{talent.name}</Link>
          </div>
        )
      })
      }
    </div>
  );
}
