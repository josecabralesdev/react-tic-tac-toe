export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClik = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClik} className={className}>{children}</div>
  )
}