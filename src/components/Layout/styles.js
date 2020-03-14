import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.background};

  h1 {
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    line-height: 3.6875rem;
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: fit-content;
  padding: 2.8125em 7.125rem 1.1875em;

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
  margin-bottom: 2rem;

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
  display: flex;
  flex: 1;
  width: 100%;
  background: red;
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  padding: 0.5rem 1rem 0;
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

  :first-of-type {
    margin-bottom: 0.75rem;
  }
`;
