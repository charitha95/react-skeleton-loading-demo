import React, { Component } from 'react';
import Card from '../../components/Card';
import Controlers from '../../components/Controlers/Controlers';
import './style.css';

class PluginExplanation extends Component {

  state = {
    img: '',
    title: '',
    subTitle: '',
    body: ''
  }

  componentDidMount() {
    this.setPropData()
  }

  setPropData = () => {
    setTimeout(() => {
      this.setState({
        img: 'http://tinyimg.io/i/yUI0izC.png',
        title: 'Organic',
        subTitle: 'Cosmetics',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolorum, impedit laudantium excepturi qui ab repellendus.',
      })
    }, 3000);
  }

  resetHandler = () => {
    this.setState({
      img: '',
      title: '',
      subTitle: '',
      body: ''
    })
    this.setPropData();
  }
  render() {
    return <div className='exaple-block'>
      <Controlers />
      <Card img={this.state.img} title={this.state.title} subTitle={this.state.subTitle} body={this.state.body} />
      </div>
  }
}

export default PluginExplanation;
