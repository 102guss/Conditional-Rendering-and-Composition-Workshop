const InputNumber = ({ value, onChange, disabled }) => {
  return (
    <input
      type='number'
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder='Escribe un número'
    />
  )
}

export default InputNumber
