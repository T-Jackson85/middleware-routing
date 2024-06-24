
const express = require("express")
const router = new express.Router();
const shoppingList = require('./fakeDB')

router.get('', function(req, res, next) {
    try{
    return res.json({data: shoppingList});
    } catch(err) {
        return next(err)
    }
});


router.post('', function(req, res, next){
    try{
      let newItem = new Item(req.body.name, req.body.price);
      return res.json({item: newItem});
    } catch(err) {
        return next(err)
    }
});

router.get('/name:', function(req, res, next) {
    try{
      let savedItem = Item.find(req.params.name);
      return res.json({item: savedItem});
    } catch(err) {
        return next(err)
    }
});


router.patch('/name:', function(req, res, next){
    try{
      let savedItem = Item.update(req.body.name, req.body.price);
      return res.json({item: savedItem});
    } catch(err) {
        return next(err)
    }
});


router.delete('/name:', function(req, res, next) {
    try{
      Item.removed(req.body.name);
      return res.json({message: 'Deleted'});
    } catch(err) {
        return next(err)
    }
});

module.exports
 = router