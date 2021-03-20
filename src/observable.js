class Subject {
  state = 0;
  observers = [];

  add(observer) {
    this.observers.push(observer);
    console.log(this.observers);
  }

  getState() {
    return this.state;
  }

  setState(value) {
    this.state = value;

    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].signal(this);
    }
  }
}

class Observer {
  signal(subject) {
    const currentValue = subject.getState();
    console.log(currentValue);
  }
}

const observer = new Observer();
const subject = new Subject();

subject.add(observer);
subject.setState(10);