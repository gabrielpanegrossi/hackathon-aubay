import styled from "styled-components";

const messageType = {
  system: "padding: 16px 0px 20px 16px; width:100%; background-color:#fce9e5;",
  user: "padding: 16px 0px 20px 16px; width:100%; background-color:#F2F2F2;",
};

export const ChatMessageWrapper = styled.div<{ type: "user" | "system" }>`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  ${({ type }) => messageType[type]}

  p {
    font-size: 18px;
  }

  h2 {
    font-weight: 500;
    font-size: 14px;
  }
`;

export const UserProfilePictureWrapper = styled.div`
  border: 1px solid #575957;
  padding: 4px;
  background: #f2f2f2;
`;
