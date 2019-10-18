import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import Text from "@crave/farmblocks-text";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import StoryRouter from "storybook-react-router";
import { useMediaQuery } from "react-responsive";

import SideNav from "./SideNav";
import { FULLSCREEN, PUSH, OVERLAY } from "./constants/variants";
import NavItem from "./components/NavItem";
import PageWrapper from "./helpers/PageWrapper";

const tabs = ["purveyor", "order", "search", "meat"];

const SideNavPushComp = () => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);

  return (
    <>
      <SideNav
        expanded={expanded}
        onToggle={toggle}
        onClose={() => setExpanded(false)}
      >
        <NavHeader />
        {tabs.map(tab => (
          <NavItem key={tab} activated={tab === tabs[0]} icon={`wg-${tab}`}>
            {tab}
          </NavItem>
        ))}
      </SideNav>

      <PageWrapper expanded={expanded}>
        <LoremBlock variant={PUSH} />
      </PageWrapper>
    </>
  );
};

export const SideNavPush = () => <SideNavPushComp />;

const SideNavOverlayComp = () => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);
  const collapse = () => setExpanded(false);

  const handleClick = expanded ? collapse : undefined;

  return (
    <>
      <SideNav
        expanded={expanded}
        onToggle={toggle}
        onClose={() => setExpanded(false)}
        variant={OVERLAY}
      >
        <NavHeader />
        {tabs.map(tab => (
          <NavItem
            key={tab}
            activated={tab === tabs[0]}
            icon={`wg-${tab}`}
            onClick={handleClick}
          >
            {tab}
          </NavItem>
        ))}
      </SideNav>

      <PageWrapper expanded={expanded} variant={OVERLAY} onClick={handleClick}>
        <LoremBlock variant={OVERLAY} />
      </PageWrapper>
    </>
  );
};
export const SideNavOverlay = () => <SideNavOverlayComp />;

const SideNavFullScreenComp = () => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);
  const collapse = () => setExpanded(false);

  const handleClick = expanded ? collapse : undefined;

  return (
    <>
      <SideNav
        expanded={expanded}
        onToggle={toggle}
        onClose={() => setExpanded(false)}
        variant={FULLSCREEN}
      >
        <NavHeader />
        {tabs.map(tab => (
          <NavItem
            key={tab}
            activated={tab === tabs[0]}
            icon={`wg-${tab}`}
            onClick={handleClick}
          >
            {tab}
          </NavItem>
        ))}
      </SideNav>

      <PageWrapper expanded={expanded} variant={FULLSCREEN}>
        <LoremBlock variant={FULLSCREEN} />
      </PageWrapper>
    </>
  );
};
export const SideNavFullScreen = () => <SideNavFullScreenComp />;

export const SideNavPushWithRouter = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);

  return (
    <>
      <SideNav
        expanded={expanded}
        onToggle={toggle}
        onClose={() => setExpanded(false)}
      >
        <NavHeader />
        <NavItems tabs={tabs} location={location} />
      </SideNav>

      <PageWrapper expanded={expanded}>
        <NavRoutes tabs={tabs} />
      </PageWrapper>
    </>
  );
});
SideNavPushWithRouter.story = {
  decorators: [StoryRouter()],
};

export const SideNavOverlayWithRouder = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);
  const collapse = () => setExpanded(false);

  const highlightColor = colors.AVOCADO;
  const handleClick = expanded ? collapse : undefined;

  return (
    <>
      <SideNav
        expanded={expanded}
        variant={OVERLAY}
        onToggle={toggle}
        onClose={collapse}
        highlightColor={highlightColor}
      >
        <NavHeader />
        <NavItems tabs={tabs} location={location} onClick={collapse} />
      </SideNav>

      <PageWrapper variant={OVERLAY} expanded={expanded} onClick={handleClick}>
        <NavRoutes tabs={tabs} />
      </PageWrapper>
    </>
  );
});
SideNavOverlayWithRouder.story = {
  decorators: [StoryRouter()],
};

export const SideNavFullScreenWithRouter = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);
  const collapse = () => setExpanded(false);

  return (
    <>
      <SideNav
        expanded={expanded}
        variant={FULLSCREEN}
        onToggle={toggle}
        onClose={collapse}
      >
        <NavHeader />
        <NavItems tabs={tabs} location={location} onClick={collapse} />
      </SideNav>

      <PageWrapper variant={FULLSCREEN} expanded={expanded}>
        <NavRoutes tabs={tabs} />
      </PageWrapper>
    </>
  );
});
SideNavFullScreenWithRouter.story = {
  decorators: [StoryRouter()],
};

export const NavWithJsMediaQuery = withRouter(({ location }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(e => !e);
  const collapse = () => setExpanded(false);
  const isMobile = useMediaQuery({ maxWidth: 760 });

  const variant = isMobile ? FULLSCREEN : PUSH;
  const sidebarColor = isMobile ? "white" : undefined;
  const handleClick = isMobile ? collapse : undefined;

  return (
    <div>
      <TopNav isPush={!isMobile} />
      <SideNav
        expanded={expanded}
        onToggle={toggle}
        variant={variant}
        background={sidebarColor}
        onClose={collapse}
        offsetTop="56px"
      >
        <NavItems tabs={tabs} location={location} onClick={handleClick} />
      </SideNav>
      <PageWrapper expanded={expanded} variant={variant} offsetTop="56px">
        <NavRoutes tabs={tabs} />
      </PageWrapper>
    </div>
  );
});
NavWithJsMediaQuery.story = {
  decorators: [StoryRouter()],
};

/* eslint-disable */
const NavItems = ({ tabs, location, onClick, ...props }) => (
  <>
    {tabs.map(tab => (
      <NavLink
        to={`/${tab}`}
        key={tab}
        style={{ textDecoration: "none" }}>
        <NavItem
          activated={location.pathname === `/${tab}`}
          onClick={onClick}
          icon={`wg-${tab}`}
          {...props}
        >
          {tab}
        </NavItem>
      </NavLink>
    ))}

    <NavLink
      to="/account"
      style={{ textDecoration: "none" }}>
      <NavItem
        image="https://picsum.photos/640/?image=889"
        background="white"
        activated={location.pathname === "/account"}
        onClick={onClick}
        {...props}
      >
        Account
      </NavItem>
    </NavLink>
  </>
);

export default { title: "SideNav" };

const NavRoutes = ({ tabs }) => (
  <div
    style={{
      margin: "0 24px",
      padding: "24px",
      height: "100vh",
      boxSizing: "border-box",
    }}
  >
    <Switch>
      {[...tabs, "account"].map(tab => (
        <Route path={`/${tab}`} key={tab}>
          <Text upper fontWeight="title" size={32}>{tab}</Text>
          <Lorem />
        </Route>
      ))}
      <Route>
        <Text upper fontWeight="title" size={32}>select a route</Text>
        <Lorem />
      </Route>
    </Switch>
  </div>
);

// story helper components

const TopNav = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 8px;
  height: 56px;
  box-shadow: 0px 1px 1px 0px ${colors.GREY_32};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: white;
  z-index: ${({ isPush }) => (!isPush ? 90 : 101)};
`;

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  min-height: 56px;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const Lorem = () => (
  <div
    style={{
      margin: "16px 0",
    }}
  >
  <Text>
    Lorem iTextsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
    molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias
    officiis assumenda officia quibusdam deleniti eos cupiditate dolore
    doloribus!
  </Text>
  </div>
);

const LoremBlock = ({variant}) => (
  <div
    style={{
      margin: "0 24px",
      padding: "24px",
      height: "100vh",
      boxSizing: "border-box",
    }}
  >
    <Text upper fontWeight="title" size={32}>{variant}</Text>
    <Lorem />
  </div>
);
