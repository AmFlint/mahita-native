export const categories = [
  'Maths',
  'Français',
  'Géographie',
  'Histoire'
];

export const classes = [
  'CP',
  'CE1',
  'CE2',
  'CM1',
  'CM2'
];

export const courses = [
    {
        name: "les multiplications",
        categories: 1,
        classes: [1, 2]
    },
    {
        name: "conjugaison",
        categories: 2,
        classes: [3]
    },
    {
        name: "Histoire de l'Afrique",
        categories: 3,
        classes: [4]
    }
];

export default database = {
    courses,
    classes,
    categories
};
