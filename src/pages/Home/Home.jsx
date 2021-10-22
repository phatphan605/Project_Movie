import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { useSelector, useDispatch } from 'react-redux';
 
import Film from '../../components/Film/Film';
import MultipleRows from '../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
export default function Home(props) {
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)
    const dispatch = useDispatch();
    console.log('propsHome', props)
    // const renderFilms = () => {
    //     return arrFilm.map((phim, index) => {
    //         return (


    //             <Film key={index}/>


    //         )
    //     })
    // }
    useEffect(()=>{
        const action = layDanhSachPhimAction();
        dispatch(action)
    },[])
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <MultipleRows arrFilm={arrFilm} />
                    {/* <div className="flex flex-wrap -m-4">
                        {renderFilms()}
                    </div> */}
                </div>
            </section>

            <div className="mx-36">

                <HomeMenu />

            </div>
        </div>
    )
}
