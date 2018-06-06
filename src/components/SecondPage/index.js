import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import FirstSubPage from './FirstSubPage';
import SecondSubPage from './SecondSubPage';

const style = {
  ul: {},
  li: {
    display: 'inline',
    marginRight: '20px',
  },
};

export default class SecondPage extends PureComponent {
  static routes = [
    {
      path: '/first',
      exact: true,
      component: FirstSubPage,
    },
    {
      path: '/second',
      exact: false,
      component: SecondSubPage,
    },
  ];

  render() {
    return (
      <div>
        <h2>Second Page</h2>

        <ul style={style.ul}>
          <li style={style.li}>
            <Link to='/second/first'>First Sub Page</Link>
          </li>
          <li style={style.li}>
            <Link to='/second/second'>Second Sub Page</Link>
          </li>
        </ul>
      </div>
    );
  }
}