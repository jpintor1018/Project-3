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
                    img="https://icarerepair.com/wp-content/uploads/2016/04/light-gray-background.jpg"
                    title="THE SHED AT"
                    subTitle="DULWICH"
                />
            </Fragment>
        );
    }
}

export default Parallax;