function hero(name, power) {
  console.log(name);
  this.name = name;
  this.power = power;

  this.introduce = function() {
    console.log(this.name + " has the power of " + this.power);
  }
}
