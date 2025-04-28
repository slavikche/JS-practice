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


async function getPostAndComments() {
    try {
        const postData = await fetchPost();
        const commentData = await postData.json();

    console.log(commentData);
    } catch (error) {
        console.log('Помилка даних')
    }
} 

getPostAndComments();


async function getFastestResponse() {
    try {
      const fastest = await Promise.race([fetchPost(), fetchComments()]);
      console.log("Найшвидша відповідь:", fastest);
    } catch (error) {
      console.error("Помилка в getFastestResponse:", error);
    }
  }
  
  getFastestResponse();