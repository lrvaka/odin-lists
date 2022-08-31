const linkedListFactory = () => {
  let head = null;
  let tail = null;
  let size = 0;

  const nodeFactory = (value = null, next = null) => {
    return { value, next };
  };

  function prepend(value) {
    if (!this.head) {
      this.head = nodeFactory(value, null);
      this.tail = this.head;
    } else {
      this.head = nodeFactory(value, this.head);
    }

    this.size++;
  }

  function append(value) {
    if (!this.head) {
      this.head = nodeFactory(value, null);
      this.tail = this.head;
    } else {
      let tmp = this.head;
      while (tmp.next) {
        tmp = tmp.next;
      }
      tmp.next = nodeFactory(value, null);
      this.tail = tmp.next;
    }
    this.size++;
  }

  function traverse() {
    let tmp = this.head;
    while (tmp) {
      console.log(tmp);
      tmp = tmp.next;
    }
  }

  function at(index) {
    let count = 0;
    let tmp = this.head;

    if (index < 0) return "No node exists at this index";

    while (count != index && tmp.next) {
      tmp = tmp.next;
      count++;
    }

    if (count != index) return "No node exists at this index";

    return tmp;
  }

  function pop() {
    let tmp = this.head;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }

    if (this.size === 2) {
      this.tail = this.head;
      this.head.next = null;
      this.size--;
      return;
    }

    while (tmp.next) {
      tmp = tmp.next;
      if (!tmp.next.next) {
        tmp.next = null;
        this.tail = tmp;
        this.size--;
        break;
      }
    }
  }

  function contains(value) {
    let tmp = this.head;
    while (tmp) {
      if (tmp.value === value) {
        return true;
      }
      tmp = tmp.next;
    }
    return false;
  }

  function find(value) {
    let tmp = this.head;
    let count = 0;
    while (tmp) {
      if (tmp.value === value) {
        return count;
      }
      tmp = tmp.next;
      count++;
    }
  }

  function toString() {
    let tmp = this.head;
    let msg = "";
    while (tmp) {
      if (!tmp.next) {
        msg += tmp.value + " -> null";
      } else {
        msg += tmp.value + " -> ";
      }

      tmp = tmp.next;
    }
    return msg;
  }

  function insertAt(index, value) {
    let tmp = this.head;
    let count = 0;

    while (tmp) {
      if (count === index) {
        return (tmp.value = value);
      }
      tmp = tmp.next;
      count++;
    }

    return console.error("A node at this index does not exist");
  }

  function removeAt(index) {
    let tmp = this.head;
    let count = 0;

    if (index === 0 && this.tail === this.head) {
      this.head = tmp.next;
      this.tail = this.head;
      this.size--;
      return;
    }

    if (index === 0) {
      this.head = tmp.next;
      this.size--;
      return;
    }

    if (index === this.size - 1) {
      while (tmp.next) {
        tmp = tmp.next;
        if (!tmp.next.next) {
          tmp.next = null;
          this.tail = tmp;
          this.size--;
          return;
        }
      }
    }

    let prev;
    while (tmp) {
      if (count === index - 1) prev = tmp;
      if (count === index) {
        prev.next = tmp.next;
        tmp = null;
        this.size--;
        return;
      }
      tmp = tmp.next;
      count++;
    }

    return console.error("A node at this index does not exist");
  }

  return {
    head,
    append,
    prepend,
    traverse,
    size,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const linkedList = linkedListFactory();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);


linkedList.removeAt(0);
linkedList.removeAt(3);

console.log(linkedList.head);
