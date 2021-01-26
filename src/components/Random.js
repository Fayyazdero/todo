import React from 'react'
import Button from './Button'

const Random = ({title, editText, deleteText, checkedText, handleEdit,handleDelete, handleChecked, classNameTitle, classNameDelete  }) => {
  return (
    <div>

      <p className={classNameTitle}>{ title }</p>
      <Button onClick={handleEdit} btnText= {editText}/>
      <Button onClick={handleDelete} btnText= {deleteText} className={classNameDelete}/>
      <Button onClick={handleChecked} btnText={checkedText}/>
      
    </div>
  )
}

export default Random