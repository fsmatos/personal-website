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
            challenge: <p>Create a front end application for reddit that integrates with the Reddit API.</p>,
            tools: [faJs, faReact, 'Redux'],
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

