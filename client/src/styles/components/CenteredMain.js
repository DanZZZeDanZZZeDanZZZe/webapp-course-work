import styled from 'styled-components'
import { lgSize } from '../screenBreakpoints'
import StyledMain from './Main'

const StyledCenteredMain = styled(StyledMain)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: ${lgSize}) {
    padding-top: 2rem;
    justify-content: start;
  }

  @media only screen and (min-width: ${lgSize}) {
    justify-content: center;
  }
`

export default StyledCenteredMain
