import React from 'react'
import { Avatar, Typography, Button, Menu } from 'antd'
import {
	HomeOutlined,
	BulbOutlined,
	MoneyCollectOutlined,
	FundOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import logo from '../images/cryptocurrency.png'

const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar size="large" src={logo} />
				<Typography.Title level={2} className="logo">
					<Link to="/">CryptoIdeas</Link>
				</Typography.Title>
				{/* <Button className='menu-control-container'></Button> */}
			</div>
			<Menu theme="dark">
				<Menu.Item icon={HomeOutlined}>
					<Link to="/">Home</Link>
				</Menu.Item>
				<Menu.Item icon={FundOutlined}>
					<Link to="/cryptocurrencies">Cryptocurrencies</Link>
				</Menu.Item>
				<Menu.Item icon={MoneyCollectOutlined}>
					<Link to="/exchanges">Exchanges</Link>
				</Menu.Item>
				<Menu.Item icon={BulbOutlined}>
					<Link to="/news">News</Link>
				</Menu.Item>
			</Menu>
		</div>
	)
}

export default Navbar
