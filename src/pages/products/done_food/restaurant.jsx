import React from 'react'
import { Link } from 'react-router-dom'
import { DoneCatalog } from './catalogs/done_catatlog'
import { DoneRibbons } from './ribbons/done_ribbons'

export const Restaurant = () => {
	return (
		<div>
			<div className='allLavka'>
				<div className=' mt-5'>
					<nav className=' flex '>
						<Link to='/' className=' text-slate-400'>
							Главная /
						</Link>
						<Link to='/streetFood' className=' text-slate-400'>
							Из ресторанов
						</Link>
					</nav>
				</div>
				<h1 className=' mt-6  text-6xl font-bold'>Из ресторанов</h1>
				<div className='allLavka__lenta'>
					<div className='productsCatalog'>
						<DoneCatalog />
					</div>
					<div className='productsRibbon'>
						<DoneRibbons />
					</div>
				</div>
			</div>
		</div>
	)
}
