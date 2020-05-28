import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);


function Carousel(props) {
    const [index, setIndex] = useState(0);
    const [transition, setTransition] = useState(false);
    const [childWidth, setChildWidth] = useState(0);
    const childRef = useRef();
    const source = props.children;
    const children = [source[source.length - 2], source[source.length - 1], ...source, source[0], source[1]];
    useEffect(() => {

    });
    const next = () => {

    };
    const prev = () => {

    };
    const onNext = () => {

    };
    const onPrev = () => {

    };
    const childStyle = {
        transform: `translateX(calc(-${index + 2}00% + ((100vw - ${childWidth}px) / 2) + ${dragOffset}px))`,
        transition: transition ? 'transform 300ms ease-in-out' : 'none'
    };
    return (
        <div
            className={classNames('carousel', props.className)}
        >
            <div className="carousel-children">
                {
                    children.map((c, cIndex) => {
                        return (
                            <div key={`carouselItem1${cIndex}`} style={childStyle} ref={cIndex === 0 ? childRef : null}>{c}</div>
                        );
                    })
                }
            </div>
            <div className="carousel-prev" onClick={onPrev} />
            <div className="carousel-next" onClick={onNext} />
        </div>
    );
}

// class Carousel extends React.Component {
//     constructor(props) {
//         super(props);
//         this.next = this.next.bind(this);
//         this.prev = this.prev.bind(this);
//         this.onDragStart = this.onDragStart.bind(this);
//         this.onDragEnd = this.onDragEnd.bind(this);
//         this.onDragMove = this.onDragMove.bind(this);
//         this.getRef = this.getRef.bind(this);
//         this.getContainerRef = this.getContainerRef.bind(this);
//         this.stopAutoplay = this.stopAutoplay.bind(this);
//         this.onNext = this.onNext.bind(this);
//         this.onPrev = this.onPrev.bind(this);
//         const source = props.children;
//         const children = [source[source.length - 2], source[source.length - 1], ...source, source[0], source[1]];
//         this.state = {
//             children,
//             index: 0,
//             transition: false,
//             dragOffset: 0,
//             childWidth: 0
//         };
//     }

//     componentDidMount() {
//         // if (this.ref) {
//         //     this.ref.addEventListener('touchstart', this.onDragStart);
//         //     this.ref.addEventListener('touchend', this.onDragEnd);
//         //     this.ref.addEventListener('touchmove', this.onDragMove);
//         // }
//         if (this.childRef) {
//             setTimeout(() => {
//                 if (!this.unmount) {
//                     this.setState({
//                         childWidth: this.childRef.clientWidth - 24
//                     }, () => {
//                         // this is a trick to avoid transition happens as the carousel is rendered in start
//                         if (!this.unmount) {
//                             setTimeout(() => {
//                                 this.setState({
//                                     transition: true
//                                 });
//                             }, 300);
//                         }
//                     });
//                 }
//             }, 0);
//             const { autoplay, interval } = this.props;
//             if (autoplay) {
//                 this.autoplayInterval = setInterval(() => {
//                     if (!this.unmount) {
//                         this.next();
//                     }
//                 }, interval);
//             }
//         }
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.transition !== this.state.transition && !this.state.transition) {
//             const { direction } = this.state;
//             if (direction) {
//                 if (direction === 'next') {
//                     setTimeout(() => {
//                         this.setState({
//                             index: 0,
//                             transition: true
//                         });
//                     }, 0);
//                 } else if (direction === 'prev') {
//                     setTimeout(() => {
//                         this.setState({
//                             index: this.props.children.length - 1,
//                             transition: true
//                         });
//                     }, 0);
//                 }
//             }
//         }
//     }

//     componentWillUnmount() {
//         this.unmount = true;
//         this.stopAutoplay();
//     }

//     onDragStart(e) {
//         // e.preventDefault();
//         // console.log('onDragStart');
//         if (e.type === 'touchstart') {
//             this.posX1 = e.touches[0].clientX;
//         } else {
//             this.posX1 = e.clientX;
//             this.ref.addEventListener('mouseup', this.onDragEnd);
//             this.ref.addEventListener('mousemove', this.onDragMove);
//         }
//     }

//     onDragEnd(e) {
//         console.log(e);
//         this.ref.removeEventListener('mouseup', this.onDragEnd);
//         this.ref.removeEventListener('mousemove', this.onDragMove);
//         const distance = this.state.dragOffset;
//         if (Math.abs(distance) >= this.state.childWidth / 2) {
//             if (distance > 0) {
//                 this.prev();
//             } else {
//                 this.next();
//             }
//         } else {
//             this.setState({
//                 dragOffset: 0
//             });
//         }
//     }

//     onDragMove(e) {
//         e.preventDefault();
//         // console.log('onDragMove');
//         if (e.type === 'touchmove') {
//             this.posX2 = this.posX1 - e.touches[0].clientX;
//             this.posX1 = e.touches[0].clientX;
//         } else {
//             this.posX2 = this.posX1 - e.clientX;
//             this.posX1 = e.clientX;
//         }
//         console.log(this.state.dragOffset, this.posX2);
//         const dragOffset = this.state.dragOffset - this.posX2;
//         this.setState({
//             dragOffset
//         });
//     }

//     onNext(e) {
//         this.next(e);
//         this.stopAutoplay();
//     }

//     onPrev(e) {
//         this.prev(e);
//         this.stopAutoplay();
//     }

//     getRef(ref) {
//         this.ref = ref;
//     }

//     getContainerRef(ref) {
//         this.containerRef = ref;
//     }

//     next(e) {
//         if (e) {
//             e.stopPropagation();
//         }
//         const shouldRecover = this.state.index === this.props.children.length - 1;
//         const index = shouldRecover ? -1 : this.state.index + 1;
//         this.setState({
//             index,
//             transition: !shouldRecover,
//             dragOffset: 0,
//             direction: 'next'
//         }, () => {
//             // if (!this.state.transition) {
//             //     setTimeout(() => {
//             //         this.setState({
//             //             index: 0,
//             //             transition: true
//             //         });
//             //     }, 1);
//             // }
//         });
//     }

//     prev(e) {
//         if (e) {
//             e.stopPropagation();
//         }
//         const shouldRecover = this.state.index === 0;
//         const index = shouldRecover ? this.props.children.length : this.state.index - 1;
//         this.setState({
//             index,
//             transition: !shouldRecover,
//             dragOffset: 0,
//             direction: 'prev'
//         }, () => {
//             // if (!this.state.transition) {
//             //     setTimeout(() => {
//             //         this.setState({
//             //             index: this.props.children.length - 1,
//             //             transition: true
//             //         });
//             //     }, 1);
//             // }
//         });
//     }

//     stopAutoplay() {
//         if (this.autoplayInterval) {
//             clearInterval(this.autoplayInterval);
//         }
//     }

//     render() {
//         const { children, index, transition, dragOffset, childWidth } = this.state;
//         const { className } = this.props;
//         // console.log(index, transition, dragOffset);
//         const childStyle = {
//             transform: `translateX(calc(-${index + 2}00% + ((100vw - ${childWidth}px) / 2) + ${dragOffset}px))`,
//             transition: transition ? 'transform 300ms ease-in-out' : 'none'
//         };
//         return (
//             <div
//                 ref={this.getRef}
//                 // onMouseDown={this.onDragStart}
//                 className={`carousel ${className}`}
//             >
//                 <div className="carousel-children" ref={this.getContainerRef}>
//                     {
//                         children.map((c, cIndex) => {
//                             return (
//                                 <div key={`carouselItem1${cIndex}`} style={childStyle} ref={cIndex === 0 ? (ref) => { this.childRef = ref; } : null}>{c}</div>
//                             );
//                         })
//                     }
//                 </div>
//                 <div className="carousel-prev" onClick={this.onPrev} />
//                 <div className="carousel-next" onClick={this.onNext} />
//             </div>
//         );
//     }
// }

Carousel.propTypes = {
    children: PropTypes.array,
    className: PropTypes.string,
    autoplay: PropTypes.bool,
    interval: PropTypes.number
};

Carousel.defaultProps = {
    autoplay: false,
    interval: 5000
};

export default Carousel;
