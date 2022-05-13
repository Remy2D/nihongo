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
                    onChange={() => this.props.handleChange(this.props.kana)}
                />
                {this.props.kana}
            </label>
        );
    }
}


export default KanaCheckbox;
