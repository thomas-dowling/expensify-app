import moment from 'moment';

export default [{
    id: 1,
    description: 'gum',
    note: '',
    amount: 195,
    createdAt: 0
},  {
    id: 2,
    description: 'Double Decker',
    note: '',
    amount: 250,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},  {
    id: 3,
    description: 'Kit Kat',
    note: '',
    amount: 150,
    createdAt: moment(0).add(4, 'days').valueOf()
}]