import React, {Component} from 'react';
import './player.css';

export default class Player extends Component {
    render() {
        return (
            <video className="video"
                   src="https://renatocardoso17:!rc12341@tvheadend.renatocardoso.dev/stream/channelid/315082762?profile=matroska"
                   controls/>
        );
    }
}
