const WebCheckoutProgress = ({ percent = 0 }) => {
	return (
		<>
			<div className="wc-progress">
				<div className="wc-progress-bar"></div>
			</div>
			<style jsx>{`
				.wc-progress {
					position: fixed;
					left: 0;
					top: 0;
					width: 100%;
					height: 26px;
					background-color: #fdfdfd;
					z-index: 10;
				}
				.wc-progress-bar {
					position: absolute;
					width: 103px;
					height: 26px;
					background-color: #6f8797;
					transition: width 2s;
					width: ${percent}%;
				}
			`}</style>
		</>
	)
}

export default WebCheckoutProgress
