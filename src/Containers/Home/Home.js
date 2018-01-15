import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Slider from '../../components/Intro/Intro';
var posts = [
    {
        "id": 5,
        "picture": "https://unsplash.it/200/300?image=200",
        "decription": "Exercitation irure sint fugiat do consequat nostrud Lorem voluptate elit adipisicing. Dolore sint adipisicing Lorem incididunt tempor ipsum pariatur exercitation deserunt elit sint duis laborum officia. Fugiat consequat sint laborum excepteur irure mollit ipsum dolor nulla anim velit incididunt aliquip est.\r\n",
        "date": "2016-03-30T08:31:51 -03:00",
        "tags": [
            "culpa",
            "velit",
            "dolor",
            "do",
            "aliqua",
            "qui",
            "commodo"
        ],
        "nextPost": 6
    },
    {
        "id": 6,
        "picture": "https://unsplash.it/200/300?image=201",
        "decription": "Cillum dolor culpa sit tempor culpa nisi laboris commodo esse eu cupidatat adipisicing. Ea sunt elit nostrud magna culpa labore nostrud ex excepteur amet pariatur aliqua ex. Sit est proident duis occaecat enim laboris est Lorem anim amet non in minim do. Excepteur adipisicing pariatur voluptate nisi culpa in velit commodo duis. Aliqua proident quis deserunt elit qui consectetur laboris dolore proident.\r\n",
        "date": "2016-05-01T12:35:27 -03:00",
        "tags": [
            "reprehenderit",
            "id",
            "duis",
            "ullamco",
            "sunt",
            "id",
            "cillum"
        ],
        "prevPost": 5,
        "nextPost": 7
    },
    {
        "id": 7,
        "picture": "https://unsplash.it/200/300?image=202",
        "decription": "Aliquip tempor fugiat Lorem non consectetur. Incididunt non velit elit deserunt quis eu consequat ut ullamco sint in est. Esse enim ullamco duis enim minim aliquip magna duis. In excepteur eiusmod culpa commodo nostrud laborum exercitation tempor. Nulla officia velit fugiat tempor commodo quis.\r\n",
        "date": "2014-09-29T04:25:33 -03:00",
        "tags": [
            "in",
            "laborum",
            "veniam",
            "Lorem",
            "cupidatat",
            "elit",
            "tempor"
        ],
        "prevPost": 6,
        "nextPost": 8
    },
    {
        "id": 8,
        "picture": "https://unsplash.it/200/300?image=203",
        "decription": "Labore pariatur consectetur ex eu mollit ad esse voluptate adipisicing sit commodo. Exercitation cupidatat mollit ipsum ex irure anim labore aliquip officia elit ea occaecat mollit eu. Ut nulla tempor dolore et nulla commodo irure minim nulla.\r\n",
        "date": "2015-02-28T02:01:37 -02:00",
        "tags": [
            "laborum",
            "proident",
            "nostrud",
            "commodo",
            "ipsum",
            "voluptate",
            "reprehenderit"
        ],
        "prevPost": 7,
        "nextPost": 9
    },
    {
        "id": 9,
        "picture": "https://unsplash.it/200/300?image=204",
        "decription": "Nulla aliquip adipisicing ex elit duis ipsum ad laboris reprehenderit nulla ullamco ipsum excepteur ex. Fugiat ea voluptate sint in anim voluptate ut laboris. Magna pariatur deserunt consectetur duis aute adipisicing duis ea tempor magna. Qui eu est elit commodo laboris. Velit eu sit ullamco nisi et ea pariatur fugiat in occaecat aliqua occaecat. Consequat ea labore commodo deserunt veniam ea do sunt nisi aliquip. Eiusmod et ullamco magna cupidatat culpa officia exercitation deserunt pariatur velit sint mollit.\r\n",
        "date": "2014-08-28T11:31:01 -03:00",
        "tags": [
            "fugiat",
            "ex",
            "irure",
            "anim",
            "culpa",
            "qui",
            "enim"
        ],
        "prevPost": 8
    }
]

class Home extends Component {
   

    render() {
        return (
            <div>
                <Hero></Hero>
                <Slider itemsPost={posts} />
            </div>
        );
    }
}

export default Home;
