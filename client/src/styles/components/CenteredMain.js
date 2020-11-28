import styled from 'styled-components'
import { lgSize } from '../screenBreakpoints'
import StyledMain from './Main'

const StyledCenteredMain = styled(StyledMain)`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${lgSize}) {
    padding-top: 2rem;
  }

  @media only screen and (min-width: ${lgSize}) {
    align-items: center;
  }
`

export default StyledCenteredMain
