import { createSlice } from '@reduxjs/toolkit'
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faCss3 } from "@fortawesome/free-brands-svg-icons"
import { faJs } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"

export const initialState = {
    loading: false,
    hasErrors: false,
    where:'',
    projects: [
        {
            id: 0,
            title: 'Reddit-Mini',
            brief:'Front-end application for Reddit',
            image:'/reddit.png',
            second_image:'/reddit_second.png',
            description:<p><b>Reddit Mini</b> is an unofficial version of a Reddit front-end app focused on simplifying and improving the user experience.</p>,
            challenge: <p>Build a front-end application for Reddit.<br></br> The application should integrate the <b>Reddit API</b> to allow users to view and search posts and comments.</p>,
            tools: [faJs, faReact, 'Redux'],
            colors:{
                background:'#D0D5D9', //Grey
                text:'#575759', //Dark grey
                highlight:'#FF6547', //Orange
                logo_color_normal:'invert(35%) sepia(5%) saturate(176%) hue-rotate(201deg) brightness(89%) contrast(84%)',
                logo_color_highlight: 'invert(57%) sepia(77%) saturate(3985%) hue-rotate(334deg) brightness(107%) contrast(101%)',
                linear_gradient:'to bottom, #d0d5d900, #d0d5d945, #D0D5D9',
            },
            live_website:'https://harmonious-gnome-b9fffe.netlify.app/',
            source_code:'https://github.com/fsmatos/reddit-client',
            solution:'',
        },
        {
            id: 1,
            title: 'Twheels',
            brief:'A bycicle store',
            image:'/twheels.png',
            second_image:'/twheels_second.png',
            description:<p><b>Twheels</b> is a fictional online store that offers two types of services: buying and renting restored bicycles.</p>,
            challenge: <p>Build a website with a shopping-cart.</p>,
            tools: [faHtml5, faCss3, faJs],
            colors:{
                background:'#E9E6E6', 
                text:'#415A65', 
                highlight:'#F48304', 
                logo_color_normal:'invert(31%) sepia(24%) saturate(573%) hue-rotate(153deg) brightness(91%) contrast(82%)',
                logo_color_highlight: 'invert(45%) sepia(34%) saturate(2539%) hue-rotate(13deg) brightness(107%) contrast(108%)',
                linear_gradient:'to bottom, #e9e6e615, #e9e6e675, #E9E6E6',
            },
            live_website:'',
            source_code:'https://github.com/fsmatos/twheels',
            solution:'',
        },
    ] //Projects
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        getWhere: (state, { payload }) => {
            state.where = payload;
        }
    }
})

export const { getWhere } = projectsSlice.actions

export default projectsSlice.reducer

export const projectsSelector = state => state.projects

export function setWhere(where) {
    return dispatch => {
        dispatch(getWhere(where))
    }
}

