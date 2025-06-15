import { Component, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import GlobalNavBar from "./custom-nav-bar";

import configStore from "./store";

import "./app.scss";

const store = configStore();

class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <GlobalNavBar title="标题" rightContent={null} />
        {this.props.children}
      </Provider>
    );
  }
}

export default App;
