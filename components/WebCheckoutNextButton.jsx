const WebCheckoutNextButton = ({ onClick, goal = null, children }) => {
	return (
		<>
			<button
				type="button"
				className="wc-option-item wc-btn-next"
				onClick={onClick}
				disabled={!goal}
			>
				{children}
			</button>
			<style jsx>{`
				.wc-btn-next {
					display: block;
					height: 55px;
					padding: 0;
					background-color: #06b89d;
					opacity: 1;
					text-align: center;
					font-size: 16px;
					letter-spacing: 0.2px;
					color: #fdfdfd;
					box-shadow: none;
				}
				.wc-btn-next:hover:not([disabled]) {
					background-color: #06b89d;
					opacity: 0.7;
				}
				.wc-btn-next[disabled] {
					background-color: #06b89d;
					opacity: 0.5;
				}
				@media (max-width: 559px) {
					.wc-option-item.wc-btn-next {
						padding-left: 0;
					}
				}
			`}</style>
		</>
	)
}

export default WebCheckoutNextButton
