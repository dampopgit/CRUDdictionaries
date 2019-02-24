import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )


  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Product</label>
      <input type="text" name="product" value={user.product} onChange={handleInputChange} />
      <label>Color</label>
      <input type="text" name="color" value={user.color} onChange={handleInputChange} />
      <label>Price</label>
      <input type="text" name="price" value={user.price} onChange={handleInputChange} />
      <button>Update Table</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
