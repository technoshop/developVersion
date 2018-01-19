import React, { Component } from 'react';
import { Btn } from './Features.style';
import * as vars from '../../theme/variables';
import { ContainerFluid, Container } from 'Src/theme/grid';



var features = [
    {
        "link": "Digital Lightfield",
        "description": `Our lightfield photonics generate digital light at different depths and blend seamlessly with natural light to produce lifelike digital objects that coexist in the real world. This advanced technology allows our brain to naturally process digital objects the same way we do real-world objects, making it comfortable to use for long periods of time.`,
        "id": "0"

    },
    {
        "link": "Visual Perception",
        "description": `The robust sensor suite on Magic Leap One detects surfaces, planes and objects, allowing for digital reconstruction of your physical surroundings. The result is a system that sees what you see, allowing lightfield objects to not only exist in the physical world but actually interact with it. Whether it’s virtual displays sitting alongside the computer monitor on your desk or a virtual panda that climbs across your living room couch, visual perception with machine learning unlocks the power of spatial computing.`,
        "id": "1"

    },
    {
        "link": "Persistent Objects",
        "description": `Our visual perception and room-mapping technology builds a digital replica of your physical environment – detecting and storing the precise location of walls, surfaces and other physical objects. Lightfield objects stay where you put them, just as they would in real life. Place a virtual TV on the wall over your fireplace and when you return later, the TV will be right where you left it.`,
        "id": "2"
    },
]


class ListItem extends Component {


    render() {
        return (
            this.props.features.map((feature, i) => {
                return <li className="features-link__li" key={i} >
                    <Btn style={{ color: i === 0 && vars.color_counter }} id={"btn" + i} value={i} className={feature.id === this.props.index && 'active'} onClick={this.props.onClick.bind(this)} index={this.props.index} >
                        {feature.link}
                    </Btn>
                </li>
            })
        );
    }

}

var indexx;
class Features extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        
        this.state = {
            features: features,
            link: features[0].link,
            description: features[0].description,
            style: null,
            index: 0,
        }
    }

    onClick(e) {
        e.preventDefault();
        document.getElementById("btn0").style = undefined;
        indexx = e.target.value;
        if (indexx !== this.state.index) {
            this.setState({
                style: 0
            })
            setTimeout(() => {
                this.setState({
                    features: features,
                    description: features[indexx].description,
                    style: 1,
                    index: indexx,
                    link: features[indexx].link,
                })
            }, 300)
        }
    }


    render() {
        let description = this.state.description;
        return (
            <Container>
                <div className="features">
                    <div className="feaures-list">
                        <h2 className="features-list__head" >Platform Features</h2>
                        <ul className="features-list__ul">
                            <ListItem index={this.state.index} onClick={this.onClick} features={this.state.features} />
                        </ul>
                    </div>
                    <div style={{ opacity: this.state.style }} className="feature-carousel">
                    <h3 className="feature-subhead" style={{ opacity: this.state.style }}>{this.state.link}</h3>
                        <p className="features-paragraph">
                            {this.state.description}
                        </p>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Features;