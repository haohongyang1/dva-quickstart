import React, { Component } from "react";
import { connect } from "dva";
import { Table } from "antd";
const columns = [
  { title: "姓名", dataIndex: "name", key: "name" },
  { title: "年龄", dataIndex: "age", key: "age" },
  { title: "住址", dataIndex: "address", key: "address" },
];

@connect(({ example }) => ({ example }), {
  getProductData: (payload) => ({ type: "example/getProductData", payload }),
})
export default class ExamplePage extends Component {
  dataSearch = () => {
    this.props.getProductData();
  };
  render() {
    console.log("props,", this.props);
    const { data } = this.props.example;
    // 异步获取数据
    return (
      <div>
        ExamplePage
        <button onClick={this.dataSearch}>搜索</button>
        <Table columns={columns} dataSource={data}></Table>
      </div>
    );
  }
}
