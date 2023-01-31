

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const spawners = require('child_process').spawn;




  function calculateAvgDot(userid) {

    const data_to_pass_in = userid;

    //SEND
    //this is input data being passed to python 
    const python_process = spawners('python3', ['/Users/quazishaadaab/Desktop/programming-projects/dot-collector-nextjs/pages/testing/python.py', data_to_pass_in])

    //RECEIVE
    //this is the data being received from python output.
    python_process.stdout.on('data', (data) => {
        console.log("Data received from python script : ", data.toString());


    })

}

export {calculateAvgDot}





