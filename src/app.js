import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import "./styles/styles.scss";

import { ApiDashboardPage } from './components/ApiDashboardPage';

ReactDOM.render(<ApiDashboardPage />, document.querySelector('#app'));