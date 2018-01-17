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



class listItem extends Component {
    render() {
        return (
            <li>
                {this.props.link}
            </li>
        );
    }
}




class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: '',
            desc: '',
        }
        this.handleClick = this.handleClick(this);
    }

    render() {

        return (
            <div>
                <h2>Platform Features</h2>
                <ul>
                    <listItem/>
                </ul>
                
            </div>
        );
    }
}

export default Features;