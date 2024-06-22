export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Allocation',
      href: '/allocations',
    },
    {
      label: 'Course',
      href: '/courses',
    },
    {
      label: 'Department',
      href: '/departments',
    },
    {
      label: 'Professor',
      href: '/professors',
    },
  ];
  
  export default NAV_ITEMS;
  