class Graph {
  private adjacencyList: Record<string, string[]>;
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(start: string, end: string) {
    this.addVertex(start);
    this.addVertex(end);

    if (!this.adjacencyList[start].includes(end)) {
      this.adjacencyList[start].push(end);
    }

    if (!this.adjacencyList[end].includes(start)) {
      this.adjacencyList[end].push(start);
    }
  }

  breadthFirstSearch(
    queue: string[] = [],
    visited: Record<string, boolean> = {},
    parent: Record<string, string> = {}
  ) {
    const current = queue.shift();

    console.log({ queue, visited, parent });

    this.adjacencyList[current as string]?.forEach((vertex: string) => {
      if (!visited[vertex]) {
        parent[vertex as string] = current as string;
        visited[vertex] = true;
        queue.push(vertex);
      }
    });
  }

  getIntersection(
    visitedFromSource: Record<string, boolean>,
    visitedFromTarget: Record<string, boolean>
  ) {
    for (let vertex in this.adjacencyList) {
      if (visitedFromSource[vertex] && visitedFromTarget[vertex]) {
        return vertex;
      }
    }
  }

  getPath(
    parentFromSource: Record<string, string>,
    parentFromTarget: Record<string, string>,
    source: string,
    target: string,
    intersection: string
  ) {
    let path = [intersection];

    let current = intersection;

    while (current !== source) {
      path.push(parentFromSource[current]);
      current = parentFromSource[current];
    }

    path = path.reverse();

    current = intersection;

    while (current !== target) {
      path.push(parentFromTarget[current]);
      current = parentFromTarget[current];
    }

    return path;
  }

  bidirectionalSearch(source: string, target: string): string[] | undefined {
    const visitedFromSource: Record<string, boolean> = {};
    const visitedFromTarget: Record<string, boolean> = {};

    const parentFromSource = {};
    const parentFromTarget = {};

    const sourceQueue: string[] = [];
    const targetQueue = [];

    sourceQueue.push(source);
    visitedFromSource[source] = true;

    targetQueue.push(target);
    visitedFromTarget[target] = true;

    while (sourceQueue.length && targetQueue.length) {
      this.breadthFirstSearch(sourceQueue, visitedFromSource, parentFromSource);
      this.breadthFirstSearch(targetQueue, visitedFromTarget, parentFromTarget);

      const intersection = this.getIntersection(
        visitedFromSource,
        visitedFromTarget
      );

      if (intersection) {
        return this.getPath(
          parentFromSource,
          parentFromTarget,
          source,
          target,
          intersection
        );
      }
    }
  }
}

export default Graph;
