import { createSlice } from '@reduxjs/toolkit'

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
            challenge: <p>Build a front-end application for Reddit.<br></br> The application should integrate the Reddit API to allow users to view and search posts and comments.</p>,
            tools:'Javascript | React | Redux',
            colors:{
                first_color:'#D0D5D9',
                second_color:'#575759',
                third_color:'#FF6547',
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

