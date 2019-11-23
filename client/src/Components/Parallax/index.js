import React, {Component, Fragment} from "react";
import Scene from "react-parallax-3d";
import './style.css'
 


class Parallax extends Component {
    state = { scene: 0 };
 
    render() {
        const scene = this.state.scene;
 
        return (
            <Fragment>
                <Scene
                    ID={0}
                    scene={scene}
                    img="http://businessinedmonton.com/wp-content/uploads/2018/07/iStock-685668626WEB.jpg"
                    title="WELCOME"
                 
                />
            </Fragment>
        );
    }
}

export default Parallax;