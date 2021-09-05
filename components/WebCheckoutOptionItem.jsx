const WebCheckoutOptionItem = ({
	className = null,
	selected,
	children,
	onClick = null,
}) => (
	<button
		type="button"
		className={`wc-option-item ${selected ? 'selected' : ''} ${
			className ? className : ''
		}`}
		onClick={onClick}
	>
		{children}
		<style jsx>{`
			.wc-avatar-item {
				border-radius: 10px;
				padding: 17px 0 16px 19px;
				margin-bottom: 8px;
			}
		`}</style>
	</button>
)

export default WebCheckoutOptionItem
