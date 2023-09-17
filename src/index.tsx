import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { HashRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/ksiegowi" element={<App />} />
			</Routes>
		</HashRouter>
	</React.StrictMode>
);
