import '../tile_group/TileGroup.css';
import React from "react";


class KanaCheckbox extends React.Component {
    render() {
        return (
            <label className="KanaCheckbox">
                <input
                    className="KanaCheckboxInput"
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={() => this.props.handleChange(this)}
                />
                {this.props.romaji}
            </label>
        );
    }
}


export default KanaCheckbox;
