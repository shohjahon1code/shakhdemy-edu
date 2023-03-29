import { SidebarProps } from "./sidebar.pprops";


const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      sidebar
    </div>
  );
};

export default Sidebar;
