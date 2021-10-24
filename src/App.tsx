import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import { ConfigProvider } from 'antd'
import enUS from 'antd/lib/locale/en_US'
import { PreviewSection } from './components/PreviewSection/PreviewSection'

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
						<PreviewSection/>
					</Route>
				</Switch>
			</Router>
		</ConfigProvider>
	)
}

export default App
