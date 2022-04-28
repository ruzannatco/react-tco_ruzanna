import './styles.css'
import {Img} from "../../atoms/img/Img";
import {ItemWithImg} from "../../molecules/itemWithImg/ItemWithImg";
import {LinkBtn} from "../../atoms/linkBtn/LinkBtn";
import {Heading} from "../../molecules/heading/Heading";


export const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Լուսանկարել դրսից',
            src: 'https://onex.am/images/smart_services/photo-camera.svg'
        },
        {
            id: 2,
            name: 'Լուսանկարել ներսից',
            src: 'https://onex.am/images/smart_services/photos-inside.svg'
        },
        {
            id: 3,
            name: 'Կանգնեցնել',
            src: 'https://onex.am/images/smart_services/stop.svg'
        },
        {
            id: 4,
            name: 'Ստուգել պատվերը',
            src: 'https://onex.am/images/smart_services/check-order.svg'
        },
        {
            id: 5,
            name: 'Չվերափաթեթավորել',
            src: 'https://onex.am/images/smart_services/single-package.svg'
        },
        {
            id: 6,
            name: 'Հավելյալ վերափաթեթավորում',
            src: 'https://onex.am/images/smart_services/repackaging.svg'
        },
        {
            id: 7,
            name: 'Փոխել ստացողին',
            src: 'https://onex.am/images/smart_services/change-receiver.svg'
        },
        {
            id: 8,
            name: 'Բաժանել մասերի',
            src: 'https://onex.am/images/smart_services/unboxing.svg'
        }
    ]
    const servicesItems = services.map((item) =>
        <ItemWithImg key={item.id} description={item.name} dataId={item.id} src={item.src}/>
    );

    return (
        <div className="box-shadow">
            <Heading greentitle="Smart" title=" Ծառայություններ"
                     subtitle="Նախքան առաքանու ԱՄՆ կամ Չինաստանի պահեստ հասնելը դուք կարող եք պատվիրել հետևյալ SMART ծառայությունները"/>

            <div className="Services inner-box">
                <div className="w-50 left-box">
                    <Img src="https://onex.am/images/smart-service.svg"/>
                </div>
                <div className="w-50 right-box">
                    <ul className="services list-unstyled">
                        {servicesItems}
                    </ul>
                    <LinkBtn link='https://onex.am/hy/pages/newwarehouse'>Ավելին </LinkBtn>
                </div>
            </div>
        </div>
    );
}