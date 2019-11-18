import React from 'react';
import Terminal from "../Components/displays/Terminal";
import CardList from "../Components/cards/CardList";



function OAuth() {
    return (
            <div className="page" style={{ textAlign: "center" }}>
                <p className="page-title">Simple OAuth with Node.js</p>
                <p style={{ fontSize: 20 }}>
                    Passport.js ontains support for over
                <span style={{ color: "var(--primary-red)" }}> 500+ </span>
                    Get started today with just a username and password for
                    apps like Facebook, Instagram, and Google.
            </p>
                <Terminal
                    userData={"passport.authenticate('facebook')"}
                    selected="All"
                />
                <p style={{ fontSize: 28 }}>
                    Popular Strategies
            </p>
                <CardList />
                <div style={{ marginBottom: 20 }} />
            </div>
    );
};

export default OAuth;