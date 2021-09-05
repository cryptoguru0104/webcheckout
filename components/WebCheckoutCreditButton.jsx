import CreditImage from 'assets/icons/credit.svg'

const WebCheckoutCreditButton = ({ onClick, children }) => {
	return (
		<>
			<button
				type="button"
				className="wc-option-item wc-btn-next"
				onClick={onClick}
			>
				<CreditImage />
				{children}
			</button>
			<style jsx>{`
				.wc-btn-next {
					background-color: #f9f2ea;
					color: #000;
					border: 2px solid #000;
					padding: 8px 0;
					font-size: 16px;
					margin-bottom: 22px;
					justify-content: center;
					align-items: center;
				}

				.wc-btn-next:hover {
					background-color: #ccc !important;
				}
			`}</style>
		</>
	)
}

export default WebCheckoutCreditButton
