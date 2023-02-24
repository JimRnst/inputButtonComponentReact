import {FaCartPlus} from 'react-icons/fa'

const ButtonComponent = ({
    label = 'Default', variant = 'default', disabled, disableShadow, startIcon, endIcon, size, color
}) => {

    return (
        <button
            className={`${variant} ${size ? size : ''} ${disableShadow ? 'disableShadow' : ''} ${startIcon || endIcon ? 'icon' : ''} ${color ? color : ''}`}
            disabled={disabled}
        >
            {startIcon && <FaCartPlus />}
            {label}
            {endIcon && <FaCartPlus />}
        </button>
    )
}

export default ButtonComponent