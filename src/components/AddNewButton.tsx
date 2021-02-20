import React from "react";
import styled from "@emotion/styled/macro";
import { HiPlus } from "react-icons/hi";

const NewButton = styled.a`
  background: red;
  border-radius: 23px;
  overflow: hidden;
  transition: width ease 200ms;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  transition: width ease 200ms;
  color: white;
  z-index: 1;
  &:hover {
    width: 17rem;
    padding-left: 1.5rem;
  }
  &,
  svg {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    height: 3rem;
    width: 3rem;
  }
  svg {
    display: block;
    background: tomato;
    border-radius: 100%;
    text-align: center;
    line-height: 3.5rem;
    transition: transform ease 200ms;
    transform: rotate(-180deg);
  }
  &:hover svg {
    transform: rotate(180deg);
  }
`;

const AddNewButton = () => (
  <NewButton href="/new">
    <span>Create your Countdown</span>
    <HiPlus />
  </NewButton>
);

export default AddNewButton;
