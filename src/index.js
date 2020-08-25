import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Header from './view/common/header';
import Panel from './view/panel.jsx';
import Footer from './view/common/footer.jsx';
import Detail from './view/detail.jsx';
import * as serviceWorker from './serviceWorker';
import Staff from './view/staff.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      staff: new Staff(),
      staffDetail: null
    };
  }

  //增
  addStaffItem(item) {
    this.setState({
      staff: this.state.staff.addStaffItem(item)
    });
  }
  //删
  removeStaffItem(key) {
    this.setState({
      staff: this.state.staff.removeStaffItem(key)
    });
  }

	/*
	 *详情
	 */
  //打开
  detailStaffItem(key) {
    this.setState({
      staffDetail: this.state.staff.staff.filter(item => {
        return item.key === key;
      })[0]
    });
  }
  //关闭
  closeDetail() {
    this.setState({
      staffDetail: null
    });
  }
  //编辑
  editDetail(item) {
    this.setState({
      staff: this.state.staff.editStaffItem(item)
    });
  }

	/*
	 * 排序
	 */
  sortStaff(sortType) {
    this.setState({
      staff: this.state.staff.sortStaff(sortType)
    });
  }

	/*
	 * 筛选
	 */
  filtStaff(filtType) {
    this.setState({
      staff: this.state.staff.filtStaff(filtType)
    });
  }

	/*
	 * 搜索
	 */
  searchStaff(word) {
    this.setState({
      staff: this.state.staff.searchStaff(word)
    });
  }


  render() {
    return (
      <div>
        <Header sortStaff={this.sortStaff.bind(this)} filtStaff={this.filtStaff.bind(this)} searchStaff={this.searchStaff.bind(this)} />
        <Panel items={this.state.staff.staff} removeStaffItem={this.removeStaffItem.bind(this)} detailStaffItem={this.detailStaffItem.bind(this)} />
        <Footer addStaffItem={this.addStaffItem.bind(this)} />
        <Detail staffDetail={this.state.staffDetail} closeDetail={this.closeDetail.bind(this)} editDetail={this.editDetail.bind(this)} />
      </div>
    );
  }
}

// React.render(<App />, document.getElementById('app'));
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
