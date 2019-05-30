import React from "react"
import PropTypes from "prop-types"
import {Container} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MaterialInput extends React.Component {

    onChange(event) {
        this.setState({typed: event.target.value});
    }
    
    render() {
        return(
            <Container as="div" bsPrefix="material-input__container d-flex">
                <Container as="div" bsPrefix="input-element">
                    <FontAwesomeIcon icon={this.props.icon} className="input-icon"/>
                    <input id={this.props.id}
                        placeholder={this.props.placeholder}
                        name={this.props.name}
                        type={this.props.type}
                        value={this.props.value}
                        onChange={this.onChange.bind(this)}/>
                    <label id="placeholder-label" for={this.props.id}>{this.props.labText}</label>
                </Container>
            </Container>
        );
    }
}

MaterialInput.propTypes = {
    labText: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
    icon: PropTypes.object
}

export default MaterialInput;