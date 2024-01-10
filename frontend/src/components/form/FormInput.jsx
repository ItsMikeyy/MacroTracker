import "./FormInput.css"
const FormInput = (props) => {
    return(
        <input className="form-input" name={props.name} placeholder={props.ph}></input>
    )
}

export default FormInput