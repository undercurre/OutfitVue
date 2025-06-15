import { Component, PropsWithChildren } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";

import { add, minus, asyncAdd } from "../../actions/counter";
import type { RootState } from "../../store";
import { AtTabBar, AtAvatar } from "taro-ui";
import NavBar from "src/component/NavBar";

import "./index.scss";
import Taro from "@tarojs/taro";

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

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
    return <Text style={{ color: "000", fontSize: "22px" }}>收藏</Text>;
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
      <View className="index">
        <NavBar
          title={this.renderNavBarTitle()}
          backgroundColor="#F3E4AD"
          rightContent={this.renderNavBarRight()}
          onBack={() => Taro.switchTab({ url: "/pages/home/index" })}
        />
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
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}

export default Index;
