import WebCheckoutRatingBar from './WebCheckoutRatingBar'

const WebCheckoutReviewItem = ({ rating, author, children }) => (
	<>
		<div className="wc-review-item">
			<WebCheckoutRatingBar count={rating} />
			{children}
			<h3>{author}</h3>
		</div>
		<style jsx>{`
			.wc-review-item {
				padding: 8px 24px 8px 12px;
				border-radius: 10px;
				box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.06);
				background-color: #fffaf5;
				text-align: left;
				margin-bottom: 9px;
				font-size: 12px;
				font-weight: 500;
				color: #6f8797;
			}
			.wc-review-item > h3 {
				font-size: 12px;
				font-weight: 900;
				letter-spacing: -0.2px;
				padding-top: 3px;
				color: #31556f;
			}
		`}</style>
	</>
)

export default WebCheckoutReviewItem
