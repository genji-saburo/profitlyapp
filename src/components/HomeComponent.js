import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Row, 
  Col, 
  Button,
  Modal, 
  ModalBody, 
  ModalFooter,
  Input
} from 'reactstrap';
import ReactStars from 'react-stars';
import InputRange from 'react-input-range';
import Switch from "react-switch";

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
import slideProducts from "../styles/images/img-products.png";
import iconDownloadGray from "../styles/images/icon-download-gray.png";
import iconLikeGray from "../styles/images/icon-like-gray.png";
import iconPlusGray from "../styles/images/icon-plus-gray.png";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unLockProductsModal: false,
      missingLinksModal: false,
      productPreviewModal: false,
      price_range: {
        min: 5,
        max: 10,
      },
      checked: false
    };

    this.unLockProductsModal = this.unLockProductsModal.bind(this);
    this.missingLinksModal = this.missingLinksModal.bind(this);
    this.productPreviewModal = this.productPreviewModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  unLockProductsModal() {
    this.setState(prevState => ({
      unLockProductsModal: !prevState.unLockProductsModal
    }));
  }
  missingLinksModal() {
    this.setState(prevState => ({
      missingLinksModal: !prevState.missingLinksModal
    }));
  }

  productPreviewModal() {
    this.setState(prevState => ({
      productPreviewModal: !prevState.productPreviewModal
    }));
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
                  <h1 className="heading-main colfax-bold mb-0">The world’s best-selling products, ranked from 1-1000.</h1>
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
              <Col xl={4} lg={4} md={4} xs={12} sm={4}>
                <Button className="btn-filert float-right"><img src={iconSort} alt="" />Sort By</Button>
              </Col>
            </Row>
          </Container>
          <Container fluid={true}>
            <Row>
              <Col xl={3} lg={4} md={6} xs={12} sm={6}>
                <div className="product-box" onClick={this.productPreviewModal}>
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
                <div className="product-box lockover" onClick={this.missingLinksModal}>
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
                <div className="product-box lockover" onClick={this.unLockProductsModal}>
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
          <Modal className="products-modal product-preview-modal modal-dialog-centered modal-lg" isOpen={this.state.productPreviewModal} toggle={this.productPreviewModal}>
            <Button type="button" className="close" onClick={this.productPreviewModal}><span aria-hidden="true">×</span></Button>
            <ModalBody className="pl-5 pr-5">
              <Row>
                <Col xl={6} lg={6} md={6} xs={12} sm={6}>
                  <div className="preview-thumbnail text-center">
                    <figure>
                      <img className="img-fluid" src={productimg} alt="" />
                    </figure>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} xs={12} sm={6}>
                  <div className="product-detail text-center">
                      <div className="count-box">
                        <span>1</span>
                      </div>
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
                      <h3 className="prod-title">Insta Evo 360º Camera</h3>
                      <div className="btn-badge">
                        <span>Electronics</span>
                      </div>
                      <div className="detail-bottom">
                        <div className="price-tags">
                          <span className="old">$399</span>
                          <span className="new">$399</span>
                        </div>
                        <div className="product-action-btn">
                          <Link className="btn btn-danger" to="#">ePacket</Link>
                        </div>
                      </div>
                  </div>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter className="p-0 text-center">
              <div className="bottom-options">
                <Link className="choose-plan" to="#">View On AliExpress</Link>
                <Link className="choose-plan download" to="#"><img src={iconDownloadGray} alt="" /></Link>
                <Link className="choose-plan like" to="#"><img src={iconLikeGray} alt="" /></Link>
                <Link className="choose-plan add" to="#"><img src={iconPlusGray} alt="" /></Link>
              </div>
            </ModalFooter>
          </Modal>
          {/* Unlock Products Modal */}
          <Modal className="products-modal modal-dialog-centered" isOpen={this.state.unLockProductsModal} toggle={this.unLockProductsModal}>
            <Button type="button" className="close" onClick={this.unLockProductsModal}><span aria-hidden="true">×</span></Button>
            <ModalBody className="p-0 text-center">
              <div className="modal-top-area">
                <div className="btn-badge">
                  <span>Upgrade Your Plan</span>
                </div>
                <h2>This product is only available on the premium plan.</h2>
                <img className="img-fluid" src={slideProducts} alt="" />                    
              </div>
              <div className="modal-middle-area">
                <div className="btn-badge">
                  <span>Profitly Premium</span>
                </div>
                <h2>Unlock All Products</h2>
                <h5>Get unlimited access to all products and <br />suppliers by choosing a plan.</h5>
              </div>
            </ModalBody>
            <ModalFooter className="p-0 text-center">
              <Link className="choose-plan" to="#">Choose a Plan</Link>
            </ModalFooter>
          </Modal>
          {/* Missing Links Modal */}
          <Modal className="products-modal modal-dialog-centered" isOpen={this.state.missingLinksModal} toggle={this.missingLinksModal}>
              <Button type="button" className="close" onClick={this.missingLinksModal}><span aria-hidden="true">×</span></Button>
              <ModalBody className="p-0 text-center">
                <div className="modal-middle-area">
                  <div className="btn-badge">
                    <span>Report a Missing Link</span>
                  </div>
                  <h2>Is there a missing link?</h2>
                  <h5>
                    Due to the speed at which suppliers<br /> 
                    update product listings, links may <br />
                    sometimes dissappear. Please<br /> 
                    report the link below:
                  </h5>
                </div>
              </ModalBody>
              <ModalFooter className="p-0 text-center">
                <Link className="choose-plan" to="#">Report Missing Link</Link>
              </ModalFooter>
            </Modal>
        </div>
      </div>
      <FooterInnerComponent />
    </Fragment>
    );
  }
}

export default HomeComponent;
