import { Component } from "react";
import { View } from "@tarojs/components";
import BasePage from "../../component/BasePage";
import { AtSegmentedControl } from "taro-ui";

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

type Model = {
  id: number;
  name: string;
  image: string;
};

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
          image: "",
        },
        {
          id: 2,
          name: "李四",
          image: "https://example.com/man2.jpg",
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
        {this.state.current === 0 ? <View>{}</View> : null}
        {this.state.current === 1 ? <View></View> : null}
      </BasePage>
    );
  }
}

export default Index;
