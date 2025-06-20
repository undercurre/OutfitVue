import { Component } from "react";
import { View } from "@tarojs/components";
import BasePage from "../../component/BasePage";

import "./index.scss";

type PageStateProps = {
  counter: {
    num: number;
  };
};

type PageDispatchProps = {
  add: () => void;
  dec: () => void;
  asyncAdd: () => any;
};

type PageOwnProps = {};

type PageState = {
  current: number;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Index {
  props: IProps;
}

class Index extends Component<IProps, PageState> {
  state: PageState;
  constructor(props: IProps) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  handleClick(value) {
    this.setState({
      current: value,
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <BasePage title="模特" navProps={{ backgroundColor: "#f5f5f5" }}>
        {/* 页面具体内容 */}
        <View>模特</View>
      </BasePage>
    );
  }
}

export default Index;
