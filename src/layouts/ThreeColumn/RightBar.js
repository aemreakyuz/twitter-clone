import Search from "../../components/Search";
import Suggestions from "../../components/Suggestions";

const RightBar = () => {
  return (
    <div className="rightbar-container">
      <Search />
      <Suggestions />
    </div>
  );
};

export default RightBar;
