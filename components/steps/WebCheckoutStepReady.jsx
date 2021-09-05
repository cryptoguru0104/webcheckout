import router from 'next/router'
import WebCheckoutPrevButton from 'components/WebCheckoutPrevButton'
import WebCheckoutNextButton from 'components/WebCheckoutNextButton'
import WebCheckoutLogo from 'components/WebCheckoutLogo'
import WebCheckoutChart from 'components/WebCheckoutChart'

const WebCheckoutStepReady = () => {
	const nextStep = () => {
		router.push('/premium')
	}
	const prevStep = () => {
		router.push('/love-bloom')
	}

	return (
		<>
			<WebCheckoutLogo
				logoName={'Bloom Logo'}
				width={89}
				height={38}
				top={68}
			/>
			<div className="wc-step">
				<WebCheckoutPrevButton onClick={prevStep} />
				<h1 className="wc-step-title">Your program is ready!</h1>
				<p className="wc-step-comment">
					87% of Bloom users who practice for 10 mins a day, 3x a week, report
					significant improvements in their mental health.
				</p>
				<WebCheckoutChart chartName={'Chart Up Light'} />
				<WebCheckoutNextButton onClick={nextStep} goal={true}>
					<>Continue</>
				</WebCheckoutNextButton>
			</div>
			<style jsx>{`
				.wc-step-comment {
					padding: 22px 82px 44px;
					font-size: 20px;
					line-height: 1.2;
					letter-spacing: -0.2px;
					color: #6f8797;
				}
			`}</style>
		</>
	)
}

export default WebCheckoutStepReady
