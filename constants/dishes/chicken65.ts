export const intro = [
    {
        tamilheading: 'சிக்கன் 65',
        topic: 'Chicken 65',
        des: 'Chicken 65 is a spicy, deep-fried chicken dish originating from Chennai, Tamil Nadu. It is renowned for its rich, fiery flavor, marked by vibrant red hues and an aromatic mix of spices. Often enjoyed as an appetizer or snack, Chicken 65 is a celebrated staple in Indian restaurants worldwide, embodying the heat and zest of South Indian cuisine.',
        imageSrc: '/dishes/vadacurry/flag.jpg',

    },

]

export const info = [
    {
        name: 'ANTHROPOLOGY',
        imageSrc: '/Ingredients/Palkova.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    
]


export const ingredient_pic = [
    {
        id: 1,
        name: 'Onion',
        href: '#',
        imageSrc: '/dishes/chicken65/chicken.jpg',
        imageAlt: 'Tall',
    },
    {
        id: 2,
        name: 'Tomato',
        href: '#',
        imageSrc: '/dishes/chicken65/chilli.jpg',
        imageAlt: 'Olive',
    },
    {
        id: 3,
        name: 'Channa Dal',
        href: '#',
        imageSrc: '/dishes/chicken65/ggpaste.jpg',
        imageAlt: 'Olive',
    },

]

export const list = [
    {
        name: 'Type of Dish:',
        role: 'Side dish',
        imageUrl:
            '/icons/climate.png',
    },

    {
        name: 'Decade:',
        role: 'Mid-20th century',
        imageUrl:
            '/icons/climate.png',
    },

    {
        name: 'City:',
        role: 'Chennai',
        imageUrl:
            '/icons/climate.png',
    },

    {
        name: 'State:',
        role: 'Tamil Nadu',
        imageUrl:
            '/icons/climate.png',
    },

    {
        name: 'Country:',
        role: 'India',
        imageUrl:
            '/icons/climate.png',
    },

    {
        name: 'Language:',
        role: 'Tamil',
        imageUrl:
            '/icons/climate.png',
    },
]


export const rcintro = [
    {

        topic: 'Chicken 65',
        des: 'This traditional South Indian dish is a delightful mix of flavors and textures, featuring steamed and crumbled lentil patties simmered in a richly spiced sauce. Perfect as a hearty accompaniment to breakfast staples like idly, dosa, or puri.',
        imageSrc: '/dishes/chicken65/top.jpg',

    },

]

export const time = [
    {
        name: 'Prep Time:',
        role: '10 minutes',
    },
    {
        name: 'Cook Time:',
        role: '20 minutes',
    },
    {
        name: 'Total Time:',
        role: '1 hour 35 minutes',
    },
    {
        name: 'Cuisine',
        role: 'Indian',
    },
    {
        name: 'Course:',
        role: 'Appetizer',
    },
    {
        name: 'Diet:',
        role: 'Non-Veg',
    },
]

interface Ingredient {
    name: string;
    quantity: number;
    unit: string;
}
export const ingredients: Ingredient[] = [
    
    { name: 'Chicken (boneless, cut into bite-sized pieces)', quantity: 500, unit: 'grams' },
    { name: 'Red chili powder', quantity: 2, unit: 'tsp' },
    { name: 'Turmeric powder', quantity: 0.5, unit: 'tsp' },
    { name: 'Ginger-garlic paste', quantity: 1, unit: 'tbsp' },
    { name: 'Lemon juice', quantity: 2, unit: 'tbsp' },
    { name: 'Yogurt (curd)', quantity: 0.25, unit: 'cup' },
    { name: 'Salt', quantity: 0, unit: 'as per taste' },
    { name: 'Curry leaves', quantity: 20, unit: 'leaves' },
    { name: 'Green chilies (slit)', quantity: 4, unit: 'chilies' },
    { name: 'Mustard seeds', quantity: 0.5, unit: 'tsp' },
    { name: 'Oil', quantity: 0, unit: 'for deep frying' },
    { name: 'Food coloring (optional)', quantity: 0, unit: 'a pinch' },

    // Add more ingredients as needed
];

export const prep = 
[
    { point: 'Marinate the chicken with chili powder, turmeric, ginger-garlic paste, lemon juice, yogurt, and salt. Leave for 1-2 hours.' },
    { point: 'Heat oil in a deep pan and fry the marinated chicken pieces until golden brown. Drain on paper towels.' },
    { point: 'In a separate pan, temper mustard seeds, curry leaves, and green chilies.' },
    { point: 'Add the fried chicken to the tempering and toss well.' },
    { point: 'Serve hot garnished with lemon wedges and onion rings.' },
    { point: 'Garnish with lemon wedges, onion rings, and a sprinkle of chaat masala.' },
    { point: 'Recommend serving as an appetizer with slices of onion and lemon, or as a side dish with biryani or rice.' },
];

export const notes = [
    {
        point: 'Ensure to soak the channa dal for at least 4 to 6 hours or overnight.'
    },
    {
        point: 'Grinding the dal coarsely helps in retaining texture in the final dish.'
    },
    {
        point: 'Adjust the chilli powder according to your heat preference.'
    },
    

];

export const reviews = { href: '#', average: 5, totalCount: 120 }