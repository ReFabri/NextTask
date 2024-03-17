"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";

function Sidebar() {
  const { theme } = useGlobalState();

  return <SidebarStyled theme={theme}>Sidebar</SidebarStyled>;
}

const SidebarStyled = styled.nav`
  width: ${(props) => props.theme.sidebarWidth};
  position: relative;
  background-color: ${(props) => props.theme.colorBg2};
  border-right: 1px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
`;

export default Sidebar;
