import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: row;

  h3 {
    margin: 0;
  }

  img {
    width: 250px;
    height: 250px;
    border: 5px solid #fff;
    border-radius: 50%;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 50px;
  margin-top: 25px;
`;

export const Work = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  margin-top: 25px;
  margin-bottom: 25px;

  img {
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 50%;
  }
`;
