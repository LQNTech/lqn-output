import React from 'react';
import { Header as LQNHeader } from 'lqn-components';
import { Dropdown, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { me } from './headerQuery';

import { User } from './headerStyles';

const Header = () => {
  const { loading, data } = useQuery(me);
  if (loading) return null;

  const user = data ? data.user : null;

  return (
    <LQNHeader>
      <User>
        {user && (
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="open">
                  <Link to="/dashboard">Mis solicitudes</Link>
                </Menu.Item>
                <Menu.Item key="close">
                  <Link to="/logout">Cerrar sesión</Link>
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
