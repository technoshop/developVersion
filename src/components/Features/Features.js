import React, { Component } from 'react';



var features = [
    {
        "link": "Digital Lightfield",
        "description": `Our lightfield photonics generate digital light at different depths and blend seamlessly with natural light to produce lifelike digital objects that coexist in the real world. This advanced technology allows our brain to naturally process digital objects the same way we do real-world objects, making it comfortable to use for long periods of time.`
    },
    {
        "link": "Visual Perception",
        "description": `Our lightfield photonics generate digital light at different depths and blend seamlessly with natural light to produce lifelike digital objects that coexist in the real world. This advanced technology allows our brain to naturally process digital objects the same way we do real-world objects, making it comfortable to use for long periods of time.`
    },
    {
        "link": "Persistent Objects",
        "description": `Our lightfield photonics generate digital light at different depths and blend seamlessly with natural light to produce lifelike digital objects that coexist in the real world. This advanced technology allows our brain to naturally process digital objects the same way we do real-world objects, making it comfortable to use for long periods of time.`
    },
]



class ListItem extends Component {
    render() {
        return (
            <li onClick={this.props.onClick}>
                {this.props.link}
            </li>
        );
    }
}




class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: features.link,
            desc: features.description,
        }
        this.handleClick = this.handleClick(this);
        this.renderDesc = this.renderDesc(this);
    }

    componentDidMount() {
        this.setState({
            links: features.link,
            desc: this.state.desc,
        })

    }
    handleClick() {
        this.setState({
            links: features.link,
            desc: this.state.desc,
        })
    }
    renderLinks(feature, i) {
        let link = feature.link;
        return <ListItem key={i} onClick={this.handleClick} link={link} />

    }
    renderDesc(feature, i) {
        return <li key={i}  >
            {feature.desc}
        </li>
    }

    render() {

        return (
            <div>
                <h2>Platform Features</h2>
                <ul>
                    {features.map((feature, i) => this.renderLinks(feature, i))}
                </ul>
                <ul>
                        {features.map((feature, i) => this.renderDesc(feature, i))}

                </ul>
            </div>
        );
    }
}

export default Features;