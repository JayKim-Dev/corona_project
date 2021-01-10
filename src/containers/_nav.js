import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["홈"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "대시보드",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["참고"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "참고",
    to: "/widgets",
    icon: "cil-calculator",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

export default _nav;
