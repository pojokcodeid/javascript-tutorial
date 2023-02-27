// finally()metode JavaScript
// Promise untuk mengeksekusi kode setelah promise diselesaikan, apa pun hasilnya.
// promise
// .then(result => { ...})
// .catch(error => { ... })
// .finally(() => { ... })
// ini promise yang pernah kita pelajari sebelumjnya

// Promise
//   .then((result)=>{
//     // process result
//     // clean up
//   })
//   .catch((error)=>{
//     // error handling
//     // clean up
//   })
//
// Promise
//   .then((result)=>{
//     // process result
//   })
//   .catch((error)=>{
//     // error handling
//   })
//   .finally(()=>{
//     // clean up
//   })

class Connection {
  execute(query) {
    if (query != "Insert" && query != "Update" && query != "Delete") {
      throw new Error(`The ${query} is not supported`);
    }
    console.log(`Execute the ${query}`);
    return this;
  }
  close() {
    console.log("Close the Connection");
  }
}

const success = true;
function connect() {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(new Connection());
    } else {
      reject("Koneksi ke databae gagal");
    }
  });
}

let globalConnection;
connect()
  .then((connection) => {
    globalConnection = connection;
    return globalConnection.execute("Insert");
  })
  .then((connection) => {
    globalConnection = connection;
    return globalConnection.execute("Select");
  })
  .catch(console.log)
  .finally(() => {
    if (globalConnection) {
      globalConnection.close();
    }
  });
