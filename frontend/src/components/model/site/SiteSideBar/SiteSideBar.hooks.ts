import { useOS, type OS } from "@packages/cosmos-hooks";

interface SiteSideBarHooks {
  os: OS;
}

const useSiteSideBar = (): SiteSideBarHooks => {
  const { os } = useOS();

  return {
    os,
  };
};

export { type SiteSideBarHooks, useSiteSideBar };
