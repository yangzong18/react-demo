import React from 'react';
import Item from './item';
export default class Panel extends React.Component {

    render() {
        let items = [];

        if (this.props.items.length === 0) {
            items.push(<tr><th colSpan="5" className="tempEmpty">暂无用户</th></tr>);
        } else {
            this.props.items.forEach(item => {
                items.push(<Item key={item.key} item={item} removeStaffItem={this.props.removeStaffItem} detailStaffItem={this.props.detailStaffItem} />);
            });
        }

        return (
            <table className='itemPanel'>
                <tbody>
                    <tr>
                        <th className='itemTd'>姓名</th>
                        <th className='itemTd'>年龄</th>
                        <th className='itemTd'>身份</th>
                        <th className='itemTd'>性别</th>
                        <th className='itemTd'>操作</th>
                    </tr>
                </tbody>
                <tbody>{items}</tbody>
            </table>
        );
    }
}