import React from 'react'
import millify from 'millify'
import { Collapse, Row, Col, Typography, Avatar } from 'antd'
import HTMLReactParser from 'html-react-parser'

import { useGetExchangesQuery } from '../services/cryptoApi'
import Loader from './Loader'

const { Text, Title } = Typography
const { Panel } = Collapse

const Exchanges = () => {
	const { data, isFetching } = useGetExchangesQuery()
	const exchangesList = data?.data?.exchanges

	if (isFetching) return <Loader />

	return (
		<>
			<Title level={2}>Top Exchanges</Title>
			<Row className="exchanges-label">
				<Col span={9}>Exchanges</Col>
				<Col span={5}>24h Trade Volume</Col>
				<Col span={5}>Markets</Col>
				<Col span={5}>Change</Col>
			</Row>
			<Row>
				{exchangesList.map((exchange) => (
					<Col span={24} key={exchange.id}>
						<Collapse>
							<Panel
								key={exchange.id}
								showArrow={false}
								header={
									<Row key={exchange.id}>
										<Col span={9}>
											<Text>
												<strong>{exchange.rank}.</strong>
											</Text>
											<Avatar
												className="exchange-image"
												src={exchange.iconUrl}
											/>
											<Text>
												<strong>{exchange.name}</strong>
											</Text>
										</Col>
										<Col span={5}>${millify(exchange.volume)}</Col>
										<Col span={5}>{millify(exchange.numberOfMarkets)}</Col>
										<Col span={5}>{millify(exchange.marketShare)}%</Col>
									</Row>
								}
							>
								{HTMLReactParser(
									exchange.description || 'No description available'
								)}
							</Panel>
						</Collapse>
					</Col>
				))}
			</Row>
		</>
	)
}

export default Exchanges
