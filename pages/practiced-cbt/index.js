import WebCheckoutProgress from 'components/WebCheckoutProgress'
import WebCheckoutStepCBT from 'components/steps/WebCheckoutStepCBT'

function PracticedCBTPage() {
  return (
    <div className='wc-container-fluid'>
      <WebCheckoutProgress percent={25} />
      <WebCheckoutStepCBT />
    </div>
  )
}

export default PracticedCBTPage
