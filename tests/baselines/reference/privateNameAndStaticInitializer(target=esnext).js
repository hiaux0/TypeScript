//// [privateNameAndStaticInitializer.ts]
class A {
  #foo = 1;
  static inst = new A();
  #prop = 2;
}



//// [privateNameAndStaticInitializer.js]
let A = /** @class */ (() => {
    class A {
        constructor() {
            this.#foo = 1;
            this.#prop = 2;
        }
        #foo;
        #prop;
    }
    A.inst = new A();
    return A;
})();
