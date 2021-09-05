import WebCheckoutProgress from 'components/WebCheckoutProgress'
import WebCheckoutStepPremium from 'components/steps/WebCheckoutStepPremium'

function BloomPremiumPage() {
  return (
    <div className='wc-container-fluid'>
      <WebCheckoutProgress percent={75} />
      <WebCheckoutStepPremium />
    </div>
  )
}

export default BloomPremiumPage
