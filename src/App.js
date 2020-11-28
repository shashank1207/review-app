import React, { Component } from 'react';
import './App.css';
import Products from './product_list';
import Viewers from './viewer_list';
import Reviews from './review_page';
import user from './user.png';

class App extends Component {

  state = {
    products: [
      { name: "Product_id_1", key: 1 }, { name: "Product_id_2", key: 2 }, { name: "Product_id_3", key: 3 }, { name: "Product_id_4", key: 4 },
      { name: "Product_id_5", key: 5 }, { name: "Product_id_6", key: 6 }, { name: "Product_id_7", key: 7 }, { name: "Product_id_8", key: 8 },
      { name: "Product_id_9", key: 9 }, { name: "Product_id_10", key: 10 }, { name: "Product_id_11", key: 11 }, { name: "Product_id_12", key: 12 },
      { name: "Product_id_13", key: 13 }, { name: "Product_id_14", key: 14 }, { name: "Product_id_15", key: 15 }, { name: "Product_id_16", key: 16 },
      { name: "Product_id_17", key: 17 }, { name: "Product_id_18", key: 18 }, { name: "Product_id_19", key: 19 }, { name: "Product_id_20", key: 20 }
    ],
    viewers: [
      { name: "viewer_1", key: 1 }, { name: "viewer_2", key: 2 }, { name: "viewer_3", key: 3 }, { name: "viewer_4", key: 4 }, { name: "viewer_5", key: 5 }, 
      { name: "viewer_6", key: 6 }, { name: "viewer_7", key: 7 }, { name: "viewer_8", key: 8 }, { name: "viewer_9", key: 9 }, { name: "viewer_10", key: 10 }, 
    ],
    clickedViewer: 0,
    clickedProduct: 0,
    reviews_No: null,
    isSelected: null
  };

  openProduct = (product_id) => {
    this.setState({
      clickedProduct:product_id 
    });
    // this.callApi();
  }

  openViewer = (viewer_id) => {
    this.setState({
      clickedViewer:viewer_id
    });
  };

    callApi = async() =>{
    const apiName = 'http://www.i2ce.in/reviews/'+this.state.clickedProduct+'/'+this.state.clickedViewer;
    const data = await fetch(apiName);
    const res = await data.json();
    this.setState({reviews_No: res,isSelected:true});
  };
  

  render() {
    return (
      <div className="container">
        <div className="header">
          <div className='user'>
            <div className='image'>
              <img src={user} alt='user' />
            </div>
            <div className= 'user-header'>
              <p>Viewer: {this.state.clickedViewer}</p>
            </div>
          </div>
        </div>
        <div className="main-contents">
          <div className="product-box">
            <h3 color='#3C1874'>Products</h3>
            <hr color='black' />
            <Products products={this.state.products} openProduct={this.openProduct}/>
          </div>
          <div className="viewer_box">
            <h3>Viewers</h3>
            <hr color='black' />
            <Viewers viewers = {this.state.viewers} openViewer={this.openViewer} />
            <div className='button' onClick={() =>{this.callApi()}}>
              <h4>Submit</h4>
            </div>
          </div>
          <div className="review-page">
            {
              !this.state.reviews_No?
              !this.state.isSelected?<div className='waiting'><h1>Please select product and viewer.</h1></div>:<div>...loading</div>:
              <Reviews reviews= {this.state.reviews_No} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
