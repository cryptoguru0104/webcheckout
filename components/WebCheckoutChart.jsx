const WebCheckoutChart = ({ chartName }) => {
	return (
		<>
			<div className="wc-chart-list">
				<img
					className="img-chart"
					src={`/images/${chartName}.png`}
					alt="WebCheckout Chart"
				/>
			</div>
			<style jsx>{`
				.wc-chart-list {
					padding-bottom: 138px;
				}
				.wc-chart-list .img-chart {
					max-width: 352px;
				}
			`}</style>
		</>
	)
}

export default WebCheckoutChart
