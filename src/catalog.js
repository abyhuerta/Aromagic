const products = [
    {

        //----------All Year Round Scents-----------
        id: 1,
        name: "The Magic",
        price: 1.39,
        oz: [10,18,24],
        images: ['./src/assets/imgs/c1-1.jpg','./src/assets/imgs/c1-2.jpg','./src/assets/imgs/c1-3.jpg','./src/assets/imgs/c1-4.jpg'],
        stock: 100,
        description: "Experience the enchanting aroma of our original blend. It features a harmonious mix of floral and earthy notes, designed to uplift your spirit and create an inviting ambiance.",
        
    },
    {
        id: 2,
        name: "Rose",
        price: 1.39,
        oz: [10, 18, 24],
        images: ['./src/assets/imgs/c2-1.jpg','./src/assets/imgs/c2-2.jpg','./src/assets/imgs/c2-3.jpg','./src/assets/imgs/c2-4.jpg'],
        stock: 80,
        description: "Stop and smell the roses. Indulge in the delicate fragrance of blooming roses layered with soft hints of green stems and a whisper of sweetness, a romantic scent that transforms your space into a garden of tranquility and beauty"

    },
    {
        id: 3,
        name: "Vinilla Bean", 
        price: 1.39,
        oz: [10, 18, 24],
        images: ['./src/assets/imgs/c3-1.jpg','./src/assets/imgs/c3-2.jpg','./src/assets/imgs/c3-3.jpg','./src/assets/imgs/c3-4.jpg'],
        stock: 80,
        description: "Dive into the rich, creamy essence of vanilla bean infused with warm caramel undertones and a hint of spice, filling your home with warmth and comfort reminiscent of fresh-baked treats."
    },
    {
        id: 4,
        name: "Maple Syrup",
        price: 1.39,
        oz: [10, 18, 24],
        images: ['./src/assets/imgs/c4-1.jpg','./src/assets/imgs/c4-2.jpg','./src/assets/imgs/c4-3.jpg','./src/assets/imgs/c4-4.jpg'],
        stock: 80,
        description: "Does not come with pancakes, but smells like grandma's cooking. Embrace the nostalgic scent of warm maple syrup with caramelized sugar and buttery undertones. Evoking memories of cozy breakfasts at grandma's house, even without the pancakes."
    },
    {
        id: 5,
        name: "Rain Rain Rain",
        price: 1.39,
        oz: [10, 18, 24],
        images: ['./src/assets/imgs/c5-1.jpg','./src/assets/imgs/c5-2.jpg','./src/assets/imgs/c5-3.jpg','./src/assets/imgs/c5-4.jpg'],
        stock: 80,
        description: "Capture the refreshing scent of a gentle rain shower, blending fresh earthiness with hints of clean linen. A clean and crisp aroma that brings the tranquility of nature indoors."
    
    },
    {
        id: 6,
        name: "Tu Casa",
        price: 1.39,
        oz: [10, 18, 24],
        images: [],
        stock: 80,
        description: "Immerse yourself in the comforting scent of home with this warm blend of toasted spices, sweet vanilla, and soft musk. Its a perfect reminder of cherished moments spent with loved ones."
    },
    {
        id: 7,
        name: "Beach Day",
        price: 1.39,
        oz: [10, 18, 24],
        images: ['./src/assets/imgs/c7-1.jpg','./src/assets/imgs/c7-2.jpg','./src/assets/imgs/c7-3.jpg','./src/assets/imgs/c7-4.jpg'],
        stock: 80,
        description: "Transport yourself to a sun-soaked beach with this fresh, salty aroma, mingled with notes of coconut, evoking the carefree spirit of summer and the joy of ocean breezes."
    },
    {
        id: 8,
        name: "Ocean Water",
        price: 1.39,
        oz: [10, 18, 24],
        images: ['./src/assets/imgs/c8-1.jpg','./src/assets/imgs/c8-2.jpg','./src/assets/imgs/c8-3.jpg','./src/assets/imgs/c8-4.jpg'],
        stock: 80,
        description: "Feel the refreshing waves wash over you with this invigorating scent, blending cool sea air, crisp citrus, and a hint of floral notes. Reminiscent of seaside strolls and sun-drenched days by the shore."
    },
    {
        id: 9,
        name: "Cherry Blossom",
        price: 1.39,
        oz: [10, 18, 24],
        images: ['./src/assets/imgs/c9-1.jpg','./src/assets/imgs/c9-2.jpg','./src/assets/imgs/c9-3.jpg','./src/assets/imgs/c9-4.jpg'],
        stock: 80,
        description: "Revel in the delicate fragrance of cherry blossoms in full bloom, with a soft, sweet notes and a subtle hint of green. A floral scent that brings springtime joy into your home."
    },
    {
        id: 10,
        name: "Apple Pie",
        price: 1.39,
        oz: [10, 18, 24],
        images: ['./src/assets/imgs/c10-1.jpg','./src/assets/imgs/c10-2.jpg','./src/assets/imgs/c109-3.jpg','./src/assets/imgs/c10-4.jpg'],
        stock: 80,
        description: "The great American Apple Pie. Enjoy the heartwarming scent of freshly baked apple pie,filled with sweet, tart apples and a dash of cinnamon. It creates a comforting atmosphere."
    },
    {
        id: 11,
        name: "Forrest Pine",
        price: 1.39,
        oz: [10, 18, 24],
        images: ["./src/assets/imgs/11.c1.jpg", "./src/assets/imgs/11.c2.jpg", "./src/assets/imgs/11.c3.jpg", "./src/assets/imgs/11.c4.jpg"],
        stock: 80,
        description: "Breathe in the crisp, invigorating aroma of a pine forest, layered with earthy undertones and hints of cedarwood. Perfect for bringing the fresh scent of nature indoors year-round."
    },
    {
        id: 12,
        name: "Cafe en Paris",
        price: 1.39,
        oz: [10, 18, 24],
        images: ["./src/assets/imgs/12.c1.jpg", "./src/assets/imgs/12.c2.jpg", "./src/assets/imgs/12.c3.jpg", "./src/assets/imgs/12.c4.jpg"],
        stock: 80,
        description: "Sip on the warm, inviting scent of a Parisian caf�, with rich coffee notes of buttery croissants, and a hint of chocolate, perfect for a cozy moment."
    },
    //--------------Seasonal Scents (Autumn-----------)
    {
        id: 13,
        name: "Autumn Breeze",
        price: 2.08,
        oz: [18, 24],
        images: ["./src/assets/imgs/13.c1.jpg", "./src/assets/imgs/13.c2.jpg", "./src/assets/imgs/13.c3.jpg", "./src/assets/imgs/13.c4.jpg"],
        stock: 50,
        description: " Embrace the essence of fall with this blend of cool air, earthy musk, and hints of spiced apple. It evokes the beauty and warmth of autumn landscapes."
    },
    {
        id: 14,
        name: "Pumknin Spice Latte",
        price: 2.08,
        oz: [18, 24],
        images: ["./src/assets/imgs/14.c1.jpg", "./src/assets/imgs/14.c2.jpg", "./src/assets/imgs/14.c3.jpg", "./src/assets/imgs/14.c4.jpg"],
        stock: 50,
        description: "Better than drinking the coffee. Delight in the cozy aroma of spiced pumpkin and rich coffee, layered with sweet cream and cinnamon. It brings the warmth of your favorite caf� drink right into your home."
    },
    {
        id: 15,
        name: "Pumpkin Patch",
        price: 2.08,
        oz: [18, 24],
        images: ["./src/assets/imgs/15.c1.jpg", "./src/assets/imgs/15.c2.jpg", "./src/assets/imgs/15.c3.jpg", "./src/assets/imgs/15.c4.jpg"],
        stock: 50,
        description: "Nothing's better than having the smell of pumpkins in the air. Capture the essence of a pumpkin patch with this warm, earthy scent, perfect for celebrating the harvest season."
        
    },
    {
         id: 16,
         name: "Haunted",
         price: 2.08,
         oz: [18, 24],
        images: ["./src/assets/imgs/16.c1.jpg", "./src/assets/imgs/16.c2.jpg", "./src/assets/imgs/16.c3.jpg", "./src/assets/imgs/16.c4.jpg"],
         stock: 50,
        description: "There's no better way to get into the spooky season. Get into the spooky spirit with this mysterious blend, combining notes of autumn spices, smoky undertones, and a hint of dark berries for a hauntingly delightful experience."
    },
    //--------------------Seasonal Scents( Christmas-----------)
    {
        id: 17,
        name: "Sugar Cookies",
        price: 2.08,
        oz: [18, 24],
        images: ["./src/assets/imgs/17.c1.jpg", "./src/assets/imgs/17.c2.jpg", "./src/assets/imgs/17.c3.jpg", "./src/assets/imgs/17.c4.jpg"],
        stock: 75,
        description: "Experience the sweet, buttery aroma of freshly baked sugar cookies, infused with vanilla and a sprinkle of holiday cheer."
    },
    {
        id: 18,
        name: "The Perfect Present",
        price: 2.08,
        oz: [18, 24],
        images: ["./src/assets/imgs/18.c1.jpg", "./src/assets/imgs/18.c2.jpg", "./src/assets/imgs/18.c3.jpg"],
        stock: 75,
        description: "Unwrap the joy of the season with this delightful blend of festive spices, sweet treats, and a hint of pine. It�s perfect for holiday gatherings and creating cherished memories."
    },
    {
        id: 19,
        name: "Melted Snowman",
        price: 2.08,
        oz: [18, 24],
        images: ["./src/assets/imgs/19.c1.jpg", "./src/assets/imgs/19.c2.jpg", "./src/assets/imgs/19.c3.jpg", "./src/assets/imgs/19.c4.jpg"],
        stock: 75,
        description: "Have you ever smelled melting snow?! Enjoy the whimsical scent of melting snow, blending fresh winter air with hints of vanilla and marshmallow for a sweet, cozy vibe."
    },
    {
        id: 20,
        name: "GingerBread",
        price: 2.08,
        oz: [18, 24],
        images: ["./src/assets/imgs/20.c1.jpg", "./src/assets/imgs/20.c2.jpg", "./src/assets/imgs/20.c3.jpg", "./src/assets/imgs/20.c4.jpg"],
        stock: 75,
        description: "A cozy hug for the seasons, this candle combines warm spicy notes of ginger, cinnamon, and nutmeg with sweet vanilla and molasses for a nostalgic holiday experience."
    },
]

export default products;