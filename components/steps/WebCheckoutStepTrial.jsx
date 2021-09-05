import { useState } from 'react'
import {useRouter} from 'next/router'
import WebCheckoutModal from 'components/WebCheckoutModal'
import WebCheckoutPrevButton from 'components/WebCheckoutPrevButton'
import WebCheckoutNextButton from 'components/WebCheckoutNextButton'
import WebCheckoutPayButton from 'components/WebCheckoutPayButton'
import WebCheckoutCreditButton from 'components/WebCheckoutCreditButton'

const WebCheckoutStepTrial = () => {
	const router = useRouter()
	const prevStep = () => {
		router.push('premium')
	}

	const payStep = () => {
		// router.push('/pay')
	}

	const debitStep = () => {
		// router.push('/credit-debit')
	}

	const gotIt = () => {
		setIsOpen(false)
	}

	const [modalIsOpen, setIsOpen] = useState(false)

	const openWhyboxModal = () => {
		setIsOpen(true)
	}

	const closeWhyboxModal = () => {
		setIsOpen(false)
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
				<h1 className="wc-step-title wc-p-b-8">Start your 7-day free trial</h1>
				<p className="wc-step-comment">No commitment. Cancel anytime.</p>
				<div className="wc-option-list">
					<div className="wc-cost-panel">
						<div className="wc-trial-cost">
							<h3>Total due today*</h3>
							<h3>$0.00</h3>
						</div>
						<div className="wc-trial-cost">
							<h3>Cost per month</h3>
							<h3>$4.99</h3>
						</div>
						<div className="billed">
							<p>*$59.99 billed annually after 7-day trial</p>
						</div>
					</div>
					<div className="wc-payment-details">
						<h1>Payment details</h1>
						<button onClick={openWhyboxModal}>Why now?</button>
					</div>
					<div className="wc-choose-payment">
						<h3>Choose a payment method:</h3>
						<div className="wc-payment-actions">
							<WebCheckoutPayButton onClick={payStep}>
								<img src="/images/pay-apple.png" alt="Pay" />
							</WebCheckoutPayButton>
							<WebCheckoutCreditButton onClick={debitStep}>
								Credit or Debit
							</WebCheckoutCreditButton>
						</div>
						<p>
							You won’t be charged until <b>after your 7-day free trial</b>
						</p>
						<p>
							We’ll email you a reminder <b>two days</b> before your Bloom
							Premium trial ends.
						</p>
					</div>
				</div>
				<WebCheckoutModal
					isOpen={modalIsOpen}
					onClose={closeWhyboxModal}
					width={480}
					height={392}
				>
					<div className="wc-modal-body">
						<div className="content">
							<p>
								We ask for your payment details now, so you can keep enjoying
								Bloom without any interruption after your 7-day trial is over.
							</p>
						</div>
						<div className="content">
							<p>
								If you cancel anytime before the end of the 7-day trial, you
								won’t be charged.
							</p>
						</div>
					</div>
					<WebCheckoutNextButton onClick={gotIt} goal={true}>
						<>Got it</>
					</WebCheckoutNextButton>
				</WebCheckoutModal>
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

				.wc-step-comment {
					padding-bottom: 21px;
				}

				.wc-p-b-8 {
					padding-bottom: 8px;
				}

				.wc-cost-panel {
					padding: 20px 0 34px;
					border-top: 1px solid #bf9564;
					border-bottom: 1px solid #bf9564;
				}

				.wc-trial-cost {
					display: flex;
					justify-content: space-between;
					padding: 2px 0;
				}

				.wc-trial-cost h3 {
					font-size: 20px;
				}

				.wc-trial-cost:nth-child(2) h3 {
					font-weight: 500;
					color: #6f8797;
				}

				.wc-cost-panel .billed {
					text-align: left;
					font-size: 14px;
					font-weight: 900;
					padding: 2px 0;
				}

				.wc-payment-details {
					display: flex;
					padding: 24px 0 35px;
					align-items: baseline;
				}

				.wc-payment-details h1 {
					font-weight: 500;
				}

				.wc-payment-details button {
					background-color: transparent;
					padding: 0 12px;
					font-size: 20px;
					font-weight: 900;
					color: #5793e2;
					text-decoration: underline;
				}

				.wc-payment-details button:hover {
					opacity: 0.7;
				}

				.wc-choose-payment {
					text-align: left;
				}

				.wc-choose-payment h3 {
					padding-bottom: 12px;
					font-weight: 500;
					font-size: 20px;
					color: #6f8797;
				}

				.wc-choose-payment p {
					font-size: 18px;
					padding-bottom: 20px;
				}

				.wc-modal-body .content p {
					padding: 0 45px 43px;
					font-size: 22px;
					line-height: 1.2;
					letter-spacing: -0.2px;
					text-align: center;
					color: #6f8797;
					font-weight: 500;
				}

				.wc-modal-body .content:nth-child(2) p {
					padding-bottom: 33px;
				}
			`}</style>
		</>
	)
}

export default WebCheckoutStepTrial
