import StepWizard from 'react-step-wizard'
import WebCheckoutProgress from './WebCheckoutProgress'
import WebCheckoutStepBloom from './steps/WebCheckoutStepBloom'

const WebCheckoutLayout = () => (
	<div className="wc-container-fluid">
		<WebCheckoutProgress />
		<StepWizard>
			<WebCheckoutStepBloom />
		</StepWizard>
	</div>
)

export default WebCheckoutLayout
