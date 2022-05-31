
//https://www.sitepoint.com/understanding-module-exports-exports-node-js/

// integrazione SQLite in express
//https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/

//https://www.npmjs.com/package/better-sqlite3-session-store



const path = require('path');
const sqlite3 = require('sqlite3').verbose()
const DBSOURCE = path.resolve('db/rialenet.sqlite')

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
    }
});

//https://stackoverflow.com/questions/64372255/how-to-use-async-await-in-sqlite3-db-get-and-db-all
const  db_all = async (query, params) => {
    return new Promise(function(resolve,reject){
        db.all(query, params, function(err,rows){
           if(err){return reject(err);}
           resolve(rows);
         });
    });
}


const getUserByPasscode = async (passcode) =>
{
    var sql = "SELECT * FROM users WHERE passcode=?"
    var params = [passcode];
    return await db_all(sql, params);
   }


const getAllUsers = () =>
{
  
    var sql = "select * from users"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            console.log("Sqlite error:",err);
          return [];
        }
        console.log("getAllUsers() result:", rows);
          return rows;
        })
      }

exports.getAllUsers = getAllUsers;
exports.getUserByPasscode = getUserByPasscode;






