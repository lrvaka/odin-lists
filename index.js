const nodeFactory = (value = null, next = null) => {
  return { value, next };
};

const linkedListProto = {
  prepend(value) {
    if (!this.head) {
      this.head = nodeFactory(value, null);
      this.tail = this.head;
    } else {
      this.head = nodeFactory(value, this.head);
    }

    this.size++;
  },

  append(value) {
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
  },

  traverse() {
    let tmp = this.head;
    while (tmp) {
      console.log(tmp);
      tmp = tmp.next;
    }
  },

  at(index) {
    let count = 0;
    let tmp = this.head;

    if (index < 0) return "No node exists at this index";

    while (count != index && tmp.next) {
      tmp = tmp.next;
      count++;
    }

    if (count != index) return "No node exists at this index";

    return tmp;
  },

  pop() {
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
  },

  contains(value) {
    let tmp = this.head;
    while (tmp) {
      if (tmp.value === value) {
        return true;
      }
      tmp = tmp.next;
    }
    return false;
  },

  find(value) {
    let tmp = this.head;
    let count = 0;
    while (tmp) {
      if (tmp.value === value) {
        return count;
      }
      tmp = tmp.next;
      count++;
    }
  },

  toString() {
    let tmp = this.head;
    let msg = "";
    let emptyMsg = "No nodes available";
    while (tmp) {
      if (!tmp.next) {
        msg += tmp.value + " -> null";
      } else {
        msg += tmp.value + " -> ";
      }

      tmp = tmp.next;
    }
    return msg ? msg : emptyMsg;
  },

  insertAt(index, value) {
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
  },

  removeAt(index) {
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
  },
};

const linkedListFactory = () => {
  let head = null;
  let tail = null;
  let size = 0;

  return Object.assign(Object.create(linkedListProto), { head, tail, size });
};

const linkedList = linkedListFactory();

linkedList.append(1);

console.log(linkedList);
