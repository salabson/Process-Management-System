const { where } = require("sequelize/dist");
const { Guarantor } = require("../models"); 

// get all guurantor controller 
 getGuarantors  = (async (req, res) => {
     try {
        const listOfGuarantors = await Guarantor.findAll();
        res.json(listOfGuarantors);
     } catch (error) {
         console.log(error.message);
     }
   
});

 createGuarantors  = ( async (req, res)  => {
    const guarantor = req.body;
     try {
        await Guarantor.create(guarantor)
        res.json(guarantor); 
     } catch (error) {
         console.log(error.message);
     }
    
    

});

updateGuarantor = ( async (req, res) => {
    const id = req.params.id;
    const guarantor = req.body;
    try {
       const num =  await Guarantor.update(guarantor, {where: {id:id}});
       if (num==1) {
           res.json(`Guarantor with id: ${id} is successfully updated`);
       } else {
        res.json(`Error in updating guarantor with id: ${id}`);
       }
    } catch (error) {
        console.log(error.message);
    } 

});

deleteGuarantor = ( async (req, res) => {
    const id = req.params.id;
       try {
        const num = await Guarantor.destroy({where:{id:id}})
            if (num==1) {
                res.json(`Guarantor with id: ${id} is succesfully deleted`);
            } else {
                res.json(`Error in deleting guarantor with id: ${id} `);
            }
    } catch (error) {
        console.log(error.message);
    }
    



});


module.exports ={getGuarantors, createGuarantors, updateGuarantor, deleteGuarantor};
