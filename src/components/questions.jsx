// questions.js (Global Question Array)
export const criticalQuestions = [
    {
      question: "How would you find the first non-repeating character in a string?",
      options: ["Use a hash map", "Sort the string", "Use two nested loops", "Use a stack"],
      correctAnswer: "Use a hash map",
      explanation: "A hash map can store the frequency of characters, and a single pass can identify the first non-repeating one."
    },
    {
      question: "How can you detect if a linked list has a cycle?",
      options: ["Use a hash set", "Use Floyd's Cycle Detection algorithm", "Reverse the linked list", "Sort the linked list"],
      correctAnswer: "Use Floyd's Cycle Detection algorithm",
      explanation: "The Floyd’s cycle-finding algorithm uses two pointers moving at different speeds to detect cycles."
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      correctAnswer: "O(log n)",
      explanation: "Binary search halves the search space each step, leading to logarithmic time complexity."
    },
    {
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Merge Sort"],
      correctAnswer: "Merge Sort",
      explanation: "Merge Sort has an average time complexity of O(n log n), which is better than O(n^2) sorting algorithms."
    },
    {
      question: "What data structure is used for implementing recursion?",
      options: ["Queue", "Stack", "Heap", "Array"],
      correctAnswer: "Stack",
      explanation: "Recursion uses a stack to keep track of function calls."
    },
    {
      question: "Which data structure is used in Breadth-First Search (BFS)?",
      options: ["Stack", "Queue", "Heap", "Graph"],
      correctAnswer: "Queue",
      explanation: "BFS explores all neighbors at the present depth prior to moving on to nodes at the next depth level using a queue."
    },
    {
      question: "What is the best way to check if a number is prime?",
      options: ["Loop through all numbers up to n", "Loop through numbers up to sqrt(n)", "Check divisibility by 2 only", "Use logarithm"],
      correctAnswer: "Loop through numbers up to sqrt(n)",
      explanation: "Checking divisibility up to sqrt(n) reduces the number of iterations needed for prime checking."
    },
    {
      question: "Which data structure is used for implementing LRU Cache?",
      options: ["Array", "Hash Table and Doubly Linked List", "Queue", "Heap"],
      correctAnswer: "Hash Table and Doubly Linked List",
      explanation: "An LRU cache efficiently tracks recently used elements using a combination of a hash table and a doubly linked list."
    },
    {
      question: "Which traversal method visits the left subtree, root, and then right subtree?",
      options: ["Pre-order", "In-order", "Post-order", "Level-order"],
      correctAnswer: "In-order",
      explanation: "In an in-order traversal, the left subtree is visited first, followed by the root, and then the right subtree."
    },
    {
      question: "Which algorithm is best for finding the shortest path in an unweighted graph?",
      options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Breadth-First Search", "Depth-First Search"],
      correctAnswer: "Breadth-First Search",
      explanation: "BFS guarantees the shortest path in an unweighted graph by exploring all nodes at the same depth before moving deeper."
    },
    {
      question: "Which algorithm efficiently finds the minimum spanning tree of a graph?",
      options: ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Kruskal's Algorithm", "A* Algorithm"],
      correctAnswer: "Kruskal's Algorithm",
      explanation: "Kruskal’s Algorithm efficiently finds the Minimum Spanning Tree using a greedy approach and a disjoint set."
    },
    {
      question: "How would you implement a stack using a queue?",
      options: ["Using two queues", "Using one queue with pop operation", "Using a linked list", "Stacks cannot be implemented using queues"],
      correctAnswer: "Using two queues",
      explanation: "Two queues can be used to simulate stack operations by ensuring LIFO order."
    },
    {
      question: "Which data structure efficiently implements priority queues?",
      options: ["Stack", "Queue", "Heap", "Linked List"],
      correctAnswer: "Heap",
      explanation: "Heaps provide efficient insert and delete operations, making them ideal for priority queues."
    },
    {
      question: "What is the worst-case time complexity of Quick Sort?",
      options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
      correctAnswer: "O(n^2)",
      explanation: "Quick Sort has an average time complexity of O(n log n), but in the worst case (when the pivot is the smallest or largest element), it degrades to O(n^2)."
    },
    {
      question: "What is the space complexity of Merge Sort?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctAnswer: "O(n)",
      explanation: "Merge Sort requires additional space to store the temporary arrays, leading to a space complexity of O(n)."
    },
    {
      question: "Which data structure is best suited for implementing a circular buffer?",
      options: ["Array", "Queue", "Heap", "Circular Queue"],
      correctAnswer: "Circular Queue",
      explanation: "A circular queue is used to efficiently manage a buffer with a fixed size."
    },
    {
      question: "How would you check if two strings are anagrams?",
      options: ["Sort and compare", "Use frequency counting", "Use recursion", "Compare substrings"],
      correctAnswer: "Use frequency counting",
      explanation: "Using frequency counting allows checking anagrams in linear time, whereas sorting takes O(n log n)."
    },
    {
      question: "Which data structure is used for implementing undo operations?",
      options: ["Queue", "Stack", "Heap", "Array"],
      correctAnswer: "Stack",
      explanation: "Stacks follow the Last In First Out (LIFO) principle, making them ideal for undo operations."
    },
    {
      question: "Which searching algorithm works best for large datasets when elements are uniformly distributed?",
      options: ["Linear Search", "Binary Search", "Jump Search", "Exponential Search"],
      correctAnswer: "Jump Search",
      explanation: "Jump Search works better than Binary Search when the data is uniformly distributed by skipping elements in fixed steps."
    },
    // Add 80 more questions...
  ];
  
  // Function to add new questions to the array

  