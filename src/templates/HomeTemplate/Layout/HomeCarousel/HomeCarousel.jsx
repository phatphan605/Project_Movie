import React,{useEffect} from 'react'
import './HomeCarousel.css'
import { useSelector,useDispatch } from 'react-redux'
import { Carousel } from 'antd';
import { getCarouselAction } from './../../../../redux/actions/CarouselAction';
const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'
};
export default function HomeCarousel(props) {
    const { arrImg } = useSelector(state => state.CarouselReducer);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getCarouselAction)
        
    },[])
    
    const renderImg = () => {
        return arrImg.map((item, index) => {
            return (
                <div key={index}>
                    <div style={{...contentStyle,backgroundImage:`url(${item.hinhAnh})`}}>
                        <img src={item.hinhAnh} alt={item.hinhAnh} className="w-full opacity-1 object-fill" />
                    </div>
                </div>
            )
        })
    }
    return (
        <Carousel effect="fade">
            {renderImg()}
        </Carousel>

    )
}
