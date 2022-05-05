import { createSlice } from '@reduxjs/toolkit'
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

