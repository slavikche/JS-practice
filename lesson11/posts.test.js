
//Check posts and data
const axios = require("axios");

test ('Getting post by ID', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const status = response.status;
    const post = response.data;
   
    expect(status).toBe(200);
    expect(post).toHaveProperty('userId');
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');

    //console.log(status, post);

});

//Create new post
test ('Creating new post', async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title:'My test title',
        body: 'My test body text 123'
    });

    const createdPost = response.data;
    
    expect(response.status).toBe(201);
    expect(createdPost).toHaveProperty('id');

    // console.log('Status code is: ', response.status);
    // console.log('New post ID is: ', createdPost.id);

});

//Update post
test ('Updating the post', async () => {
    const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
        title:'Title is updated for this post',
        body: 'Body text is updated for this post'
    });

    const updatePost = response.data;
    
    expect(response.status).toBe(200);
    expect(updatePost.title).toBe('Title is updated for this post');
    expect(updatePost.body).toBe('Body text is updated for this post');

    // console.log('Status code is: ', response.status);
    // console.log('New post title: ', updatePost.title);
    // console.log('New post body: ', updatePost.body);

});

//Delete post
test ('Deleting the post', async () => {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
    
    expect(response.status).toBe(200);
    
    //console.log('Post deleted successfully with status:', response.status);
});