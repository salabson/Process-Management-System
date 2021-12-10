const { Guarantee } = require( "../models");


 getGuanranteebyGuarantorId = (async (req, res) => {
    const guarantorId = req.params.guarantorId;
    try {
        const data = await Guarantee.findAll({where: {GuarantorId:guarantorId}});
        res.json(data);
    } catch (error) {
        console.log(error.message);
    }


})

createGuarantee = (async (req, res) => {
    const guanrantee = req.body;
    try {
        const id = await Guarantee.create(guanrantee);
        
        res.json(guanrantee);
        res.json(id)
    } catch (error) {
        console.log(error.message);
    }

})

module.exports = {getGuanranteebyGuarantorId, createGuarantee};