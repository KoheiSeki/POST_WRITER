import { Icon } from "@/components/icons";

export type NavItem = {
  title: string;
  href: string;
  // 非活性リンク
  disabled?: boolean;
};

export type SidebarNavItem = {
  title: string;
  // 非活性リンク
  disabled?: boolean;
  // 外部リンク
  external?: boolean;
  icon?: keyof typeof Icon;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavItem[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    x: string;
    github: string;
  };
};

export type MarketingConfig = {
  mainNav: NavItem[];
};

export type DashboardConfig = {
  mainNav: NavItem[];
  sidebarNav: SidebarNavItem[];
};
