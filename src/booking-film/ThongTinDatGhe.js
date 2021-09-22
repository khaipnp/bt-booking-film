import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/actions/action'

class ThongTinDatGhe extends Component {
	render() {
		return (
			<div>
				<div className='mt-5'>
					<button className='gheDuocChon'></button>
					<span className='ml-3' style={{ fontSize: '25px', color: '#fff' }}>
						Ghế đã đặt
					</span>
					<br />
					<button className='gheDangChon mt-2'></button>
					<span className='ml-3' style={{ fontSize: '25px', color: '#fff' }}>
						Ghế đang đặt
					</span>
					<br />
					<button className='ghe mt-2' style={{ marginLeft: '0' }}></button>
					<span className='ml-3' style={{ fontSize: '25px', color: '#fff' }}>
						Ghế chưa chọn
					</span>
				</div>
				<div className='mt-5'>
					<table className='table table-bordered'>
						<thead>
							<tr>
								<th className='text-light'>Số ghế</th>
								<th className='text-light'>Giá</th>
								<th></th>
							</tr>
						</thead>
						<tbody className='text-warning'>
							{this.props.danhSachGheDangDat.map((gheDangDat, index) => {
								return (
									<tr key={index}>
										<td>{gheDangDat.soGhe}</td>
										<td>{gheDangDat.gia.toLocaleString()}</td>
										<td>
											<button
												onClick={() => {
													this.props.dispatch(huyGheAction(gheDangDat.soGhe))
												}}>
												Huỷ
											</button>
										</td>
									</tr>
								)
							})}
						</tbody>
						<tfoot>
							<tr className='text-warning'>
								<td>Tổng tiền</td>
								<td>
									{this.props.danhSachGheDangDat
										.reduce((tongTien, gheDangDat, index) => {
											return (tongTien += gheDangDat.gia)
										}, 0)
										.toLocaleString()}
								</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		danhSachGheDangDat: state.BookingReducer.danhSachGheDangDat
	}
}

export default connect(mapStateToProps)(ThongTinDatGhe)
