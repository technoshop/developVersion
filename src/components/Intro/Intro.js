import React, { Component } from 'react';
import { ContainerFluid } from 'Src/theme/grid';
import Slide from './Slide';
import { } from './Intro.style';


export default class Slider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listOfPosts: this.props.itemsPost,
            currentPostId: this.props.itemsPost[0].id
        }
        this.currentPost = this.currentPost.bind(this);
    }

    currentPost(e) {
        let getNext = e.target.getAttribute('data-post');
        let element = document.getElementById("post");
        setTimeout(() => {
            this.setState({
                currentPostId: getNext
            });
            element.style.opacity = "0";
        }, 300);

    }

    render() {

        var current = this.state.currentPostId;
        var items = this.props.itemsPost.filter(function (l) {
            return l.id == current;
        });

        return (
            <div>
                <Slide {...items[0]} currentPost={this.currentPost} />
            </div>
        );
    }
}




