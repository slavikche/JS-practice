function fetchPost() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
    
}

fetchPost()
.then(response => response.json())
.then(post => console.log(post));


function fetchComments() {
    return fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
}

fetchComments()
.then(response => response.json())
.then(comments => console.log(comments));