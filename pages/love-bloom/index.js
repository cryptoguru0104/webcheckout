import WebCheckoutProgress from 'components/WebCheckoutProgress'
import WebCheckoutStepLoveBloom from 'components/steps/WebCheckoutStepLoveBloom'

function LoveBloomPage() {
  return (
    <div className='wc-container-fluid'>
      <WebCheckoutProgress percent={50} />
      <WebCheckoutStepLoveBloom />
    </div>
  )
}

export default LoveBloomPage
