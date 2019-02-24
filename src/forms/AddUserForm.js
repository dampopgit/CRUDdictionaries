import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, product: '', color: '', price: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Product</label>
			<input type="text" name="product" value={user.product} onChange={handleInputChange} />
			<label>Color</label>
			<input type="text" name="color" value={user.color} onChange={handleInputChange} />
      <label>Price</label>
			<input type="text" name="price" value={user.price} onChange={handleInputChange} />
			<button>Add new Dictionary</button>
		</form>
	)
}

export default AddUserForm
