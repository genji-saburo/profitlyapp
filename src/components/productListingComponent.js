import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Row, 
  Col, 
  Button,
  Input,
  Dropdown, DropdownMenu, DropdownToggle
} from 'reactstrap';
import ReactStars from 'react-stars';
import InputRange from 'react-input-range';
import Switch from "react-switch";

import '../styles/components/home.css';
import '../styles/index.css';

import HeaderInnerComponent from "./HeaderInnerComponent";
import FooterInnerComponent from "./FooterInnerComponent";
import productimg1 from "../styles/images/products1.png";
import addWhishList from "../styles/images/icon-plus-sm.png";
import iconLike from "../styles/images/icon-like-gray-sm.png";
import iconstags from "../styles/images/icon-tags.png";
import iconrating from "../styles/images/icon-rating.png";
import icongrantee from "../styles/images/icon-guarantee.png";
import iconEye from "../styles/images/icon-eye.png";
import iconTimes from "../styles/images/icon-times.png";
import iconEpack from "../styles/images/icon-epacket.png";
import iconClear from "../styles/images/icon-clear.png";
import iconSort from "../styles/images/icon-sort.png";
import iconLockSm from "../styles/images/icon-lock-sm.png";

class productListingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price_range: {
        min: 5,
        max: 10,
      },
      checked: false,
      sortBy: false,
      viewType: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.sortByToggle = this.sortByToggle.bind(this);
    this.viewTypeToggle = this.viewTypeToggle.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  sortByToggle() {
    this.setState({
      sortBy: !this.state.sortBy
    });
  }
  viewTypeToggle() {
    this.setState({
      viewType: !this.state.viewType
    });
  }
  

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
                  <h1 className="heading-main colfax-bold mb-0">The World’s Top 1,000</h1>
                  <div className="rating-star text-center">
                    <div className="rating-with-count">
                      <ReactStars className="stars" 
                        count={5}
                        value={5}
                        size={30}
                        color2={'#ffcc48'}
                      />
                      <span className="rating-count">4.9</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
        </div>
        <div className="content-area products">
          <Container>
            <Row>
              <Col xl={12} lg={12} md={12} xs={12} sm={12}>
                <div className="product-filters">
                  <div className="filter-box product-type">
                    <label className="filter-label">Product List</label>
                    <Input className="custom-select form-control-transparent" type="select" name="select">
                      <option>Top 1,000</option>
                      <option>Dropship</option>
                    </Input>
                  </div>
                  <div className="filter-box categories">
                    <label className="filter-label">Category</label>
                    <Input className="custom-select form-control-transparent" type="select" name="select">
                      <option>Everything</option>
                      <option>Electronics</option>
                      <option>Women’s</option>
                      <option>Men’s</option>
                      <option>Sports & Outdoors</option>
                      <option>Kids</option>
                      <option>Home & Garden</option>
                      <option>Photography</option>
                      <option>Music</option>
                    </Input>
                  </div>
                  <div className="filter-box price-range">
                    <label className="filter-label">Price Range</label>
                    <div className="filter-output">$0 - $64</div>
                    <div className="drop-element">
                      <InputRange
                      maxValue={20}
                      minValue={0}
                      formatLabel={value => `$ ${value}`}
                      value={this.state.price_range}
                      onChange={value => this.setState({ price_range: value })} />
                    </div>
                  </div>
                  <div className="filter-box review-rating">
                    <label className="filter-label">Review Score</label>
                    <div className="filter-output">Minimum: 3/5 Stars</div>
                    <div className="drop-element">
                      <div className="rating-star text-center">
                        <ReactStars className="filters-rating" 
                          count={5} 
                          value={4}
                          size={30} 
                          color2={'#ffcc48'} 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="filter-box epacket">
                    <label className="filter-label">ePacket Only</label>
                    <div className="switch-wrp text-center">
                      <Switch
                        checked={this.state.checked}
                        onChange={this.handleChange}
                        offColor="#95e597"
                        onColor="#95e597"
                        offHandleColor="#3ec441"
                        onHandleColor="#3ec441"                        
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={20}
                        width={48}
                        className="react-switch"
                        id="epacket-switch"
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xl={4} lg={4} md={4} xs={12} sm={4}>
                <Button className="btn-filert"><img src={iconClear} alt="" />Clear Filters</Button>
              </Col>
              <Col xl={4} lg={4} md={4} xs={12} sm={4} className="text-center">
                <Button className="btn-filert">Results (1,234 Found)</Button>
              </Col>
              <Col xl={2} lg={2} md={2} xs={12} sm={2}>
                <Dropdown className="toggled-menu" isOpen={this.state.sortBy} size="lg" toggle={this.sortByToggle}>
                  <DropdownToggle className="btn-filert btn-block float-right">
                    <img src={iconSort} alt="" />View
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-right">
                    <Link to="/product_listing">List</Link>
                    <Link to="/home">Grid</Link>
                  </DropdownMenu>
                </Dropdown>
              </Col>
              <Col xl={2} lg={2} md={2} xs={12} sm={2}>
                <Dropdown className="toggled-menu" isOpen={this.state.viewType} size="lg" toggle={this.viewTypeToggle}>
                  <DropdownToggle className="btn-filert btn-block float-right">
                    <img src={iconSort} alt="" />Sort By
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-right">
                    <Link to="/home">Price: High to Low</Link>
                    <Link to="/">Price: Low to High</Link>
                    <Link to="/">Orders: High to Low</Link>
                    <Link to="/">Orders: Low to High</Link>
                    <Link to="/">Ranking: High to Low</Link>
                    <Link to="/">Ranking: Low to High</Link>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xl={12} lg={12} md={12} xs={12} sm={12}>
                <div className="product-listing">
                  <div className="product-row">
                    <div className="listing-box product-number">
                      <div className="check-tag">
                        <img src={iconTimes} alt="" />
                      </div>
                      <span>1</span>
                    </div>
                    <div className="listing-box product-img">
                      <figure><img className="img-fluid" src={productimg1} alt="" /></figure>
                    </div>
                    <div className="listing-box product-info">
                      <Row className="align-items-center h-100">
                        <Col xl={8} lg={8} md={8} xs={12} sm={8}>
                          <div className="product-name">
                            <h4 className="mb-0">
                              <Link to="/">Xiaomi Wifi Extender</Link>
                            </h4>
                            <div className="time-tag">2 Days Ago</div>
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
                              <li>
                                <img src={iconEpack} alt="" /> <span>ePack</span>
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} xs={12} sm={4}>
                          <div className="top-option-wrp">
                            <ul>
                              <li className="like"><img src={iconEye} alt="" /></li>
                              <li className="like"><img src={iconLike} alt="" /></li>
                              <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                            </ul>
                            <span className="price-box">$15</span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="product-row">
                    <div className="listing-box product-number">
                      <span>2</span>
                    </div>
                    <div className="listing-box product-img">
                      <figure><img className="img-fluid" src={productimg1} alt="" /></figure>
                    </div>
                    <div className="listing-box product-info">
                      <Row className="align-items-center h-100">
                        <Col xl={8} lg={8} md={8} xs={12} sm={8}>
                          <div className="product-name">
                            <h4 className="mb-0">
                              <Link to="/">Bluetooth Smartlock</Link>
                            </h4>
                            <div className="time-tag">2 Days Ago</div>
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
                              <li>
                                <img src={iconEpack} alt="" /> <span>ePack</span>
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} xs={12} sm={4}>
                          <div className="top-option-wrp">
                            <ul>
                              <li className="like"><img src={iconEye} alt="" /></li>
                              <li className="like"><img src={iconLike} alt="" /></li>
                              <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                            </ul>
                            <span className="price-box">$15</span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="product-row">
                    <div className="listing-box product-number">
                      <div className="check-tag">
                        <img src={iconTimes} alt="" />
                      </div>
                      <span>3</span>
                    </div>
                    <div className="listing-box product-img">
                      <figure><img className="img-fluid" src={productimg1} alt="" /></figure>
                    </div>
                    <div className="listing-box product-info">
                      <Row className="align-items-center h-100">
                        <Col xl={8} lg={8} md={8} xs={12} sm={8}>
                          <div className="product-name">
                            <h4 className="mb-0">360º Smart Toothbrush</h4>
                            <div className="time-tag">2 Days Ago</div>
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
                              <li>
                                <img src={iconEpack} alt="" /> <span>ePack</span>
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} xs={12} sm={4}>
                          <div className="top-option-wrp">
                            <ul>
                              <li className="like"><img src={iconEye} alt="" /></li>
                              <li className="like"><img src={iconLike} alt="" /></li>
                              <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                            </ul>
                            <span className="price-box">$15</span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="product-row">
                    <div className="listing-box product-number">
                      <div className="check-tag">
                        <img src={iconTimes} alt="" />
                      </div>
                      <span>4</span>
                    </div>
                    <div className="listing-box product-img">
                      <figure><img className="img-fluid" src={productimg1} alt="" /></figure>
                    </div>
                    <div className="listing-box product-info">
                      <Row className="align-items-center h-100">
                        <Col xl={8} lg={8} md={8} xs={12} sm={8}>
                          <div className="product-name">
                            <h4 className="mb-0">Xiaomi Wifi Extender</h4>
                            <div className="time-tag">2 Days Ago</div>
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
                              <li>
                                <img src={iconEpack} alt="" /> <span>ePack</span>
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} xs={12} sm={4}>
                          <div className="top-option-wrp">
                            <ul>
                              <li className="like"><img src={iconEye} alt="" /></li>
                              <li className="like"><img src={iconLike} alt="" /></li>
                              <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                            </ul>
                            <span className="price-box">$12</span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="product-row">
                    <div className="listing-box product-number">
                      <span>5</span>
                    </div>
                    <div className="listing-box product-img">
                      <figure><img className="img-fluid" src={productimg1} alt="" /></figure>
                    </div>
                    <div className="listing-box product-info">
                      <Row className="align-items-center h-100">
                        <Col xl={8} lg={8} md={8} xs={12} sm={8}>
                          <div className="product-name">
                            <h4 className="mb-0">Mens Black Watch</h4>
                            <div className="time-tag">2 Days Ago</div>
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
                              <li>
                                <img src={iconEpack} alt="" /> <span>ePack</span>
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} xs={12} sm={4}>
                          <div className="top-option-wrp">
                            <ul>
                              <li className="like"><img src={iconEye} alt="" /></li>
                              <li className="like"><img src={iconLike} alt="" /></li>
                              <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                            </ul>
                            <span className="price-box">$9</span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="product-row">
                    <div className="listing-box product-number">
                      <span>6</span>
                    </div>
                    <div className="listing-box product-img">
                      <figure><img className="img-fluid" src={productimg1} alt="" /></figure>
                    </div>
                    <div className="listing-box product-info">
                      <Row className="align-items-center h-100">
                        <Col xl={8} lg={8} md={8} xs={12} sm={8}>
                          <div className="product-name">
                            <h4 className="mb-0">Wireless Headphones</h4>
                            <div className="time-tag">2 Days Ago</div>
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
                              <li>
                                <img src={iconEpack} alt="" /> <span>ePack</span>
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} xs={12} sm={4}>
                          <div className="top-option-wrp">
                            <ul>
                              <li className="like"><img src={iconEye} alt="" /></li>
                              <li className="like"><img src={iconLike} alt="" /></li>
                              <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                            </ul>
                            <span className="price-box">$18</span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="product-row">
                    <div className="listing-box product-number">
                      <div className="check-tag">
                        <img src={iconTimes} alt="" />
                      </div>
                      <span>7</span>
                    </div>
                    <div className="listing-box product-img">
                      <figure><img className="img-fluid" src={productimg1} alt="" /></figure>
                    </div>
                    <div className="listing-box product-info">
                      <Row className="align-items-center h-100">
                        <Col xl={8} lg={8} md={8} xs={12} sm={8}>
                          <div className="product-name">
                            <h4 className="mb-0">Charging Dock</h4>
                            <div className="time-tag">2 Days Ago</div>
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
                              <li>
                                <img src={iconEpack} alt="" /> <span>ePack</span>
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} xs={12} sm={4}>
                          <div className="top-option-wrp">
                            <ul>
                              <li className="like"><img src={iconEye} alt="" /></li>
                              <li className="like"><img src={iconLike} alt="" /></li>
                              <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                            </ul>
                            <span className="price-box">$12</span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="product-row">
                    <div className="listing-box product-number">
                      <span>8</span>
                    </div>
                    <div className="listing-box product-img">
                      <div className="lock-overlay">
                        <img className="img-fluid" src={iconLockSm} alt="" />
                      </div>
                      <figure><img className="img-fluid" src={productimg1} alt="" /></figure>
                    </div>
                    <div className="listing-box product-info">
                      <div className="lock-overlay">
                        <h4><img className="img-fluid" src={iconLockSm} alt="" /> Unlock This Product</h4>
                      </div>
                      <Row className="align-items-center h-100">
                        <Col xl={8} lg={8} md={8} xs={12} sm={8}>
                          <div className="product-name">
                            <h4 className="mb-0">Magnetic AirPod Straps</h4>
                            <div className="time-tag">2 Days Ago</div>
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
                              <li>
                                <img src={iconEpack} alt="" /> <span>ePack</span>
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} xs={12} sm={4}>
                          <div className="top-option-wrp">
                            <ul>
                              <li className="like"><img src={iconEye} alt="" /></li>
                              <li className="like"><img src={iconLike} alt="" /></li>
                              <li className="add-wsh-list"><img src={addWhishList} alt="" /></li>
                            </ul>
                            <span className="price-box">$15</span>
                          </div>
                        </Col>
                      </Row>
                    </div>
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

export default productListingComponent;
