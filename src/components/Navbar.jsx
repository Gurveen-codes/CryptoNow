import React, { useState, useEffect } from 'react'
import { Avatar, Typography, Button, Menu } from 'antd'
import {
	HomeOutlined,
	BulbOutlined,
	MoneyCollectOutlined,
	FundOutlined,
	MenuOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import logo from '../images/cryptocurrency.png'

const Navbar = () => {
	const [activeMenu, setActiveMenu] = useState(true)
	const [screenSize, setScreenSize] = useState(undefined)

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth)

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if (screenSize <= 800) {
			setActiveMenu(false)
		} else {
			setActiveMenu(true)
		}
	}, [screenSize])
	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar size="large" src={logo} />
				<Typography.Title level={2} className="logo">
					<Link to="/">CryptoNow</Link>
				</Typography.Title>
				<Button
					className="menu-control-container"
					onClick={() => setActiveMenu(!activeMenu)}
				>
					<MenuOutlined />
				</Button>
			</div>
			{activeMenu && (
				<Menu theme="dark">
					<Menu.Item icon={<HomeOutlined />} key={1}>
						<Link to="/">Home</Link>
					</Menu.Item>
					<Menu.Item icon={<FundOutlined />} key={2}>
						<Link to="/cryptocurrencies">Cryptocurrencies</Link>
					</Menu.Item>
					<Menu.Item icon={<MoneyCollectOutlined />} key={3}>
						<Link to="/exchanges">Exchanges</Link>
					</Menu.Item>
					<Menu.Item icon={<BulbOutlined />} key={4}>
						<Link to="/news">News</Link>
					</Menu.Item>
				</Menu>
			)}
		</div>
	)
}

export default Navbar
