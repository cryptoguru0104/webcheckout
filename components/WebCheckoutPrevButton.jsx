import PrevImage from 'assets/icons/prev-icon.svg'

const WebCheckoutPrevButton = ({ onClick }) => {
	return (
		<>
			<button type="button" className="wc-btn-prev" onClick={onClick}>
				<PrevImage className="wc-prev-icon" />
			</button>
			<style jsx>{`
				.wc-btn-prev {
					position: absolute;
					width: 50px;
					height: 50px;
					top: -50px;
					left: -173.7px;
					padding: 14.3px 15.7px;
					border-radius: 100px;
					background-color: #f6f6f6;
					box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.06);
				}
				.wc-btn-prev:hover {
					background-color: #eee;
					cursor: pointer;
				}
				.wc-prev-icon {
					width: 21.4px;
					height: 21.4px;
				}
				@media (max-width: 991px) {
					.wc-btn-prev {
						left: 0;
					}
				}
			`}</style>
		</>
	)
}

export default WebCheckoutPrevButton
