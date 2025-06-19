import { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "@tarojs/components";

import { add, minus, asyncAdd } from "../../actions/counter";
import type { RootState } from "../../store";
import { AtAvatar } from "taro-ui";
import BasePage from "../../component/NavBar/index";

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
@connect<PageStateProps, PageDispatchProps, PageOwnProps>(
  (state: RootState) => ({
    counter: state.counter,
  }),
  (dispatch: any) => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    },
  })
)
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

  renderNavBarTitle() {
    return <Text style={{ color: "000", fontSize: "22px" }}>模特</Text>;
  }

  renderNavBarRight() {
    return (
      <AtAvatar
        circle
        size="small"
        image="https://jdc.jd.com/img/200"
      ></AtAvatar>
    );
  }

  render() {
    return (
      <BasePage title="首页" navProps={{ backgroundColor: "#f5f5f5" }}>
        {/* 页面具体内容 */}
        <View>页面主体内容</View>
      </BasePage>
    );
  }
}

export default Index;
