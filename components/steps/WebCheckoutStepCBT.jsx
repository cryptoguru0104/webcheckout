import { useState } from 'react'
import {useRouter} from 'next/router'
import WebCheckoutOptionItem from '../WebCheckoutOptionItem'
import WebCheckoutPrevButton from '../WebCheckoutPrevButton'
import WebCheckoutNextButton from '../WebCheckoutNextButton'
import HappinessImage from 'assets/icons/happiness.svg'
import TargetImage from 'assets/icons/target.svg'
import CrownImage from 'assets/icons/crown.svg'

const WebCheckoutStepCBT = () => {
	const router = useRouter()
	const [goal, selectGoal] = useState(null)

	const bindClick = (option) => () => {
		selectGoal(option)
	}
	const nextStep = () => {
		router.push('/choose-guide')
	}
	const prevStep = () => {
		router.push('/bloom')
	}

	return (
		<div className="wc-step">
			<WebCheckoutPrevButton onClick={prevStep} />
			<h1 className="wc-step-title">Have you practiced CBT?</h1>
			<p className="wc-step-comment">
				Our sessions are based on the science of cognitive behavioral therapy.
			</p>
			<div className="wc-option-list">
				<WebCheckoutOptionItem
					selected={goal === 'Beginner'}
					onClick={bindClick('Beginner')}
				>
					<HappinessImage className="wc-option-icon stroke" />
					Beginner
				</WebCheckoutOptionItem>

				<WebCheckoutOptionItem
					selected={goal === 'Intermidiate'}
					onClick={bindClick('Intermidiate')}
				>
					<TargetImage className="wc-option-icon" />
					Intermidiate
				</WebCheckoutOptionItem>

				<WebCheckoutOptionItem
					selected={goal === 'Expert'}
					onClick={bindClick('Expert')}
				>
					<CrownImage className="wc-option-icon" />
					Expert
				</WebCheckoutOptionItem>
			</div>
			<WebCheckoutNextButton onClick={nextStep} goal={goal}>
				<>Continue</>
			</WebCheckoutNextButton>
		</div>
	)
}

export default WebCheckoutStepCBT
