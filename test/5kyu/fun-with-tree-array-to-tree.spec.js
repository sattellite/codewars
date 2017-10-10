const { arrayToTree, TreeNode } = require('../../5kyu/fun-with-tree-array-to-tree');

describe('#5kyu ArrayToTree', () => {
  it('should return undefined to empty array', () => {
    const val = arrayToTree([]);
    expect(val).to.be.an('undefined');
  });

  it('should return correct tree', () => {
    const val = arrayToTree([17, 0, -4, 3, 15]);
    const expected = new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4));
    expect(JSON.stringify(val)).to.equal(JSON.stringify(expected));
  });
});
