import React, { Component } from 'react'
import ThongTinDatGhe from './ThongTinDatGhe'
import './style.css'
import danhSachHangGhe from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe'

class BookingFilm extends Component {
	renderHangGhe = () => {
		return danhSachHangGhe.map((hangGhe, index) => {
			return (
				<div key={index}>
					<HangGhe hangGhe={hangGhe} soHangGhe={index} />
				</div>
			)
		})
	}

	render() {
		return (
			<div className='bg-film'>
				<div className='overlay'>
					<div className='container'>
						<div className='row'>
							<div className='col-8 text-center'>
								<div className='text-light display-4 text-center'>Đặt vé xem phim</div>
								<div className='mt-3 text-warning' style={{ fontSize: '25px' }}>
									Màn hình
								</div>
								<div className='block-center mt-1'>
									<div className='screen'></div>
								</div>
								{this.renderHangGhe()}
							</div>
							<div className='col-4'>
								<div className='text-light mt-3' style={{ fontSize: '35px' }}>
									Danh Sách Ghế
								</div>
								<ThongTinDatGhe />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default BookingFilm
