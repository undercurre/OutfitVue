import { Component } from "react";
import { View } from "@tarojs/components";
import BasePage from "../../component/BasePage";
import { AtSegmentedControl } from "taro-ui";

import "./index.scss";
import ModelCard from "./components/card";
import Gallery, { Model } from "./components/gallery";
import url from "src/utils/cos";

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
  man: Model[];
  woman: Model[];
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
      man: [
        {
          id: 1,
          name: "张三",
          image: url,
        },
        {
          id: 2,
          name: "李四",
          image:
            "http://gips0.baidu.com/it/u=3602773692,1512483864&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280",
        },
      ],
      woman: [],
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
      <BasePage navProps={{ backgroundColor: "#f5f5f5" }}>
        <AtSegmentedControl
          values={["男模特", "女模特"]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
        {this.state.current === 0 ? (
          <View className="model-list">
            <Gallery models={this.state.man}></Gallery>
          </View>
        ) : null}
        {this.state.current === 1 ? (
          <View className="model-list">
            <Gallery models={this.state.woman}></Gallery>
          </View>
        ) : null}
      </BasePage>
    );
  }
}

export default Index;
