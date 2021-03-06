import React from 'react';
import { Events, sendMessage } from '../../service/Message';
import { connect } from 'react-redux';

import './Home.css';

const genToken = () => {
    sendMessage(Events.appGenerateToken, {})
}

const Home = ({ ip, port, token }) => {

    return (
        <div className="tab">
            <h4 className="tab_home_title">My info</h4>
            <ul id="com_info">
                <li>
                    <label>IP</label>
                    <p>: {ip}</p>
                </li>
                <li>
                    <label>Port</label>
                    <p>: {port}</p>
                </li>
                <li>
                    <label>Token</label>
                    <p>: {token}</p>
                </li>
            </ul>
            <div className="tab_center">
                <button id="home_gen_btn" onClick={genToken}>Generate</button>
            </div>
        </div>
    );
}

const getCurrentState = (state, ownProps) => {
    console.log("host home state :")
    console.log(state);
    return {
        ip: state.info.ip,
        port: state.info.port,
        token: state.info.token
    };
}

export default connect(getCurrentState)(Home);