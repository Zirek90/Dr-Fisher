import React, {Component} from 'react';

class MissionHeader extends Component {
    render() {
        const content = this.props.content

        return (
            <div>
                {/*<h1>Inletta Sp. z o. o.</h1>*/}
                <h1>{content.header}</h1>
            </div>
        );
    }
}

export default MissionHeader;
