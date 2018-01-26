import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Menu, Row, Col } from 'antd';
import * as utils from '../utils';

export default class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
  }

  componentDidMount() {
  }

  render() {
    const { isMobile } = this.context;
    const menuMode = isMobile ? 'inline' : 'horizontal';
    const {
      location,
    } = this.props;
    const module = location.pathname.replace(/(^\/|\/$)/g, '').split('/').slice(0, -1).join('/');
    let activeMenuItem = module || 'home';
    if (activeMenuItem === 'components' || location.pathname === 'changelog') {
      activeMenuItem = 'docs/react';
    }
    const { locale } = this.context.intl;
    const isZhCN = locale === 'zh-CN';

    const headerClassName = classNames({
      clearfix: true,
    });

    const menu = [
      <Menu className="menu-site" mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
        <Menu.Item key="home">
          <Link to={utils.getLocalizedPathname('/', isZhCN)}>
            <FormattedMessage id="app.header.menu.home" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/react">
          <Link to={utils.getLocalizedPathname('/docs/react/introduce', isZhCN)}>
            <FormattedMessage id="app.header.menu.components" />
          </Link>
        </Menu.Item>
      </Menu>,
    ];

    return (
      <header id="header" className={headerClassName}>
        <Row>
          <Col xxl={4} xl={5} lg={5} md={6} sm={24} xs={24}>
            <Link to={utils.getLocalizedPathname('/', isZhCN)} id="logo">
              Maycur WEB
            </Link>
          </Col>
          <Col xxl={20} xl={19} lg={19} md={18} sm={0} xs={0}>
            {!isMobile && menu}
          </Col>
        </Row>
      </header>
    );
  }
}
