import React from 'react'
import { ProductItems } from '../../../../components/productItems/productIems'

import { useSelector } from 'react-redux'

export const NewLavkaRibbon = () => {
	const productArray = useSelector(state => state.productSlice.productArray)

	const filterByCategoryNew = productArray => {
		if (
			productArray.category === 'Новое' &&
			productArray.product === 'Сладкое и снеки'
		) {
			return true
		}
		return false
	}

	const filterNew = productArray.filter(filterByCategoryNew)

	const filterByProduct = productArray => {
		if (
			productArray.category === 'Новое' &&
			productArray.product === 'Замороженные десерты и выпечка'
		) {
			return true
		}
		return false
	}

	const filterProduct = productArray.filter(filterByProduct)

	return (
		<div>
			<div className='allLavkaRibbon'>
				<div className='allLavkaRibbon__Products'>
					<h1 className=' text-3xl font-bold'>Сладкое и снеки</h1>
					<div className='productElements'>
						{filterNew.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
					<h1 className=' text-3xl font-bold'>
						Замороженные десерты и выпечка
					</h1>
					<div className='productElements'>
						{filterProduct.map(obj => (
							<ProductItems key={obj.id} {...obj} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
