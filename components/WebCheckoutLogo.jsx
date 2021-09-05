const WebCheckoutLogo = ({ logoName, width, height, top }) => {
	return (
		<>
			<img
				className="logo"
				src={`/images/${logoName}.png`}
				width={width}
				height={height}
				alt="Logo"
			/>
			<style jsx>{`
				.logo {
					position: absolute;
					top: ${top}px;
					left: calc(50% - 43px);
				}
			`}</style>
		</>
	)
}

export default WebCheckoutLogo
