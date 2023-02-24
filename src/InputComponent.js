import { FaPhoneAlt, FaUnlockAlt } from "react-icons/fa";

const InputComponent = ({
    placeholder = 'Placeholder', label = 'label', size = 'md', value, error, disabled, helperText, startIcon, endIcon, fullWidth,
    multiLine, rows
}) => {

    const classInp = () => {
        const siz = size ? size : '';
        const err = error ? 'error' : '';
        const sIcon = startIcon ? 'startIcon' : '';
        const eIcon = endIcon ? 'endIcon' : '';
        const fullW = fullWidth ? 'fullWidth' : '';
        
        return `${siz} ${err} ${sIcon} ${eIcon} ${fullW}`;
    }

    
  return (
    <>

        <span className={error ? 'error' : ''}>{label}</span>
        {multiLine ?
            <textarea 
                rows={rows}
                placeholder={placeholder}
                disabled={disabled}
                defaultValue={value}
            >
            </textarea>
        :
            <input 
                type="text"
                placeholder={placeholder}
                className={classInp()}
                disabled={disabled}
                defaultValue={value}
            />
        }
        {helperText && 
            <span className={error ? 'error' : ''}>{helperText}</span>
        }
        {startIcon &&
            <div className="start-Icon">
                <FaPhoneAlt />
            </div>
        }
        {endIcon &&
            <div className="end-Icon">
                <FaUnlockAlt />
            </div>
        }
    </>
  )
}

export default InputComponent