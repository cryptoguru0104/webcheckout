import { useState } from 'react'
import { useRouter } from 'next/router'
import WebCheckoutOptionItem from '../WebCheckoutOptionItem'
import WebCheckoutNextButton from '../WebCheckoutNextButton'
import SunlightImage from 'assets/icons/sunlight.svg'
import LeafImage from 'assets/icons/leaf.svg'
import FlowerImage from 'assets/icons/flower.svg'
import EyeImage from 'assets/icons/eyes.svg'
import UmbrellaImage from 'assets/icons/umbrella.svg'
import EmpowerImage from 'assets/icons/empower.svg'

const WebCheckoutStepBloom = () => {
	const router = useRouter()
	const [goal, selectGoal] = useState(null)

	const bindClick = (option) => () => {
		selectGoal(option)
	}
	const nextStep = () => {
		router.push('/practiced-cbt')
	}

	return (
		<div className="wc-step">
			<h1 className="wc-step-title">What brings you to Bloom?</h1>
			<p className="wc-step-comment">
				We'll personalize recommendations based on your goals.
			</p>
			<div className="wc-option-list">
				<WebCheckoutOptionItem
					selected={goal === 'Boost Mood'}
					onClick={bindClick('Boost Mood')}
				>
					<SunlightImage className="wc-option-icon" />
					Boost Mood
				</WebCheckoutOptionItem>
				<WebCheckoutOptionItem
					selected={goal === 'Worry Less'}
					onClick={bindClick('Worry Less')}
				>
					<LeafImage className="wc-option-icon" />
					Worry Less
				</WebCheckoutOptionItem>
				<WebCheckoutOptionItem
					selected={goal === 'Calm Anxiety'}
					onClick={bindClick('Calm Anxiety')}
				>
					<FlowerImage className="wc-option-icon stroke" />
					Calm Anxiety
				</WebCheckoutOptionItem>
				<WebCheckoutOptionItem
					selected={goal === 'Be More Present'}
					onClick={bindClick('Be More Present')}
				>
					<EyeImage className="wc-option-icon stroke" />
					Be More Present
				</WebCheckoutOptionItem>
				<WebCheckoutOptionItem
					selected={goal === 'Reduce Stress'}
					onClick={bindClick('Reduce Stress')}
				>
					<UmbrellaImage className="wc-option-icon" />
					Reduce Stress
				</WebCheckoutOptionItem>
				<WebCheckoutOptionItem
					selected={goal === 'Feel Empowered'}
					onClick={bindClick('Feel Empowered')}
				>
					<EmpowerImage className="wc-option-icon" />
					Feel Empowered
				</WebCheckoutOptionItem>
			</div>
			<WebCheckoutNextButton onClick={nextStep} goal={goal}>
				<>Continue</>
			</WebCheckoutNextButton>
		</div>
	)
}

export default WebCheckoutStepBloom
