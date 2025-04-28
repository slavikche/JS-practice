const axios = require('axios');
const API_BASE_URL = 'https://bookstore.toolsqa.com'

test.skip('Get list of books', async () => {
    const response = await axios.get(`${API_BASE_URL}/BookStore/v1/Books`);

    const books = response.data.books;
    expect(books.length).toBe(8);
    //expect(books).toHaveLength(8);
    const firstBook = books[0];
   
    expect(firstBook.isbn).toBe('9781449325862');
    expect(firstBook.subTitle).toBe('A Working Introduction');
    expect(response.status).toBe(200);
    
    // console.log(books);
    // console.log(books.length);

});


test.skip('Get token', async () => {
    const response = await axios.post(`${API_BASE_URL}/Account/v1/GenerateToken`, {

            userName: "testAPIUser14214124",
            password: "Test123!"
        });

        expect(response.data.token).toBeDefined();
        console.log(response.data)

});

test('Get token', async () => {
    const response = await axios.post(`${API_BASE_URL}/Account/v1/GenerateToken`, {

            userName: "testAPIUser14214124",
            password: "Test123!5"
        });

        expect(response.data.token).toEqual('Test123!');
        console.log(response.data)

});