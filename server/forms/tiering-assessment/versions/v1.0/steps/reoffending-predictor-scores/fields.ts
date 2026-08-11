import { RiskData } from '@ministryofjustice/hmpps-arns-frontend-components-lib/dist/types/RiskData'
import { GovUKButton, GovUKLinkButton } from '@ministryofjustice/hmpps-forge/govuk-components'
import { Data } from '@ministryofjustice/hmpps-forge/core/authoring'
import { DetailedRiskPredictorScores } from '../../../../components/predictorScoresComponent'

export const scores = DetailedRiskPredictorScores({
  data: Data('riskData') as unknown as RiskData,
  forename: 'Alex',
})

export const checkAnswersGrayButton = GovUKLinkButton({
  text: 'Check answers',
  classes: 'govuk-button--secondary',
  href: '/tiering-assessment/v1.0/check-your-answers',
})

export const markAsCompleteButton = GovUKButton({
  text: 'Mark this section complete',
  classes: 'govuk-!-display-block govuk-!-margin-top-8',
})
