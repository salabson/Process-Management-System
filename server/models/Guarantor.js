module.exports = (sequelize, Datatypes) => {
    const Guarantor = sequelize.define("Guarantor", {
        Name: {
            type: Datatypes.STRING,
            AllowNull: false
        }, 

        AccountNo: {
            type: Datatypes.STRING,
            AllowNull: false,
        }, 

        Address: {
            type: Datatypes.STRING,
            AllowNull: false,
        }, 

        PhoneNo: {
            type: Datatypes.STRING,
            AllowNull: false,
        }, 

        Salary: {
            type: Datatypes.FLOAT,
            AllowNull: false,
        }, 


    });

    return Guarantor;

};