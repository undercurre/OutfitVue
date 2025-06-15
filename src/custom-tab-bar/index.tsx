import { Component } from "react";
import Taro from "@tarojs/taro";
import { AtTabBar } from "taro-ui";
import { connect } from "react-redux";
import { SET_CURRENT } from "../constants/app";

import "./index.scss";

interface ReduxProps {
  current: number;
  setCurrent: (index: number) => void;
}

const mapStateToProps = (state) => ({
  current: state.app.current,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrent: (index) => dispatch({ type: SET_CURRENT, payload: index }),
});

class CustomTabBar extends Component<ReduxProps> {
  handleClick(index) {
    console.log("当前选中项：", index);
    const urls = [
      "/pages/model/index",
      "/pages/clothes/index",
      "/pages/collect/index",
    ];
    this.props.setCurrent(index);
    Taro.switchTab({ url: urls[index] });
  }

  render() {
    return (
      <AtTabBar
        fixed
        backgroundColor="#F3E4AD"
        color="#797979"
        selectedColor="#E37469"
        tabList={[
          { title: "模特", iconType: "user" },
          { title: "换装", iconType: "shopping-bag" },
          { title: "收藏", iconType: "heart" },
        ]}
        onClick={(index) => this.handleClick(index)}
        current={this.props.current}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomTabBar);
