import { SET_DANH_SACH_PHIM } from "../actions/types/QuanLyPhimType"

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 5163,
            "tenPhim": "Thợ Săn Quái Vật - Monster Hunter",
            "biDanh": "tho-san-quai-vat-monster-hunter",
            "trailer": "https://www.youtube.com/embed/puQyZsaTtqY",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tho-san-quai-vat-monster-hunter_gp01.png",
            "moTa": "Monster Hunter được chuyển thể từ series game nổi tiếng cùng tên của Capcom. Trong phim, đội trưởng Artemis của nữ diễn viên Milla Jovovich (Resident Evil) và đồng đội đã vô tình bước qua một cánh cửa bí ẩn dẫn tới thế giới khác. Tại đây, họ phải chiến đấu với nhiều loài quái vật khổng lồ trong hành trình trở về thế giới. Đồng hành với họ trong trận chiến là nhân vật “Thợ săn” của nam diễn viên Tony Jaa (Ong Bak). Monster Hunter hứa hẹn sẽ là bom tấn hành động với những màn săn quái vật khổng lồ hoành tráng nhất năm 2020.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-10-22T08:00:41.173",
            "danhGia": 10,
            "hot": true,
            "dangChieu": false,
            "sapChieu": false
        },
        {
            "maPhim": 5163,
            "tenPhim": "Thợ Săn Quái Vật - Monster Hunter",
            "biDanh": "tho-san-quai-vat-monster-hunter",
            "trailer": "https://www.youtube.com/embed/puQyZsaTtqY",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tho-san-quai-vat-monster-hunter_gp01.png",
            "moTa": "Monster Hunter được chuyển thể từ series game nổi tiếng cùng tên của Capcom. Trong phim, đội trưởng Artemis của nữ diễn viên Milla Jovovich (Resident Evil) và đồng đội đã vô tình bước qua một cánh cửa bí ẩn dẫn tới thế giới khác. Tại đây, họ phải chiến đấu với nhiều loài quái vật khổng lồ trong hành trình trở về thế giới. Đồng hành với họ trong trận chiến là nhân vật “Thợ săn” của nam diễn viên Tony Jaa (Ong Bak). Monster Hunter hứa hẹn sẽ là bom tấn hành động với những màn săn quái vật khổng lồ hoành tráng nhất năm 2020.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-10-22T08:00:41.173",
            "danhGia": 10,
            "hot": true,
            "dangChieu": false,
            "sapChieu": false
        }
    ]
}

export const QuanLyPhimReducer = (state =stateDefault,action) => {
    switch(action.type){
        case SET_DANH_SACH_PHIM :{
            state.arrFilm = action.arrFilm
            return {...state}
        }
        default:return {...state}
    }
}