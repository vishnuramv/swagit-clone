import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/img6.jpeg'
import img7 from '../assets/img7.jpeg'
import img8 from '../assets/img8.jpeg'
import img9 from '../assets/img9.jpeg'
import '../styles/looks.css'

const data = [
    {
        name: "Priyanka Chopra Jonas",
        instaUrl: "https://www.instagram.com/priyankachopra/",
        lookUrl: "https://www.swagit.in/shop-the-looks/priyanka-chopra-jonas-4",
        imgUrl: img1,
    },
    {
        name: "Karishma Kapoor",
        instaUrl: "https://www.instagram.com/therealkarismakapoor/",
        lookUrl: "https://www.swagit.in/shop-the-looks/karishma-kapoor-2",
        imgUrl: img2,
    },
    {
        name: "Bhumi Pednekar",
        instaUrl: "instagram.com/bhumipednekar/",
        lookUrl: "https://www.swagit.in/shop-the-looks/bhumi-pednekar",
        imgUrl: img3,
    },
    {
        name: "Taapsee Pannu",
        instaUrl: "instagram.com/_tapsee__/",
        lookUrl: "https://www.swagit.in/shop-the-looks/taapsee-pannu",
        imgUrl: img4,
    },
    {
        name: "Anushka Sharma",
        instaUrl: "instagram.com/anushkasharma/",
        lookUrl: "https://www.swagit.in/shop-the-looks/anushka-sharma-2",
        imgUrl: img5,
    },
    {
        name: "Deepika Padukone",
        instaUrl: "instagram.com/deepikapadukone/",
        lookUrl: "https://www.swagit.in/shop-the-looks/deepika-padukone-6",
        imgUrl: img6,
    },
    {
        name: "Sonam Kapoor",
        instaUrl: "instagram.com/sonamkapoor/",
        lookUrl: "https://www.swagit.in/shop-the-looks/sonam-kapoor-3",
        imgUrl: img7,
    },
    {
        name: "Malaika Arora",
        instaUrl: "https://www.instagram.com/malaikaaroraofficial/",
        lookUrl: "https://www.swagit.in/shop-the-looks/malaika-arora-2",
        imgUrl: img8,
    },
    {
        name: "Sara Ali Khan",
        instaUrl: "instagram.com/saraalikhan95/",
        lookUrl: "https://www.swagit.in/shop-the-looks/sara-ali-khan-2",
        imgUrl: img9,
    },
]

const Looks = () => {
    return (
        <div className="looks">
            <h1>SHOP THE LOOK</h1>
            <div className="looks__posts">
                {data.map((celeb, key) => (
                    <div className="looks__post" key={key}>
                        <a href={celeb.lookUrl} className="looks__postPhoto">
                            <img src={celeb.imgUrl} alt={celeb.name} />
                            <p>SHOP HER LOOK</p>
                        </a>
                        <p className="looks__postName">{celeb.name}</p>
                        <a href={celeb.instaUrl} className="looks__postInsta">©{celeb.instaUrl}</a>
                    </div>
                ))}
            </div>
            <div className="looks__next">
                <button>
                    Next
                    <svg class="w-pagination-next-icon" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" transform="translate(0, 1)"><path fill="none" stroke="currentColor" fill-rule="evenodd" d="M4 2l4 4-4 4"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default Looks
