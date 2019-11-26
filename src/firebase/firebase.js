 import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDERID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

    // database.ref('expenses')
    //     .on('value', (snapshot) => {
    //         const expenses = [];
    
    //         snapshot.forEach((childSnapshot) => {
    //             expenses.push({
    //                 id: childSnapshot.key,
    //                 ...childSnapshot.val()
    //             });
    //         });
    
    //         console.log(expenses);
    //     }, (e) => {
    //         console.log(e);
    //     });
// database.ref('expenses').push({
//         description: 'rice',
//         note: 'i like rice',
//         amount: 99000,
//         createdAt: 90000
// })

// database.ref('notes/-LuVWZhN-jExu26h_P_M').update({
//     body: 'buy food'
// })
// database.ref('notes').push({
//      title: 'course topics',
//      body: 'React Native, Angular, Python'
// })


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('you broke it')
// })



// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error eith data', e);
// })

// setTimeout(() => {
//     database.ref('age').set(99);
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 3500)

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('error fetching dataaaa', e);
//     })

// database.ref().set({
//     name: 'Tom Dowling',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Manchester',
//         country: 'UK'
//     }
// }).then(()=> {
//     console.log('data is saved!');
// }).catch((e) => {
//     console.log(e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })


// //   database.ref().set('This is my data')
// // database.ref('age').set(27)
// // database.ref('location/city').set('Mèrida');

// database.ref('attributes').set({
//     height: '5ft 10',
//     weight: '13 stone'
// }).then(() => {
//     console.log('This works well done')
// }).catch((e) => {
//     console.log(`ERROR ${e}`);
// })

// database.ref('isSingle').remove().then(() => {
//     console.log('removed')
// }).catch((e) => {
//     console.log('could not remove')
// })