import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'
import millify from 'millify'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'

const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100

	const [searchTerm, setSearchTerm] = useState('')
	const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
	const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

	useEffect(() => {
		const filteredData = cryptosList?.data?.coins.filter((coin) =>
			coin.name.toLowerCase().includes(searchTerm.toLowerCase())
		)

		setCryptos(filteredData)
	}, [cryptosList, searchTerm])

	if (isFetching) return <Loader />
	return (
		<>
			{!simplified && (
				<div className="search-crypto-container">
					<Typography.Title level={2}>Top Cryptocurrencies</Typography.Title>
					<div className="search-crypto">
						<Input
							placeholder="Search Cryptocurrency"
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
				</div>
			)}
			<Row gutter={[32, 32]} className="crypto-card-container">
				{cryptos?.map((currency) => (
					<Col className="crypto-card" key={currency.id} xs={24} sm={12} lg={6}>
						<Link to={`/crypto/${currency.id}`}>
							<Card
								title={`${currency.rank}. ${currency.name}`}
								extra={
									<img
										className="crypto-image"
										src={currency.iconUrl}
										alt={currency.name}
									/>
								}
								hoverable
							>
								<p>Price: $ {millify(currency.price)}</p>
								<p>Market Cap: $ {millify(currency.marketCap)}</p>
								<p>Daily Change: {currency.change}%</p>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</>
	)
}

export default Cryptocurrencies
