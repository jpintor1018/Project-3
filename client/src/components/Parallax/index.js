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
                    img="https://us.123rf.com/450wm/viteethumb/viteethumb1801/viteethumb180100012/92938082-bar-de-mesa-superior-con-fondo-de-restaurante-blur-bar.jpg?ver=6"
                    title="SVG"
                    subTitle="REAL HOT"
                />
            </Fragment>
        );
    }
}

export default Parallax;