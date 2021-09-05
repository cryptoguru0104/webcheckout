import WebCheckoutProgress from 'components/WebCheckoutProgress'
import WebCheckoutStepTrial from 'components/steps/WebCheckoutStepTrial'

function StartTrialPage() {
  return (
    <div className='wc-container-fluid'>
      <WebCheckoutProgress percent={87.5} />
      <WebCheckoutStepTrial />
    </div>
  )
}

export default StartTrialPage
