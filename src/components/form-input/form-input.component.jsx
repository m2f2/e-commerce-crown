import './form-input.style.scss'

// eslint-disable-next-line react/prop-types
const FormInput = ({label, ...otherProps})=>{
          return(
                    <div className="group">
                              <input className="form-input" {...otherProps}/>
                             {label&&(<label className={`form-input-label ${otherProps.value.length? 'shrink': ''}`}>{label}</label>)} 
                    </div>
          )
}

export default FormInput;