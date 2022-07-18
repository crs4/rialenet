
//https://www.sitepoint.com/understanding-module-exports-exports-node-js/

// integrazione SQLite in express
//https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/

//https://www.npmjs.com/package/better-sqlite3-session-store

class Role 
{ static admin=1;
  static teacher=2;
  static student=3;
}



const path = require('path');
const wenet_config = require("../wenet_config");
const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = path.resolve(wenet_config.DBSOURCE);

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

   const getAllUsersByRole = async (role) =>
   {
       var sql = "SELECT * FROM users WHERE role_id=?"
       var params = [role];
       return await db_all(sql, params);
      }

    const getStudentsProfileByTeacherWenetId = async (teacherWenetId) =>
    {
        var sql = "SELECT passcode,name,surname, wenet_id, id, description, teacher_wenet_id" +
        " FROM users LEFT JOIN profiles WHERE users.student_profile_id=profiles.id" + 
        " AND teacher_wenet_id=?"
        var params = [teacherWenetId];
        return await db_all(sql, params);
        }

    const updateStudentProfileByWenetId = async (wenetId, profileId) =>
        {
            var sql = "UPDATE users " +
            "SET student_profile_id = COALESCE(?,student_profile_id) " +
            "WHERE wenet_id = ?"
            var params = [profileId, wenetId];
            try {
              const result = await db.run(sql,params);
              const msgOK =  ("UPDATE SUCCESS:" + JSON.stringify(result))
              return msgOK
            } catch(err) {
              const msg = "Error in update:"+ JSON.stringify(err);
              console.log(msg)
              return msg;
            }
            
            }

      const updateStudentProfileByPasscode = async (passcode, profileId) =>
            {
                var sql = "UPDATE users " +
                "SET student_profile_id = COALESCE(?,student_profile_id) " +
                "WHERE passcode = ?"
                var params = [profileId, passcode];
                try {
                  const result = await db.run(sql,params);
                  const msgOK =  ("UPDATE SUCCESS:" + JSON.stringify(result))
                  return msgOK
                } catch(err) {
                  const msg = "Error in update:"+ JSON.stringify(err);
                  console.log(msg)
                  return msg;
                }
                
                }

    
    

    const getAllUsers = async () =>
      {
          var sql = "SELECT * FROM users"
          var params = [];
          return await db_all(sql, params);
         }


exports.getAllUsers = getAllUsers;
exports.getAllUsersByRole = getAllUsersByRole;
exports.getUserByPasscode = getUserByPasscode;
exports.getStudentsProfileByTeacherWenetId = getStudentsProfileByTeacherWenetId;
exports.updateStudentProfileByWenetId = updateStudentProfileByWenetId;
exports.updateStudentProfileByPasscode = updateStudentProfileByPasscode;
exports.Role = Role;





