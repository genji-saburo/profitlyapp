import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import '../styles/components/home.css';
import '../styles/index.css';

import HeaderInnerComponent from "../components/HeaderInnerComponent";
import FooterInnerComponent from "../components/FooterInnerComponent";
import productimg from "../styles/images/products.png";
import productimg1 from "../styles/images/products1.png";
import productimg2 from "../styles/images/products2.png";
import addWhishList from "../styles/images/icon-wish-list.png";
import iconLike from "../styles/images/icon-like.png";
import iconstags from "../styles/images/icon-tags.png";
import iconrating from "../styles/images/icon-rating.png";
import icongrantee from "../styles/images/icon-guarantee.png";
import epacket from "../styles/images/epack.png";
import iconClear from "../styles/images/icon-clear.png";
import iconSort from "../styles/images/icon-sort.png";

class HomeComponent extends Component {
  render() {
    return (
    <Fragment>
      <HeaderInnerComponent />
      <div className="main">
        <div className="top-area text-center">
            <Container>
              <Row>
                <Col xl="12">
                  <div className="logos text-center">
                    <a href=""><img src="images/amazon.png" alt="" /></a>
                    <a href=""><img src="images/aliexpress.png" alt="" /></a>
                    <a href=""><img src="images/gearbest.png" alt="" /></a>
                    <a href=""><img src="images/wish.png" alt="" /></a>
                    <a href=""><img src="images/esty.png" alt="" /></a>
                    <a href=""><img src="images/ebay.png" alt="" /></a>
                    <a href=""><img src="images/rakuten.png" alt="" /></a>
                  </div>
                  <h1 className="heading-main colfax-bold">The world’s best-selling products, ranked from 1-1000.</h1>
                </Col>
              </Row>
            </Container>
        </div>
        <div className="content-area products">
            <Container>
              <Row>
                <Col xl={4} lg={4} md={4} xs={12} sm={4}>
                  <Button className="btn-filert"><img src={iconClear} alt="" />Clear Filters</Button>
                </Col>
                <Col xl={4} lg={4} md={4} xs={12} sm={4} className="text-center">
                  <Button className="btn-filert">Results (1,234 Found)</Button>
                </Col>
                <Col xl={4} lg={4} md={4} xs={12} sm={4}>
                  <Button className="btn-filert float-right"><img src={iconSort} alt="" />Sort By</Button>
                </Col>
              </Row>
            </Container>
            <Container fluid={true}>
              <Row>
                <Col xl={3} lg={4} md={6} xs={12} sm={6}>
                  <div className="product-box">
                    <div className="top-option-wrp">
                      <div className="count-tag">1</div>
                      <ul>
                        <li className="like"><img src={iconLike} alt="" /></li>
                        <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                      </ul>
                    </div>
                    <div className="product-thumbnail">
                      <figure>
                        <img className="img-fluid" src={productimg} alt="" />
                      </figure>
                    </div>
                    <div className="product-title">
                      <h4>Wireless Bluetooth Head</h4>
                      <span className="product-price">$24</span>
                    </div>
                    <div className="product-bottom">
                     <ul>
                        <li>
                          <img src={iconstags} alt="" /> <span>1.2K</span>
                        </li>
                        <li>
                          <img src={iconrating} alt="" /> <span>4.9</span>
                        </li>
                        <li>
                          <img src={icongrantee} alt="" /> <span>99%</span>
                        </li>
                      </ul>
                      <span className="epacket"><img src={epacket} alt="" /></span>
                    </div>
                  </div>
                </Col>
                <Col xl={3} lg={4} md={6} xs={12} sm={6}>
                  <div className="product-box">
                    <div className="top-option-wrp">
                      <div className="count-tag">1</div>
                      <ul>
                        <li className="like"><img src={iconLike} alt="" /></li>
                        <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                      </ul>
                    </div>
                    <div className="product-thumbnail">
                      <figure>
                        <img className="img-fluid" src={productimg1} alt="" />
                      </figure>
                    </div>
                    <div className="product-title">
                      <h4>iPhone Charging Dock</h4>
                      <span className="product-price">$24</span>
                    </div>
                    <div className="product-bottom">
                     <ul>
                        <li>
                          <img src={iconstags} alt="" /> <span>1.2K</span>
                        </li>
                        <li>
                          <img src={iconrating} alt="" /> <span>4.9</span>
                        </li>
                        <li>
                          <img src={icongrantee} alt="" /> <span>99%</span>
                        </li>
                      </ul>
                      <span className="epacket"><img src={epacket} alt="" /></span>
                    </div>
                  </div>
                </Col>
                <Col xl={3} lg={4} md={6} xs={12} sm={6}>
                  <div className="product-box">
                    <div className="top-option-wrp">
                      <div className="count-tag">1</div>
                      <ul>
                        <li className="like"><img src={iconLike} alt="" /></li>
                        <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                      </ul>
                    </div>
                    <div className="product-thumbnail">
                      <figure>
                        <img className="img-fluid" src={productimg2} alt="" />
                      </figure>
                    </div>
                    <div className="product-title">
                      <h4>Wireless Bluetooth Head</h4>
                      <span className="product-price">$24</span>
                    </div>
                    <div className="product-bottom">
                     <ul>
                        <li>
                          <img src={iconstags} alt="" /> <span>1.2K</span>
                        </li>
                        <li>
                          <img src={iconrating} alt="" /> <span>4.9</span>
                        </li>
                        <li>
                          <img src={icongrantee} alt="" /> <span>99%</span>
                        </li>
                      </ul>
                      <span className="epacket"><img src={epacket} alt="" /></span>
                    </div>
                  </div>
                </Col>
                <Col xl={3} lg={4} md={6} xs={12} sm={6}>
                  <div className="product-box">
                    <div className="top-option-wrp">
                      <div className="count-tag">1</div>
                      <ul>
                        <li className="like"><img src={iconLike} alt="" /></li>
                        <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                      </ul>
                    </div>
                    <div className="product-thumbnail">
                      <figure>
                        <img className="img-fluid" src={productimg2} alt="" />
                      </figure>
                    </div>
                    <div className="product-title">
                      <h4>Wireless Bluetooth Head</h4>
                      <span className="product-price">$24</span>
                    </div>
                    <div className="product-bottom">
                     <ul>
                        <li>
                          <img src={iconstags} alt="" /> <span>1.2K</span>
                        </li>
                        <li>
                          <img src={iconrating} alt="" /> <span>4.9</span>
                        </li>
                        <li>
                          <img src={icongrantee} alt="" /> <span>99%</span>
                        </li>
                      </ul>
                      <span className="epacket"><img src={epacket} alt="" /></span>
                    </div>
                  </div>
                </Col>
                <Col xl={3} lg={4} md={6} xs={12} sm={6}>
                  <div className="product-box">
                    <div className="top-option-wrp">
                      <div className="count-tag">1</div>
                      <ul>
                        <li className="like"><img src={iconLike} alt="" /></li>
                        <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                      </ul>
                    </div>
                    <div className="product-thumbnail">
                      <figure>
                        <img className="img-fluid" src={productimg} alt="" />
                      </figure>
                    </div>
                    <div className="product-title">
                      <h4>Wireless Bluetooth Head</h4>
                      <span className="product-price">$24</span>
                    </div>
                    <div className="product-bottom">
                     <ul>
                        <li>
                          <img src={iconstags} alt="" /> <span>1.2K</span>
                        </li>
                        <li>
                          <img src={iconrating} alt="" /> <span>4.9</span>
                        </li>
                        <li>
                          <img src={icongrantee} alt="" /> <span>99%</span>
                        </li>
                      </ul>
                      <span className="epacket"><img src={epacket} alt="" /></span>
                    </div>
                  </div>
                </Col>
                <Col xl={3} lg={4} md={6} xs={12} sm={6}>
                  <div className="product-box lockover">
                    <div className="top-option-wrp">
                      <div className="count-tag">1</div>
                      <ul>
                        <li className="like"><img src={iconLike} alt="" /></li>
                        <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                      </ul>
                    </div>
                    <div className="product-thumbnail">
                      <figure>
                        <img className="img-fluid" src={productimg} alt="" />
                      </figure>
                    </div>
                    <div className="product-title">
                      <h4>Wireless Bluetooth Head</h4>
                      <span className="product-price">$24</span>
                    </div>
                    <div className="product-bottom">
                     <ul>
                        <li>
                          <img src={iconstags} alt="" /> <span>1.2K</span>
                        </li>
                        <li>
                          <img src={iconrating} alt="" /> <span>4.9</span>
                        </li>
                        <li>
                          <img src={icongrantee} alt="" /> <span>99%</span>
                        </li>
                      </ul>
                      <span className="epacket"><img src={epacket} alt="" /></span>
                    </div>
                  </div>
                </Col>
                <Col xl={3} lg={4} md={6} xs={12} sm={6}>
                  <div className="product-box lockover">
                    <div className="top-option-wrp">
                      <div className="count-tag">1</div>
                      <ul>
                        <li className="like"><img src={iconLike} alt="" /></li>
                        <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                      </ul>
                    </div>
                    <div className="product-thumbnail">
                      <figure>
                        <img className="img-fluid" src={productimg} alt="" />
                      </figure>
                    </div>
                    <div className="product-title">
                      <h4>Wireless Bluetooth Head</h4>
                      <span className="product-price">$24</span>
                    </div>
                    <div className="product-bottom">
                     <ul>
                        <li>
                          <img src={iconstags} alt="" /> <span>1.2K</span>
                        </li>
                        <li>
                          <img src={iconrating} alt="" /> <span>4.9</span>
                        </li>
                        <li>
                          <img src={icongrantee} alt="" /> <span>99%</span>
                        </li>
                      </ul>
                      <span className="epacket"><img src={epacket} alt="" /></span>
                    </div>
                  </div>
                </Col>
                <Col xl={3} lg={4} md={6} xs={12} sm={6}>
                  <div className="product-box lockover">
                    <div className="top-option-wrp">
                      <div className="count-tag">1</div>
                      <ul>
                        <li className="like"><img src={iconLike} alt="" /></li>
                        <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                      </ul>
                    </div>
                    <div className="product-thumbnail">
                      <figure>
                        <img className="img-fluid" src={productimg} alt="" />
                      </figure>
                    </div>
                    <div className="product-title">
                      <h4>Wireless Bluetooth Head</h4>
                      <span className="product-price">$24</span>
                    </div>
                    <div className="product-bottom">
                     <ul>
                        <li>
                          <img src={iconstags} alt="" /> <span>1.2K</span>
                        </li>
                        <li>
                          <img src={iconrating} alt="" /> <span>4.9</span>
                        </li>
                        <li>
                          <img src={icongrantee} alt="" /> <span>99%</span>
                        </li>
                      </ul>
                      <span className="epacket"><img src={epacket} alt="" /></span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
        </div>
      </div>
      <FooterInnerComponent />
    </Fragment>
    );
  }
}

export default HomeComponent;
