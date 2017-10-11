const stringify = require('../../7kyu/convert-a-linked-list-to-a-string');

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

describe('#7kyu ConvertLinkedListToString', () => {
  it('simple return correct string #1', () => {
    const val = stringify(new Node(1, new Node(2, new Node(3))));
    const expected = '1 -> 2 -> 3 -> null';
    expect(val).to.equal(expected);
  });

  it('simple return correct string #2', () => {
    const val = stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))));
    const expected = '0 -> 1 -> 4 -> 9 -> 16 -> null';
    expect(val).to.equal(expected);
  });

  it('should return null', () => {
    const val = stringify(null);
    expect(val).to.deep.equal('null');
  });
});
