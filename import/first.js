var dbObj = {}

dbObj.users =[
    {
        name:'Alvin',
        role:'Admin'
    },
    {
        name:'Shubham',
        role:'User'
    }
]

dbObj.dbquery={
    find:(table) => { return `Select * from ${table}`},
    insert:(table,dataObj) => {return `Insert into ${table} name,city VALUES(${dataObj.name},${dataObj.city})`}
}


//module.exports = dbObj
export default dbObj