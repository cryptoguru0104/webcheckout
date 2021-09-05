const WebCheckoutPayButton = ({ onClick, children }) => {
	return (
		<>
			<button
				type="button"
				className="wc-option-item wc-btn-next"
				onClick={onClick}
			>
				{children}
			</button>
			<style jsx>{`
				.wc-btn-next {
					background-color: #222;
					padding: 14px 0;
					justify-content: center;
					margin-bottom: 18px;
					align-items: center;
				}

				.wc-btn-next:hover {
					opacity: 0.7;
				}
			`}</style>
		</>
	)
}

export default WebCheckoutPayButton
