import WebCheckoutProgress from 'components/WebCheckoutProgress'
import WebCheckoutStepReady from 'components/steps/WebCheckoutStepReady'

function ProgramReadyPage() {
  return (
    <div className='wc-container-fluid'>
      <WebCheckoutProgress percent={62.5} />
      <WebCheckoutStepReady />
    </div>
  )
}

export default ProgramReadyPage
