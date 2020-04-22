import React, { Component } from 'react';
import Card from '../../components/Card';
import Controlers from '../../components/Controlers/Controlers';
import './style.css';

class PluginExplanation extends Component {

  state = {
    card: {
      img: '',
      title: '',
      subTitle: '',
      body: ''
    },
    elements: {
      img: {
        circle: true,
        height: 75,
        width: 75
      },
      title: {
        background: '#f0f0f0',
        pulse: '#f8f8f8'
      },
      sub: {
        width: '',
        center: true
      },
      body: {
        count: 4,
        margin: 5
      }
    },
    timeout: 3000
  }

  componentDidMount() {
    this.setPropData()
  }

  setPropData = () => {
    setTimeout(() => {
      this.setState({
        card: {
          img: 'http://tinyimg.io/i/yUI0izC.png',
          title: 'Organic',
          subTitle: 'Cosmetics',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolorum, impedit laudantium excepturi qui ab repellendus.'
        }
      })
    }, this.state.timeout);
  }

  applyHandler = () => {
    this.setState({
      card: {
        img: '',
        title: '',
        subTitle: '',
        body: ''
      }
    })
    this.setPropData();
  }

  imgChangeHandler = (e) => {
    const value = e.target.name === 'circle' ? e.target.checked : e.target.value
    this.setState({
      elements: {
        img: {
          ...this.state.elements.img,
          [e.target.name]: value
        },
        title: { ...this.state.elements.title },
        sub: { ...this.state.elements.sub },
        body: { ...this.state.elements.body }
      }
    })
  }


  titleChangeHandler = (e) => {
    this.setState({
      elements: {
        img: {
          ...this.state.elements.img,
        },
        title: {
          ...this.state.elements.title,
          [e.target.name]: e.target.value
        },
        sub: { ...this.state.elements.sub },
        body: { ...this.state.elements.body }
      }
    })
  }

  subChangeHandler = (e) => {
    const value = e.target.name === 'center' ? e.target.checked : e.target.value
    this.setState({
      elements: {
        img: {
          ...this.state.elements.img,
        },
        title: {
          ...this.state.elements.title,

        },
        sub: {
          ...this.state.elements.sub,
          [e.target.name]: value
        },
        body: { ...this.state.elements.body }
      }
    })
  }

  bodyChangeHandler = (e) => {
    this.setState({
      elements: {
        img: {
          ...this.state.elements.img,
        },
        title: {
          ...this.state.elements.title,

        },
        sub: {
          ...this.state.elements.sub
        },
        body: {
          ...this.state.elements.body,
          [e.target.name]: Number(e.target.value)
        }
      }
    })
  }

  timeOutChangeHandler = (e) => {
    this.setState({ timeout: e.target.value })
  }

  render() {
    return <div className='exaple-block'>
      <Controlers
        apply={this.applyHandler}
        imgChangeHandler={this.imgChangeHandler}
        titleChangeHandler={this.titleChangeHandler}
        subChangeHandler={this.subChangeHandler}
        bodyChangeHandler={this.bodyChangeHandler}
        timeOutChangeHandler={this.timeOutChangeHandler}
      />
      <Card card={this.state.card} elements={this.state.elements} />
    </div>
  }
}

export default PluginExplanation;
