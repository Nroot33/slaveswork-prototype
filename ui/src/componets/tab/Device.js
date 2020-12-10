import React from 'react';
import { connect } from 'react-redux';
import { addDevice } from '../../service/store'

import './Device.css';

const Device = ({ devices, addDevice }) => {

    return (
        <div className="tab">
            <div className="tab_title_wrapper">
                <h4 id="tab_device_title">Connected Device</h4>
                <button id="device_delete_btn">Delete</button>
            </div>
            <div id="tab_device_list">
                {devices.length == 0 ?
                    <table className="full">
                        <tbody>
                            <tr>
                                <td id="empty">No connected devices.</td>
                            </tr>
                        </tbody>
                    </table>
                    :
                    <table>
                        <thead className="block">
                            <tr>
                                <th className="checkbox"><input type="checkbox" /></th>
                                <th className="name">Name</th>
                                <th className="cpu">CPU util.</th>
                                <th className="memory">Mem.</th>
                            </tr>
                        </thead>
                        <tbody className="block">
                            {devices.map(device => {
                                return (
                                    <tr key={device.id}>
                                        <td className="checkbox"><input type="checkbox" /></td>
                                        <td className="name">{device.name}</td>
                                        <td className="cpu">{device.cpu}</td>
                                        <td className="memory">{device.memory}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
}

const genDevice = (addDevice) => {
    addDevice({ device: {id : 1, name : "test", cpu : "0.0" , memory :"00,00"}})
}

const getCurrentState = (state, ownProps) => {
    console.log("host devices state :")
    console.log(state);
    return {
        devices: state.devices
    };
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDevice: (device) => dispatch(addDevice(device)),
    }
}
export default connect(getCurrentState, mapDispatchToProps)(Device);