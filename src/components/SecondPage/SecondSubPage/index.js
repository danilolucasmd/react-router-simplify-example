import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import LastPage from './LastPage';

const style = {
  ul: {},
  li: {
    display: 'inline',
    marginRight: '20px',
  },
};

export default class SecondSubPage extends PureComponent {
  static routes = [
    {
      path: '/last',
      exact: true,
      component: LastPage,
    },
  ];

  render() {
    return (
      <div>
        <h3>Second Sub Page</h3>
        
        <ul style={style.ul}>
          <li style={style.li}>
            <Link to='/second/second/last'>Last Page</Link>
          </li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}