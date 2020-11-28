import styled from 'styled-components'
import { ghostWhite } from '../colors'
import { mdSize } from '../screenBreakpoints'
import { greaterTnanMdHeaderHeight, lessTnanMdHeaderHeight } from '../variables'

const StyledMain = styled.main`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${ghostWhite};

  @media only screen and (max-width: ${mdSize}) {
    top: ${lessTnanMdHeaderHeight};
  }

  @media only screen and (min-width: ${mdSize}) {
    top: ${greaterTnanMdHeaderHeight};
  }
`

export default StyledMain
