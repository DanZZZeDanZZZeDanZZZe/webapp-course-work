import styled from 'styled-components'
import { ghostWhite } from '../colors'
import { headerHeight } from '../variables'

const StyledMain = styled.main`
  position: absolute;
  top: ${headerHeight};
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${ghostWhite};
`

export default StyledMain
