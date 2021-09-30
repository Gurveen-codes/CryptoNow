import React from 'react'
import { Navbar } from './components'
import { Layout, Typography, Space } from 'antd'
import { Switch, Route, Link } from 'react-router-dom'

const App = () => {
	return (
		<div className="app">
			<Navbar className="navbar" />
			<div className="main">
				<Layout>
					<div className="routes">
						<Switch>
							<Route path="/" exact></Route>
							<Route path="/cryptocurrencies" exact></Route>
							<Route path="/crypto/:id" exact></Route>
							<Route path="/exchanges" exact></Route>
							<Route path="/news" exact></Route>
						</Switch>
					</div>
				</Layout>
				<div className="footer">
					<Typography.Title
						level={5}
						style={{ color: 'white', textAlign: 'center' }}
					>
						Copyright © {new Date().getFullYear()}
						<Link to="/">CryptoIdeas Inc.</Link> <br />
						All Rights Reserved.
					</Typography.Title>
					<Space>
						<Link to="/">Home</Link>
						<Link to="/exchanges">Exchanges</Link>
						<Link to="/news">News</Link>
					</Space>
				</div>
			</div>
		</div>
	)
}

export default App
