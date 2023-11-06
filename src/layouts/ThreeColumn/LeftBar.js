import NavigationMenu from "../../components/NavigationMenu";
import Profile from "../../components/Profile";

const LeftBar = () => {
  return (
    <div className="leftbar-container">
      <NavigationMenu />
      <Profile />
    </div>
  );
};

export default LeftBar;
