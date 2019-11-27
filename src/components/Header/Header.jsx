import React from 'react';
import { Header as LQNHeader } from 'lqn-components';
import { Dropdown, Menu, Icon } from 'antd';

import { User } from './headerStyles';

const Header = ({ user, ...props }) => {
  return (
    <LQNHeader {...props}>
      <User>
        {user && (
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="open">
                  <a href="/dashboard">Mis solicitudes</a>
                </Menu.Item>
                <Menu.Item key="close">
                  <a href="/logout">Cerrar sesión</a>
                </Menu.Item>
              </Menu>
            }
            trigger={['click']}
          >
            <a>
              <Icon type="user-o" style={{ color: '#ff2e63' }} />{' '}
              {user.fullName} <Icon type="down" style={{ color: '#ff2e63' }} />
            </a>
          </Dropdown>
        )}
      </User>
    </LQNHeader>
  );
};

export default Header;
