import styled from 'styled-components';

export const List = styled.ul`
  font-family: fantasy;
  font-size: 30px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0px;
  padding-left: 0px;
  & li {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
`;

export const ContactsTitle = styled.h2`
  font-family: 'Lucida Sans', sans-serif;
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 10px;
`;
