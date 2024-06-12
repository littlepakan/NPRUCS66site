const User = require('../models/users');


exports.read = async(req, res) => {
  try{
    //code
    const id = req.params.id;
    const userRecorded = await User.findOne({ _id:id }).exec();
    res.send(userRecorded);
  } catch (err) {
    //error
    console.log(err);
    res.status(500).send('server error');
  }
}

exports.list = async(req, res) => {
  try{
    //code
    const userRecorded = await User.find({}).exec();
    
    res.send(userRecorded);
  } catch (err) {
    //error
    console.log(err);
    res.status(500).send('server error');
  }
}

exports.create = async(req, res) => {
  try{
    //code
    console.log(req.body)
    const userRecorded = await User(req.body).save();
  res.send(userRecorded);
  }catch(err){
    //error
    console.log(err);
    res.status(500).send('server error');
  }
}

exports.update = async(req, res) => {
  try{
    //code
    const id = req.params.id;
    const userUpdated = await User.findOneAndUpdate({ _id: id},req.body, {new: true}).exec(); 
    res.send(userUpdated);
  }catch(err){
    //error
    console.log(err);
    res.status(500).send('server error');
  }
}

exports.remove = async(req, res) => {
  try{
    //code
    const id = req.params.id;
    const userRemoved = await User.findOneAndDelete({ _id: id}).exec(); 
    res.send(userRemoved);
  }catch(err){
    //error
    console.log(err);
    res.status(500).send('server error');
  }
}