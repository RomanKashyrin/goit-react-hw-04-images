import PropTypes from 'prop-types';

export default function Button({ onClick }) {
    return (
        <button type="button" onClick={onClick} className="Button">Load more</button>
    )
}

Button.protoType = {
    onClick: PropTypes.func,
}