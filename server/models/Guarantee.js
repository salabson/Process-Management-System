module.exports = (sequlize, DataTypes) =>  {
    const Guarantee = sequlize.define("Guarantee",{
        Name : {
            type : DataTypes.STRING,
            AllowNull : false
        },
        AccountNo : {
            type : DataTypes.STRING,
            AllowNull : false

        },
        PhoneNo : {
            type : DataTypes.STRING,
            AllowNull : false
        },
        Address : {
            type : DataTypes.STRING,
            AllowNull : false
        },

        LoanAmount : {
            type : DataTypes.FLOAT,
            AllowNull : false
        },
        Repayment : {
            type : DataTypes.FLOAT,
            AllowNull : false
        },
        StartDate : {
            type : DataTypes.DATEONLY,
            AllowNull : false
        },
        EndDate : {
            type : DataTypes.DATEONLY,
            AllowNull : false
        }

    });

    return Guarantee;

};