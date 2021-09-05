import WebCheckoutProgress from 'components/WebCheckoutProgress'
import WebCheckoutStepBloom from 'components/steps/WebCheckoutStepBloom'

function BloomPage() {
  return (
    <div className='wc-container-fluid'>
      <WebCheckoutProgress percent={12.5} />
      <WebCheckoutStepBloom />
    </div>
  )
}

export default BloomPage
