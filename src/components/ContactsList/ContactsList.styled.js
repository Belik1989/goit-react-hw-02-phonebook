import styled from 'styled-components';

export const List = styled.ul`
  font-family: 'Cochin', serif;
  font-size: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  margin: 0px;
  padding-left: 0px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  height: 280px;
  overflow-y: scroll;

  & li:nth-child(even) {
    background: #f3f3f3;
  }
  & li {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 2px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  & span {
    margin-right: auto;
  }
  & p {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: auto;
  }
`;

export const ContactsTitle = styled.h2`
  font-family: 'Lucida Sans', sans-serif;
  /* font-size: 40px; */
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
`;
export const ContactsSection = styled.section`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 20px 0px 20px;
`;

export const ContactsNumbers = styled.span`
  display: flex;
  justify-content: space-evenly;
  padding: 0px 12px 10px 12px;
  margin-top: 8px;
  border-bottom: 5px solid darkgray;
  width: fit-content;
  margin-right: auto;
  margin-left: auto;
  /* border-radius: 6px; */
  margin-top: 10px;
  margin-bottom: 15px;
`;
