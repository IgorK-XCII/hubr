export interface SidebarItemType {
  label: string;
  to: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export type SidebarItemsList = SidebarItemType[]
