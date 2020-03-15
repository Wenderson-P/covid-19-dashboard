import styled, { keyframes } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  animation: ${fadeIn} 300ms ease-in;

  h1 {
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    line-height: 3.6875rem;
    font-size: 3rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 1rem;
`;

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: fit-content;
  padding: 2em 7.125rem 1em;

  & > div {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.5rem;

    & > [class~='switcher'] {
      margin: 0 1em;
    }
  }
`;

export const Link = styled(RouterLink)`
  font-size: inherit;
  line-height: inherit;
  text-decoration: none;
  font-weight: ${props => (props.selected ? '600' : 'unset')};

  :first-of-type {
    ::after {
      content: '|';
      margin: 0 1rem;
    }
  }
`;

export const Numbers = styled.div`
  display: flex;
  align-items: center;

  & > div {
    :not(:last-of-type) {
      margin-right: 5rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;

    :nth-child(1) {
      color: #e60000;
    }

    :nth-child(2) {
      color: #70a800;
    }

    :nth-child(3) {
      color: #000;
    }

    & > h3 {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 1.8125rem;
      color: inherit;
    }

    & > small {
      font-weight: 500;
      font-size: 1.25rem;
      color: ${props => props.theme.colors.primary};
      line-height: 1.5rem;
    }
  }
`;
export const Content = styled.div`
  display: block;
  flex: 1;
  width: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0.5rem 1rem 0;
  margin-bottom: 0.75rem;
`;

export const FooterLine = styled.div`
  display: flex;
  color: ${props => props.theme.colors.primary};
  align-items: center;

  & > p {
    font-size: 1rem;
    line-height: 1.25rem;
    margin-right: 1rem;
  }

  & > a {
    cursor: pointer;
    :not(:last-of-type) {
      margin-right: 0.5rem;
    }
  }
`;

export const LastUpdated = styled.small`
  color: ${props => props.theme.colors.primary};
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1rem;
  line-height: 1.25rem;
  margin-right: 1rem;
`;
