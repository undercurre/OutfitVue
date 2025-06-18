import { connect } from "react-redux";
import NavBar from "../component/NavBar";
import Taro from "@tarojs/taro";

const GlobalNavBar = ({ title, rightContent }) => (
  <NavBar
    fixed
    title={title}
    rightContent={rightContent}
    backgroundColor="#F3E4AD"
    onBack={() => Taro.switchTab({ url: "/pages/model/index" })}
  />
);

const mapState = (state) => ({
  title: state.app.title,
  rightContent: state.app.rightContent,
});

export default connect(mapState)(GlobalNavBar);
