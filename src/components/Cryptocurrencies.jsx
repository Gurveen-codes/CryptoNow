import React, { useState } from 'react'
import { Card, Row, Col, Input } from 'antd'
import { Link } from 'react-router-dom'
import millify from 'millify'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = () => {
	const { data: cryptosList, isFetching } = useGetCryptosQuery()
	const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
	return (
		<>
			<Row gutter={[32, 32]} className="crypto-card-container">
				{cryptos.map((currency) => (
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
