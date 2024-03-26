

// represents a single station in the train route
// station === node

class Node {
  constructor(station) {
    // next and prev node [ station ]
    this.station = station;
    this.prev = null;
    this.next = null;
  }
}

// represents a train route as linked list
export class LinkedList {
  constructor() {
    // the head and tail are  null - empty route
    this.head = null;
    this.tail = null;
  }

  // adds a new station to the end of the route
  push(station) {
    const newNode = new Node(station);

    if (!this.head) {
      // if the route is empty - the new station becomes both the start and end
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the route has stations - insert the new station at the end
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

//////////////////////////////////////////////////////
  
  // removes and returns the last station in the route
  pop() {
    if (!this.head) {
      // if empty then nothing to remove
      return undefined;
    }

    const poppedValue = this.tail.station;

    if (this.head === this.tail) {
      // if  only one station - set both start and end to null
      this.head = null;
      this.tail = null;
    } else {
      // if there are multiple stations- update the end - previous station
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    return poppedValue;
  }

  // removes and returns the first station in the route
  shift() {
    if (!this.head) {
        // if empty then nothing to remove
      return undefined;
    }

    const shiftedValue = this.head.station;

    if (this.head === this.tail) {
      // if  only one station - set both start and end to null
      this.head = null;
      this.tail = null;
    } else {
            // if there are multiple stations- update start to next station

      this.head = this.head.next;
      this.head.prev = null;
    }

    return shiftedValue;
  }

  //////////////////////////////////////////////

  // adds a new station to start of route
  unshift(station) {
    const newNode = new Node(station);

    if (!this.head) {
           // if the route is empty - the new station becomes both the start and end

      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the route has stations, insert the new station at the beginning
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // deletes the first occurrence of a station in the route
  delete(station) {
    // check if the route is empty
    if (!this.head) {
      return 0; // return 0 for an empty route
    }

    let current = this.head;

    // traverse the route to find the station to delete
    while (current) {
      if (current.station === station) {
        // station found, update pointers to skip the station
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        return 1; // return 1 for successful deletion
      }

      current = current.next;
    }

    return 0; // return 0 if the station is not found
  }

  // counts the total number of stations in the route
  count() {
    if (!this.head) {
      // return 0 for an empty route
      return 0;
    }

    let count = 0;
    let current = this.head;

    // iterate through the route and count each station
    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }
}
