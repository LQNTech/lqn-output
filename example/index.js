import React from 'react';
import { render } from 'react-dom';

import WrappedApp from '../src';

render(<WrappedApp match={{ path: '/' }} />, document.getElementById('app'));
