import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import { ConfigProvider } from 'antd'
import enUS from 'antd/lib/locale/en_US'

function App() {
	return (
		<ConfigProvider locale={enUS}>
			<Router>
				<Switch>
					<Route path='/auth'>
						<Auth />
					</Route>
					<Route path='/dashboard'>
						<Dashboard />
					</Route>
					<Route path='/'>
						<Auth />
					</Route>
				</Switch>
			</Router>
		</ConfigProvider>
	)
}

export default App
