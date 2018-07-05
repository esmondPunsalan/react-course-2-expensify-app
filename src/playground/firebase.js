/*
// child_removed
database.ref("expenses").on("child_removed", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref("expenses").on("child_changed", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref("expenses").on("child_added", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});
*/

/*
database.ref("expenses").once("value").then((snapshot) => {
    const expenses = [];
    
    snapshot.forEach((childSnapShot) => {
        expenses.push({
            id: childSnapShot.key,
            ...childSnapShot.val()
        });
    });

    console.log(expenses);
});
*/

/*
database.ref("expenses").on("value", (snapshot) => {
    const expenses = [];
    
    snapshot.forEach((childSnapShot) => {
        expenses.push({
            id: childSnapShot.key,
            ...childSnapShot.val()
        });
    });

    console.log(expenses);
});
*/

/*
database.ref("expenses").push({ description: "Rent", note: "", amount: 109500, createdAt: 484846489 });
database.ref("expenses").push({ description: "Mortage", note: "", amount: 190500, createdAt: 484846489 });
database.ref("expenses").push({ description: "Car", note: "", amount: 21145, createdAt: 484846489 });
*/

/*
const onValueChange = database.ref().on("value", (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (e) => {
    console.log("Error with data fetching", e);
});


setTimeout(() => {
    database.ref("age").set(29);
}, 3500);

setTimeout(() => {
    database.ref().off("value", onValueChange);
}, 7000);

setTimeout(() => {
    database.ref("age").set(30);
}, 10500);
*/

/*
database.ref("location/city")
.once("value")
.then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
})
.catch( (e) => {
    console.log("error", e);
});
*/
/*
database.ref().set({
    name: "Esmond Punsalan",
    age: 39,
    stressLevel: 6,
    job: {
        title: "Software Developer",
        company: "Neovation"
    },
    location: {
        city: "Winnipeg",
        country: "Canada"
    }
}).then(() => {
    console.log("Data is saved")
}).catch((e) => {
    console.log("This Failed.", e);
});

database.ref().update({
    stressLevel: 9,
    "job/company": "Amazon",
    "location/city": "Vancouver"
});
*/