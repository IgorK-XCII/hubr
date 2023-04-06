export interface SidebarItemType {
  label: string;
  to: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export type SidebarItemsList = SidebarItemType[]
