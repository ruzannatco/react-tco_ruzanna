import './styles.css'
import {Img} from "../../atoms/img/Img";
import {LinkBtn} from "../../atoms/linkBtn/LinkBtn";
import {Heading} from "../../molecules/heading/Heading";

export const BestShops = () => {
    const bestShops = [
        {
            id: 1,
            link: 'http://www.amazon.com/',
            image: 'https://onex.am/images/shops/svg/amazon.svg'
        },
        {
            id: 2,
            link: 'https://alitems.com/g/1e8d114494357b293a5316525dc3e8/',
            image: 'https://onex.am/images/shops/svg/aliexpress.svg'
        },
        {
            id: 3,
            link: 'http://www.ebay.com/',
            image: 'https://onex.am/images/shops/svg/ebay.svg'
        },
        {
            id: 4,
            link: 'https://ad.admitad.com/g/fpas2hpfez357b293a53021476a526/',
            image: 'https://onex.am/images/shops/svg/carters.svg'
        },
        {
            id: 5,
            link: 'http://www.victoriassecret.com/',
            image: 'https://onex.am/images/shops/svg/vs.svg'
        },
        {
            id: 6,
            link: 'https://www.gap.co.uk/',
            image: 'https://onex.am/images/shops/svg/gap.svg'
        },
        {
            id: 7,
            link: 'https://lite.bz/NvUvd',
            image: 'https://onex.am/images/shops/svg/mk.svg'
        },
        {
            id: 8,
            link: 'http://www.forever21.com/',
            image: 'https://onex.am/images/shops/svg/forever21.svg'
        },
        {
            id: 9,
            link: 'https://www2.hm.com/en_gb/index.html',
            image: 'https://onex.am/images/shops/svg/hm.svg'
        },
        {
            id: 10,
            link: 'http://www.ralphlauren.com/',
            image: 'https://onex.am/images/shops/svg/rl.svg'
        },
        {
            id: 11,
            link: 'http://www.ozon.ru/',
            image: 'https://onex.am/images/shops/svg/ozon.svg'
        },
        {
            id: 12,
            link: 'https://www.taobao.com/',
            image: 'https://onex.am/images/shops/svg/taobao.svg'
        }
    ]
    const shopItems = bestShops.map((item) =>
        <li className="bestShops_item" key={item.id}>
            <a href={item.link}>
                <Img src={item.image}/>
            </a>
        </li>
    );

    return (
        <div className="bestShops">
            <Heading title="Լավագույն խանութներ"
                     subtitle="Միջազգային օնլայն խանութների 90%-ը առաքում չեն իրականացնում դեպի Հայաստան, սակայն ONEX-ի միջոցով կարող եք ստանալ Ձեր առաքանիները Հայաստանում ու Արցախում՝ արագ և ապահով"/>

            <ul className="bestShops_list list-unstyled">
                {shopItems}
            </ul>
            <LinkBtn link='https://onex.am/shops'>Բոլոր խանութները</LinkBtn>
        </div>
    );
}