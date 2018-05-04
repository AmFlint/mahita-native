export const categories = [
    {id: 1, name: 'Maths', image: 'http://ekladata.com/rU2Vvj9RUlx1rbUMOQg90Tcb_70.png'},
    {id: 2, name: 'Français', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFi2lMNPQCxi2ORpJFjqc4JPhlZbxi9JnHhEp3s0m2vvnHhxl59Q'},
    {id: 3, name: 'Géographie', image: 'https://images-na.ssl-images-amazon.com/images/I/515asuhfyeL._SX352_BO1,204,203,200_.jpg'},
    {id: 4, name: 'Histoire', image: 'https://images-na.ssl-images-amazon.com/images/I/515asuhfyeL._SX352_BO1,204,203,200_.jpg'}
];

export const classes = [
    {id: 1, name: 'CP'},
    {id: 2, name: 'CE1'},
    {id: 3, name: 'CE2'},
    {id: 4, name: 'CM1'},
    {id: 5, name: 'CM2'}
];

export const courses = [
    {
        id: 1,
        name: "les multiplications",
        description: 'Cours de mathématiques de CE1 sur les multiplications.',
        categorie: 1,
        classes: [1]
    },
    {
        id: 2,
        name: "conjugaison",
        description: 'Cours de Français de CM1 sur les conjugaisons.',
        categorie: 2,
        classes: [3]
    },
    {
        id: 3,
        name: "Histoire de l'Afrique",
        description: 'Cours d\'Histoire de CM2 sur l\'Afrique.',
        categorie: 3,
        classes: [4]
    },
    {
        id: 4,
        name: "les divisions",
        description: 'Cours de mathématiques de CE1 sur les divisions.',
        categorie: 1,
        classes: [2]
    },
    {
        id: 5,
        name: "les additions",
        description: 'Cours de mathématiques de CE1 sur les additions.',
        categorie: 1,
        classes: [1]
    }
];
