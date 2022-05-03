import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    projects: [
        {
            id: 0,
            title: 'The Roots',
            brief:'Creation of the visual identity for the animated webseries "The Roots"',
            image:'https://mir-cdn.behance.net/v1/rendition/project_modules/source/ea1aed135990513.61f17707322f0.jpg',
            description:"Thinking about the future always leaves us with an ambiguous feeling, a desire to know what comes next, what will be the next creation or discovery of the human beign, but also a concern, since life on earth does not look promising if we continue with these habits of ours. It is intrinsic in the human being the question: 'What's next?', but there is no sure way to know, no right or wrong answer, just a strong possibility that when looking at history comes to us. 'The Roots' is an animated documentary webseries that seeks this connection to history, to our past. It looks for the big picture of time so that we can see in which direction we are going and, sometimes, even change the course we are taking.",
            challenge:'Create the visual representation of the documentary webseries "The Roots"',
            solution:'https://drive.google.com/file/d/1wUUgAiA4c99hqAdEpdMSjqYKXbYKDZJo/view?usp=sharing',
            tools:['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
            colors:{
                main_color:'#ef233c',
                second_color:'#2b2d42',
                third_color:'#edf2f4'
            },
            live_website:'',
            source_code:'',
        },
        {
            id: 1,
            title: 'Reddit-mini',
            brief:'',
            image:'',
            description:'',
            challenge:'',
            solution:'',
            tools:['Javascript', 'React', 'Redux'],
            live_website:'https://harmonious-gnome-b9fffe.netlify.app/',
            source_code:'https://github.com/fsmatos/reddit-client',
        },
    ] //Projects
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    //Reducers
})

export default projectsSlice.reducer

export const projectsSelector = state => state.projects

