import styled from "styled-components";

export const InputMessageWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f1ef;
`;

export const Form = styled.form`
  width: 60%;
  height: 60px;
  display: flex;
  border: 1px solid #e7440f;
  border-radius: 99px;
  overflow: hidden;

  input {
    height: 100%;
    width: 100%;
    padding: 0 16px;
    font-size: 16px;
    border: none;
    outline: none;
  }

  button {
    border: none;
    min-width: 60px;
    width: 10%;
    background-color: #e7440f;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.8s ease;
    &:hover {
      background-color: #b43d28;
    }
  }
`;
