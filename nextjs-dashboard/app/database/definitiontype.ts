//Containst Type definitions

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    privilege: "User"| "Seller"|"Admin";  //Elisha Logic
};

export type product = {
    id: string;
    product_name: string;
    image_url: string;
    rating: "1/5" | "2/5" | "3/5" | "4/5" | "5/5"; // Ensures rating is within the 5/5 system
    age: `${number}${number}${number}${number}`; // Enforces a 4-digit year format
    artist: string;
    style: string;
    category: string;
    price: number;
    status: "On Sale" | "Not For Sale" | "Sold"; // Ensures only these two statuses are allowed
    description: string; // Limit to 300 words when assigning a value
    reviews?: string; // Optional field
}