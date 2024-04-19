export class Robot {
    #name = "";
    
    constructor() { this.reset() }
    
    static #names = [];
  
    get name() { return this.#name; }
  
    reset() { this.#name = Robot.#names.splice(Math.random() * Robot.#names.length | 0, 1)[0]; }
  
    static releaseNames() { 
      Robot.#names = Array.from({ length: 67599 }, (_, no) =>
        `${String.fromCharCode(65 + no / 26000 | 0)
        }${String.fromCharCode(65 + ((no / 1000) % 26))
        }${(no % 1000).toString().padStart(3, '0')}`);
    }
  }
  
  Robot.releaseNames();
  