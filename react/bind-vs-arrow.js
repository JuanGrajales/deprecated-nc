let obj = {
  num: 10,
  func: function () {
    console.log("func", this.num);
  },
  obj2: {
    num2: 11,
    func2: function () {
      console.log("func2 ", this.num);
    },
  },
  func3: function () {
    console.log("func3 ", this.num);
    setTimeout(function () {
      console.log("setTimeout ", this.num);
    }, 1000);
  },
};

obj.func();
obj.obj2.func2();

// const func2Bind = obj.obj2.func2.bind(obj);
// func2Bind();

// obj.func3();
