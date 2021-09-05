import WebCheckoutProgress from 'components/WebCheckoutProgress'
import WebCheckoutStepGuide from 'components/steps/WebCheckoutStepGuide'

function ChooseGuidePage() {
  return (
    <div className='wc-container-fluid'>
      <WebCheckoutProgress percent={37.5} />
      <WebCheckoutStepGuide />
    </div>
  )
}

export default ChooseGuidePage
