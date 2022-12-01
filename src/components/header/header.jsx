import React, { useCallback, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineViewList } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { RiMapPin2Fill } from 'react-icons/ri'
import { IoMdBasket } from 'react-icons/io'
import { BiSliderAlt } from 'react-icons/bi'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'
import { Search } from '../seacrh/search'

export const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>
				<Link to='/'>
					<img src='/assets/svg/LavkaLogo.svg' alt='' />
				</Link>
			</div>

			<div className='category'>
				<button>
					<HiOutlineViewList />
				</button>
			</div>

			<Search />

			<div className='map'>
				<button>
					<span>
						<RiMapPin2Fill className='map__flag' />
						Укажите адрес доставки
					</span>
				</button>
			</div>

			<div className='cart'>
				<button>
					<span>
						<IoMdBasket className='cart__basket' />
						Корзина
					</span>
				</button>
			</div>

			<div className='sorting'>
				<button>
					<span>
						<BiSliderAlt className='sorting__icon' />
					</span>
				</button>
			</div>

			<div className='plus'>
				<button>Plus</button>
			</div>

			<div className='signUp'>
				<Link to='/login'>
					<button>Войти</button>
				</Link>
			</div>
		</div>
	)
}
