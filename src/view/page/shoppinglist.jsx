// import React, { Component } from 'react';
// class ShoppingList extends Component {
//     render() {
//         return (
//             <div className="shopping-list">
//                 <h1>Shopping List for {this.props.name}</h1>
//                 <ul>
//                     <li>Instagram</li>
//                     <li>WhatsApp</li>
//                     <li>Oculus</li>
//                 </ul>
//             </div>
//         );
//     }
// }

// export default ShoppingList;
import React, { Component } from 'react'
export default class ShoppingList extends Component {
    render() {
        return (
            <div className="shipping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>Line</li>
                    <li>WhatsApp</li>
                    <li>Google</li>
                </ul>
            </div>
        )
    }
}