import React, { useContext, useState } from "react";
import UserProvider from "../contexts/UserProvider";
import Terminal from "../Components/displays/Terminal";
import Col from "../Components/wrappers/Col";
import DataTags from "../Components/menus/DataTags";
import _ from "lodash";

const LoginMsg = "Nothing to show!";


const Profile = () => {
    const [selected, setSelected] = useState("All");
    const userData = useContext(UserProvider.context);
    const text = _.isEmpty(userData) ? LoginMsg : "Explore Your Data";
    const options = Object.keys(userData).filter(key => {
        return userData[key] !== null;
    });

    return (
        <div className="page">
            <p className="page-title" style={{ textAlign: "center" }}>
                {text}
            </p>

            <Col className="col-4" style={{ verticalAlign: "top" }}>
                <DataTags
                    options={options}
                    onClick={options => setSelected(options)}
                    selected={selected}
                />
            </Col>

            <Col className="col-8">
                <Terminal
                    userData={userData}
                    selected={selected}
                />
            </Col>
            <div style={{ marginBottom: 20 }} />
        </div>
    )

};

export default Profile;