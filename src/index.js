import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {DefaultRouteConfig} from './settings/RouteConfig';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DefaultRouteConfig />, document.getElementById('root'));
registerServiceWorker();
