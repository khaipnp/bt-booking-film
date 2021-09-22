import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { datGheAction } from '../redux/actions/action'
class HangGhe extends Component {
	renderGhe = () => {
		return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
			let cssGheDaDat = ''
			let disabled = false
			if (ghe.daDat) {
				cssGheDaDat = 'gheDuocChon'
				disabled = true
			}
			let cssGheDangDat = ''
			let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
				gheDangDat => gheDangDat.soGhe === ghe.soGhe
			)
			if (indexGheDangDat !== -1) {
				cssGheDangDat = 'gheDangChon'
			}
			return (
				<button
					disabled={disabled}
					className={`${cssGheDaDat} ${cssGheDangDat} ghe`}
					key={index}
					onClick={() => {
						this.props.datGhe(ghe)
					}}>
					{ghe.soGhe}
				</button>
			)
		})
	}
	renderSoHang = () => {
		return this.props.hangGhe.danhSachGhe.map((hang, index) => {
			return <button className='rowNumber'>{hang.soGhe}</button>
		})
	}
	renderHangGhe = () => {
		if (this.props.soHangGhe === 0) {
			return (
				<Fragment>
					{this.props.hangGhe.hang} {this.renderSoHang()}
				</Fragment>
			)
		} else {
			return (
				<Fragment>
					{this.props.hangGhe.hang} {this.renderGhe()}
				</Fragment>
			)
		}
	}

	render() {
		return <div className='text-light text-left ml-5 mt-5'>{this.renderHangGhe()}</div>
	}
}

const mapStateToProps = state => {
	return {
		danhSachGheDangDat: state.BookingReducer.danhSachGheDangDat
	}
}

const mapDispatchToProps = dispatch => {
	return {
		datGhe: ghe => {
			dispatch(datGheAction(ghe))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)
