var cmd = require('node-cmd');
const Promise = require('bluebird');
const opn = require('opn');

const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd });


let url = 'http://localhost:5001';


  /**
 * Load docker images and run them.[Windows]
 * **/
// getAsync('docker pull codehacker123/producer-service')
// .then(data => {
//     console.log('Status:::::::::::Docker Image for producer service loaded succesfully.',data);
//     cmd.run("docker run -p 5001:3232 -d codehacker123/producer-service");
// })
// .then(()=>{
//     opn(url).then(()=>{
//         console.log("Switch to browser.");
//     })
// })
// .catch(err=>{
//     console.error("Failed:::::::::",err);
// });

// getAsync('docker pull codehacker123/consumer-service')
// .then(data => {
//     console.log('Status:::::::::::Docker Image for consumer service loaded succesfully.',data);
//     cmd.run("docker run -p 5002:3000 -d codehacker123/consumer-service");
// })
// .catch(err=>{
//     console.error("Failed:::::::::",err);
// });

//To check the added data. paste this to browser.
//"http://localhost:5002/applications?size=10&page=1"



/////////////////////////////////////////////////////////////////////////////////////////////////////
 /**
 * Load docker images and run them.[Ubuntu]
 * **/
getAsync('sudo docker pull codehacker123/producer-service')
.then(data => {
    console.log('Status:::::::::::Docker Image for producer service loaded succesfully.',data);
    cmd.run("sudo docker run -p 5001:3232 -d codehacker123/producer-service");
})
.then(()=>{
    opn(url).then(()=>{
        console.log("Switch to browser.");
    })
})
.catch(err=>{
    console.error("Failed:::::::::",err);
});

getAsync('sudo docker pull codehacker123/consumer-service')
.then(data => {
    console.log('Status:::::::::::Docker Image for consumer service loaded succesfully.',data);
    cmd.run("sudo docker run -p 5002:3000 -d codehacker123/consumer-service");
})
.catch(err=>{
    console.error("Failed:::::::::",err);
});

//To check the added data. paste this to browser.
//"http://localhost:5002/applications?size=10&page=1"


