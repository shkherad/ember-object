const Pet = Ember.Object.extend({
  eat: function(){
    return "nom nom nom";
  },

  sleep: function(){
    return "zzzzz";
  }
});

let bruce = Pet.create({
  name: "Bruce",
  age: 9
});

bruce.set('age',10);
console.log(bruce.age);

const Dog = Pet.extend({
  bark: function(){
    return "arf!";
  }
});

let jelly = Dog.create({
  name: "Jellybeans",
  age: 7
})

////// LAB 2: Computed properties

const Animal = Ember.Object.extend({
  noise: function(){
    return "rawr!";
  },
  eat: function(){
    return "nom nom nom";
  }
});

const Dog = Animal.extend({
  fullName: Ember.computed('givenName', 'surname', function(){
    return this.get('givenName') + " " + this.get('surname');
  }),

  puppies: [],

  isPuppyFido: Ember.computed('puppies.@each.name', function(name){
    let puppies = this.get('puppies');
    return puppies.forEach((puppy) => function(){
      if (puppy.get('name') === "Fido"){
        return "There is a puppy named Fido!";
      } else {
        return "Sorry, no puppies named Fido";
      }
    });
  })
});

let kobe = Dog.create({
  givenName: "Kobe",
  surname: "Kheradpey",
  puppies: [
    Ember.Object.create({name: "Fido", age: 2}),
    Ember.Object.create({name: "Riley", age: 3}),
    Ember.Object.create({name: "Jordie", age: 13})
  ]
});
