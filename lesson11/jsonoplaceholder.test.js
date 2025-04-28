const axios = require('axios');

test('GET [/posts] returns 100 posts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
    const posts = response.data;
    expect(posts).toHaveLength(100);
    //console.log(response.data);

})