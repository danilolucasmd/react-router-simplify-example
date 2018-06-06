import React, { PureComponent } from 'react';
import SideNav from 'components/SideNav';
import FirstPage from 'components/FirstPage';
import SecondPage from 'components/SecondPage';
import ThirdPage from 'components/ThirdPage';

export default class Pages extends PureComponent {
  static routes = [
    {
      path: '/first',
      exact: true,
      component: FirstPage,
      authenticWhen: false,
      redirect: '/second',
    },
    {
      path: '/second',
      exact: false,
      component: SecondPage,
      redirect: '/first',
    },
    {
      path: '/third',
      exact: true,
      component: ThirdPage,
      allowAnonymous: true,
    },
  ];
  
  render() {
    return (
      <SideNav />
    );
  }
}