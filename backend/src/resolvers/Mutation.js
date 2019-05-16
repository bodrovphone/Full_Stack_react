const Mutations = {
  createDog(parent, args, ctx, info) {
    //create a Dog
    global.dogs = global.dogs || [];
    const newDog = { name: args.name };
    global.dogs.push(newDog);
    return newDog;
  }
};

module.exports = Mutations;
