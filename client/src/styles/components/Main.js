import styled from 'styled-components'
import { ghostWhite } from '../colors'
import { mdSize } from '../screenBreakpoints'
import { greaterTnanMdHeaderHeight, lessTnanMdHeaderHeight } from '../variables'

const StyledMain = styled.main`
  background-color: ${ghostWhite};

  @media only screen and (max-width: ${mdSize}) {
    margin-top: ${lessTnanMdHeaderHeight};
    min-height: calc(100vh - ${lessTnanMdHeaderHeight});
  }

  @media only screen and (min-width: ${mdSize}) {
    margin-top: ${greaterTnanMdHeaderHeight};
    min-height: calc(100vh - ${greaterTnanMdHeaderHeight});
  }
`

export default StyledMain
