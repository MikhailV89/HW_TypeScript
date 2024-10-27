function createTree(depth: number): any {
    return depth > 0 ? { value: depth, child: createTree(depth - 1) } : null;
}

const tree = createTree(3);
console.log(tree);
