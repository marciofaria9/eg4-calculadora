import styled from 'styled-components';

export type Props = {
  color?: string;
  bg?: string;
  bdbox?: string;
  gc?: string;
}

export const ContainerCalc = styled.div`
  max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
  user-select: none;
  padding: 10px 10px 10px 10px;

  @media screen and (min-width: 450px) {
    min-width: 360px;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled(Flex)`
  justify-content: space-between;
  color: var(--black-text);
  font-size: 1.2rem;
`

export const Button = styled(Flex)<Props>`
  border-radius: 0.3rem;
  padding: 25px;
  font-size: 2.2rem;
  opacity: 0.8;
  cursor: pointer;
  width: 24px;
  height: 24px;
  grid-column: ${(props) => (props.gc ? props.gc : 'auto')};
  background-color: ${(props) => 
    props.color ? props.color : '#606060' };
  color: ${(props) => 
    props.color ? props.color : '#fff' };
  box-shadow: 0 3px 0
    ${(props) => (props.bdbox ? props.bdbox : 'var(--key-shadow-orange') };
  &:hover {
    opacity: -1;
  }
`

export const ButtonRed = styled(Flex)<Props>`
  border-radius: 0.3rem;
  padding: 25px;
  font-size: 2.0rem;
  opacity: 0.8;
  cursor: pointer;
  width: 24px;
  height: 24px;
  grid-column: ${(props) => (props.gc ? props.gc : 'auto')};
  background-color: ${(props) => 
    props.color ? props.color : '#BD5757' };
  color: ${(props) => 
    props.color ? props.color : '#fff' };
  box-shadow: 0 3px 0
    ${(props) => (props.bdbox ? props.bdbox : 'var(--key-shadow-orange') };
  &:hover {
    opacity: -1;
  }
`

export const ButtonGrenn = styled(Flex)<Props>`
  border-radius: 0.3rem;
  padding: 25px;
  font-size: 2.0rem;
  opacity: 0.8;
  cursor: pointer;
  width: 24px;
  height: 24px;
  grid-column: ${(props) => (props.gc ? props.gc : 'auto')};
  background-color: ${(props) => 
    props.color ? props.color : '#437B3E' };
  color: ${(props) => 
    props.color ? props.color : '#fff' };
  box-shadow: 0 3px 0
    ${(props) => (props.bdbox ? props.bdbox : 'var(--key-shadow-orange') };
  &:hover {
    opacity: -1;
  }
`