"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

function Sidebar() {
  const { theme } = useGlobalState();

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <Image width={70} height={70} src="/images/profile.jpg" alt="profile" />
      </div>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  width: ${(props) => props.theme.sidebarWidth};
  position: relative;
  background-color: ${(props) => props.theme.colorBg2};
  border-right: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
`;

export default Sidebar;
