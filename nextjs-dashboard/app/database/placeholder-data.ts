// Contains the Database place holder information

//This code is for normal user where seller status is false
const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User',
        email: 'user@nextmail.com',
        password: '123456',
        privilege: 'User',
    },
];

//This code is for normal user where seller status is True
const admin = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User1',
        email: 'user@nextmail.com',
        password: '123456',
        privilege: 'Seller',
    },
];


const product = [
    {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
        product_name: 'Evil Rabbit',
        image_url: '/customers/evil-rabbit.png',
        rating:'4/5',
        age: 'evil@rabbit.com',
        artist: 'Evil Rabbit',
        style:'Abstract',
        category:'Weird',
        price:1000,
        status:'Onsale',
        description:'Lorem Ipsum Skbiibidid',
        reviews: '',
    }
    ];
export {users,admin,product};