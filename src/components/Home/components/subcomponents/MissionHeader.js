import React, {Component} from 'react';

class MissionHeader extends Component {
    render() {
        const content = this.props.content

        return (
            <div>
                <h2>{content.header}</h2>
            </div>
        );
    }
}

export default MissionHeader;
