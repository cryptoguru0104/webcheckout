import {useRouter} from 'next/router'
import WebCheckoutPrevButton from '../WebCheckoutPrevButton'
import WebCheckoutNextButton from '../WebCheckoutNextButton'
import WebCheckoutRatingBar from '../WebCheckoutReviewItem'

const WebCheckoutStepLoveBloom = () => {
	const router = useRouter()
	const nextStep = () => {
		router.push('/program-ready')
	}
	const prevStep = () => {
		router.push('/choose-guide')
	}

	return (
		<>
			<div className="wc-step">
				<WebCheckoutPrevButton onClick={prevStep} />
				<h1 className="wc-step-title">People love Bloom</h1>
				<p className="wc-step-comment">
					Based on over 7,000 ratings from across the globe
				</p>
				<div className="wc-review-list">
					<WebCheckoutRatingBar rating={5} author="Nadia J.">
						<>
							I love working with Mike as his voice calms me down everytime.
							First I thought how weird, but then after a few minutes I
							absolutely loved it. What a great app.
						</>
					</WebCheckoutRatingBar>
					<WebCheckoutRatingBar rating={5} author="James L.">
						<>
							I have to say I’ve just started using the app today and after two
							short sessions I already feel better and more positive! I will
							definitely keep on using the app in the long term!
						</>
					</WebCheckoutRatingBar>
					<WebCheckoutRatingBar rating={5} author="Sarah W.">
						<>
							This is such a wonderful app. I cried from relief that such a
							thing exists as soon as I watched the first video! I now know how
							to train my mind with the right guidance.
						</>
					</WebCheckoutRatingBar>
				</div>
				<WebCheckoutNextButton onClick={nextStep} goal={true}>
					<>Continue</>
				</WebCheckoutNextButton>
			</div>
			<style jsx>{`
				.wc-step-comment {
					padding: 9px 82px 25px;
				}

				.wc-review-list {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding-left: 138px;
					padding-right: 138px;
					min-height: 425px !important;
				}
			`}</style>
		</>
	)
}

export default WebCheckoutStepLoveBloom
