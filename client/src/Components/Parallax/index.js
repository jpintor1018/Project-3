import React, {Component, Fragment} from "react";
import Scene from "react-parallax-3d";
 
class Parallax extends Component {
    state = { scene: 0 };
 
    render() {
        const scene = this.state.scene;
 
        return (
            <Fragment>
                <Scene
                    ID={0}
                    scene={scene}
                    img="https://thumbor.mumu.agency/unsafe/1000x562/https://www.theransomnote.com/media/articles/rare-african-music-tops-trendbases-restaurant-background-music-charts/4ca464fe-54ae-457f-8680-702aaa8a13ab.jpg"
                    title="THE SHED AT"
                    subTitle="DULWICH"
                />
                <Scene
                    ID={1}
                    scene={scene}
                    img="/background-img2.jpg"
                    title="SVG"
                    subTitle="REAL HOT"
                />
            </Fragment>
        );
    }
}

export default Parallax;