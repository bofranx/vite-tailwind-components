import ToggleInput from "./ToggleInput"

interface FormInputProps {
  name: string
  placeholder?: string
  title: string
  type: string
}
const FormInput = ({ name, placeholder, title, type }: FormInputProps) => {
  return (
    <div className="flex flex-col">
      {type == "checkbox" ?
        <ToggleInput name={name} title={title} />
        :
        <>
          <label
            className="text-sm font-semibold mx-1"
            htmlFor={name}>{title}
          </label>
          <input
            className="border rounded shadow mx-1 px-2 focus:outline-blue-200"
            name={name}
            placeholder={placeholder}
            type={type}
          >
          </input></>}
    </div>
  )
}

export default FormInput