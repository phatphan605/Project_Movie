import { SET_CAROUSEL } from "../actions/types/CarouselType";

const stateDefault = {
    arrImg:[{
        "maPhim": 8971,
        "tenPhim": "Chìa khoá trăm tỉ",
        "biDanh": "chia-khoa-tram-ti",
        "trailer": "https://www.youtube.com/watch?v=XaTIPVoIGaI",
        "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/chia-khoa-tram-ti_gp01.jpeg",
        "moTa": "Chìa Khoá Trăm Tỷ bắt đầu khi một sát thủ khét tiếng vô tình bị mất trí vì một tai nạn bất ngờ, rồi bắt đầu một cuộc sống mới bằng nghề diễn viên quần chúng. Chuyện gì sẽ xảy ra nếu chàng diễn viên quần chúng này quên hẳn cuộc đời sát thủ để trở thành một ngôi sao hành động? Liệu sự nghiệp diễn viên và cô quản lý bất đắc dĩ có giúp hắn thay đổi quá khứ mãi mãi và sống trọn vẹn một cuộc đời mới? Một bộ phim hài-hành động nhưng cũng đầy sự ấm áp về hành trình \"đổi đời\" của một kẻ giết thuê để mưu sinh.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2021-10-09T00:00:00",
        "danhGia": 10
    }

    ]}



export const CarouselReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CAROUSEL:{
            state.arrImg = action.arrImg;
            return {...state}
        }
        default: return { ...state }
    }
}