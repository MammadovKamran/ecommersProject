import { createSlice } from "@reduxjs/toolkit";
import phone from "./category-img/swiper-img1.png"
import compyuter from "./category-img/swiper-img2.png"
import accessories from "./category-img/swiper-img3.png"
import camera from "./category-img/swiper-img10.png"
import headPhones from "./category-img/swiper-img9.png"
import smartwatches from "./category-img/swiper-img8.png"
import pcgaming from "./category-img/swiper-img7.png"
import monitors from "./category-img/swiper-img5.png"
import laptops from "./category-img/swiper-img4.png"

export const category = createSlice({
    name: "category",
    initialState: {
        category: [
            {
                id: 1,
                title: "phones",
                img: phone
            },
            {
                id: 2,
                title: "compyuter",
                img: compyuter
            },
            {
                id: 3,
                title: "accessories",
                img: accessories
            },
            {
                id: 4,
                title: "laptops",
                img: laptops
            },
            {
                id: 5,
                title: "monitors",
                img: monitors
            },
            {
                id: 6,
                title: "pcgaming",
                img: pcgaming
            },
            {
                id: 7,
                title: "smartwatches",
                img: smartwatches
            },
            {
                id: 8,
                title: "head-phones",
                img: headPhones
            },
            {
                id: 9,
                title: "camera",
                img: camera
            },


        ]
    }
})

export default category.reducer;