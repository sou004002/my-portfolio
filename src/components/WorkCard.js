import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function WorkCard(props){
    return(
        <>
            <div>
                <a href={props.link} class="contentsName">{props.title}</a>
            </div>
            
             <Swiper 
                className="my-swiper"
                navigation={true}
                pagination={{
                    clickable:true,
                }}
                modules={[Navigation,Pagination]}
                >
        {props.image.map((data) => {
        return<SwiperSlide><img src={data} className={props.imageSize}/></SwiperSlide>;
        })}
            </Swiper>
            
                <div class="box26">
                    <span class="box-title">使用技術</span>
                    <ul>
                        {props.skill.map((data) =>{
                            return<li>{data}</li>
                        })}
                    </ul>
                </div>
                <p>{props.about}</p>

         </>
    );
};

export default WorkCard