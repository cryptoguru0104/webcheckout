import { useState } from 'react'
import {useRouter} from 'next/router'
import WebCheckoutOptionItem from '../WebCheckoutOptionItem'
import WebCheckoutPrevButton from '../WebCheckoutPrevButton'
import WebCheckoutNextButton from '../WebCheckoutNextButton'
import WebCheckoutAvatar from '../WebCheckoutAvatar'

const WebCheckoutStepGuide = () => {
	const router = useRouter()
	const [goal, selectGoal] = useState(null)

	const bindClick = (option) => () => {
		selectGoal(option)
	}
	const nextStep = () => {
		router.push('/love-bloom')
	}
	const prevStep = () => {
		router.push('/practiced-cbt')
	}

	return (
		<>
			<div className="wc-step">
				<WebCheckoutPrevButton onClick={prevStep} />
				<h1 className="wc-step-title">Choose your guide</h1>
				<p className="wc-step-comment">
					They will guide you through the different exercises. You can swap
					anytime.
				</p>
				<div className="wc-option-list">
					<WebCheckoutOptionItem
						className="wc-avatar-item"
						selected={goal === 'Shernita'}
						onClick={bindClick('Shernita')}
					>
						<WebCheckoutAvatar
							name="Shernita_Headshot_2021.png"
							width={87}
							height={87}
						>
							<div className="body">
								<h1>Shernita</h1>
								<h3>Direct & Empowering</h3>
								<p>
									Shernita’s empowering energy makes you believe in yourself &
									live with courage.
								</p>
							</div>
						</WebCheckoutAvatar>
					</WebCheckoutOptionItem>
					<WebCheckoutOptionItem
						className="wc-avatar-item"
						selected={goal === 'Mike'}
						onClick={bindClick('Mike')}
					>
						<WebCheckoutAvatar
							name="Mike_Headshot_2021.png"
							width={87}
							height={87}
						>
							<div className="body">
								<h1>Mike</h1>
								<h3>Empathic & Caring</h3>
								<p>
									Mike’s soothing voice helps to connect with yourself and find
									peace.
								</p>
							</div>
						</WebCheckoutAvatar>
					</WebCheckoutOptionItem>
				</div>
				<WebCheckoutNextButton onClick={nextStep} goal={goal}>
					<>Watch Trailer</>
				</WebCheckoutNextButton>
			</div>
			<style jsx>{`
				.wc-step-comment {
					padding: 9px 30px 65px;
				}
				.wc-option-list {
					min-height: 350px;
				}
				.body {
					padding-left: 27px;
					width: 300px;
				}
				.body > h1 {
					font-size: 17px;
					font-weight: 900;
					line-height: 1.2;
					letter-spacing: -0.2px;
					height: initial;
				}
				.body > h3 {
					padding-top: 2px;
					font-size: 15px;
					font-weight: 500;
				}
				.body > p {
					padding-top: 6px;
					color: #6f8797;
					height: initial;
					font-size: 14px;
					font-weight: 500;
					line-height: 1.4;
				}
			`}</style>
		</>
	)
}

export default WebCheckoutStepGuide
