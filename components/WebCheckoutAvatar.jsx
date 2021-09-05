const WebCheckoutAvatar = ({ name, children, width, height }) => (
	<>
		<img src={`/images/avatar/${name}`} width={width} height={height} />
		{children}
		<style jsx>{`
			img {
				border-radius: 50%;
			}
		`}</style>
	</>
)

export default WebCheckoutAvatar
