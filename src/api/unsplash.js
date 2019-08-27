import axios from 'axios'
export default axios.create({
    baseURI: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 1df2292b5c7c7d475695e6a530c2da981ea28c75d4b82a7cde4821e4721dbcdc'
    }
});