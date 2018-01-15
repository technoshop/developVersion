import React, { Component } from 'react';

export default class Slide extends Component {
    componentWillReceiveProps() {
        setTimeout(function () {
            var element = document.getElementById("post");
            element.style.opacity = "1";
        }, 100)
    }
    render() {

        return <div className="container">
            <div className="post" id="post">
                <img src={this.props.picture} />
                <p>{this.props.decription}</p>
                <span>{this.props.date}</span>
            </div>

            <div className="nav">
                {this.props.prevPost && <a 
                data-post={this.props.prevPost} 
                onClick={this.props.currentPost} className="btn-nav btn-prev">prev</a>}
                {this.props.nextPost && <a
                data-post={this.props.nextPost} 
                onClick={this.props.currentPost} className="btn-nav btn-next">next</a>}
            </div>
        </div>;
    }
};