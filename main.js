let arrayOfPosts, arrayOfFive, arrayOfComments, arrayOfUsers;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
    getPosts()
    fetchFive()
    fetchComments()
    fetchUsers()
}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
// const getPosts = () => {
//     fetch('http://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => arrayOfPosts = posts)
// }

let checkFetch = (response) => {
    if (!response.ok) {
        throw Error(`${response.statusText} - ${response.url}`)
    }
    return response
}

const getPosts = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(checkFetch)
    .then(res => {
        return res.json()
    })
    .then(posts => arrayOfPosts = posts)
    .catch(err => console.log(`Error,  ${err}`))
  }

// This function logs the results in your browser's console
const consolePosts = () => {
    console.log(arrayOfPosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
    const allPosts = document.getElementById('all-posts')
    arrayOfPosts.map((post, index) => {
        const li = document.createElement('li')
        const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
        li.appendChild(text)
        allPosts.append(li)
    })
}

const fetchFive = () => {
    fetch('http://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(checkFetch)
    .then(res => res.json())
    .then(posts => arrayOfFive = posts)
    .catch(err => console.log(`Error,  ${err}`))
}

const displayFive = () => {
    const fivePosts = document.getElementById('five-posts')
    arrayOfFive.map((post, index) => {
        const li = document.createElement('li')
        const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
        li.appendChild(text)
        fivePosts.append(li)
    })
}

const fetchComments = () => {
    fetch('http://jsonplaceholder.typicode.com/comments')
    .then(checkFetch)
    .then(res => res.json())
    .then(posts => arrayOfComments = posts)
    .catch(err => console.log(`Error,  ${err}`))
}

const displayComments = () => {
    const comments = document.getElementById('comments')
    arrayOfComments.map((post, index) => {
        const li = document.createElement('li')
        const text = document.createTextNode(`#${index}, Comments: ${post.body}`)
        li.appendChild(text)
        comments.append(li)
    })
}

const fetchUsers = () => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(checkFetch)
    .then(res => res.json())
    .then(posts => arrayOfUsers = posts)
    .catch(err => console.log(`Error,  ${err}`))
}

const displayUsers = () => {
    const users = document.getElementById('users')
    arrayOfUsers.map((post, index) => {
        const li = document.createElement('li')
        const text = document.createTextNode(`#${index}, Users: ${post.name}`)
        li.appendChild(text)
        users.append(li)
    })
}


// Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it. This way you can learn how to build fetch requests and work with other APIs and become a real developer!!