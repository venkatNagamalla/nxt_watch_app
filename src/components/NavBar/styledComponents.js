import styled from 'styled-components'

export const MobileIconsContainer = styled.ul`
  border: 1px solid #000;
  list-style: none;
  display: flex;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Icon = styled.li`
  border: 1px solid #000;
  margin: 20px;
`

export const DeskIconsContainer = styled.div`
  border: 1px solid #000;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
