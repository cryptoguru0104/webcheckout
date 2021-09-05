import {useRouter} from 'next/router'
import WebCheckoutPrevButton from 'components/WebCheckoutPrevButton'
import WebCheckoutNextButton from 'components/WebCheckoutNextButton'

const WebCheckoutStepPremium = () => {
	const router = useRouter()
	const nextStep = () => {
		router.push('/start-trial')
	}

	const prevStep = () => {
		router.push('/program-ready')
	}

	return (
		<>
			<div className="wc-step">
				<WebCheckoutPrevButton onClick={prevStep} />
				<h1 className="wc-step-title">
					For limited time, <br />
					try Bloom Premium for <b>Free</b>
				</h1>
				<div className="wc-option-list">
					<div className="wc-premium-panel">
						<h1>Basic Plan</h1>
						<ul className="wc-circlebox-list">
							<li className="default">
								<h3>Limited access to content</h3>
							</li>
						</ul>
					</div>
					<div className="wc-premium-panel">
						<h1>Premium Membership</h1>
						<ul className="wc-circlebox-list">
							<li>
								<h3>Personalized therapy sessions</h3>
							</li>
							<li>
								<h3>Unlimited access to content</h3>
							</li>
							<li>
								<h3>100+ CBT Guided Journals</h3>
							</li>
							<li>
								<h3>100+ Therapeutic Exercises</h3>
							</li>
							<li>
								<h3>Exclusive therapy programs</h3>
							</li>
							<li>
								<h3>New content every week</h3>
							</li>
							<li>
								<h3>Cancel anytime</h3>
							</li>
						</ul>
					</div>
				</div>
				<WebCheckoutNextButton onClick={nextStep} goal={true}>
					<>Continue</>
				</WebCheckoutNextButton>
			</div>
			<style jsx>{`
				.wc-step-title {
					font-size: 35px;
					font-weight: normal;
					padding-bottom: 27px;
				}

				.wc-option-list {
					align-items: normal;
					padding-bottom: 57px;
				}
			`}</style>
		</>
	)
}

export default WebCheckoutStepPremium
