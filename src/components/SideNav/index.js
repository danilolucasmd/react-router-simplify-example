import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

const style = {
  ul: {},
  li: {
    display: 'inline',
    marginRight: '20px',
  },
};

export default class SideNav extends PureComponent {
  render() {
    return (
      <ul style={style.ul}>
        <li style={style.li}>
          <Link to='/first'>First Page</Link>
        </li>
        <li style={style.li}>
          <Link to='/second'>Second Page</Link>
        </li>
        <li style={style.li}>
          <Link to='/third'>Third Page</Link>
        </li>
      </ul>
    );
  }
}