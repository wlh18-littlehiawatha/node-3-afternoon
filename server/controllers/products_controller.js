module.exports = {

create: (req, res) => {
   const dbInstance = req.app.get('db');
   const {name, description, price, image_url} = req.body;

   dbInstance.create_product([name, description, price, image_url])
   .then( () => res.sendStatus(200))
   .catch( err => {
      res.sendStatus(500).send({errorMessage: "Website currently under maintenance"});
      console.log(err);
   });
},


getOne: (req, res) => {
   const dbInstance = req.app.get('db');
   const {id} = req.params

   dbInstance.read_product(id)
   .then( (product) => res.sendStatus(200).send(product))
   .catch( err => {
      res.sendStatus(500).send({errorMessage: "Website currently under maintenance"});
      console.log(err);
   });
},




getAll: (req, res) => {
   const dbInstance = req.app.get('db');

   dbInstance.read_products()
   .then( (products) => res.sendStatus(200).send(product))
   .catch( err => {
      // console.log(err);
      res.sendStatus(500).send({errorMessage: "Website currently under maintenance"});
   });
},



update: (req, res) => {
   const dbInstance = req.app.get('db');

   dbInstance.update_product([params.id, query.desc])
   .then( () => res.sendStatus(200))
   .catch( err => {
      res.sendStatus(500).send({errorMessage: "Website currently under maintenance"});
      console.log(err);
   });
},



delete: (req, res) => {
   const dbInstance = req.app.get('db');
   const {id} = req.params;

   dbInstance.delete_product(id)
   .then( () => res.sendStatus(200))
   .catch( err => {
      res.sendStatus(500).send({errorMessage: "Website currently under maintenance"});
      console.log(err);
   });
},

}