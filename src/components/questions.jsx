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
    {
      question: "Which data structure is used for implementing recursion?",
      options: ["Queue", "Stack", "Heap", "Array"],
      correctAnswer: "Stack",
      explanation: "Recursion uses a stack to keep track of function calls."
    },
    {
      question: "Which sorting algorithm performs best for nearly sorted data?",
      options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
      correctAnswer: "Insertion Sort",
      explanation: "Insertion Sort takes O(n) time for nearly sorted arrays."
    },
    {
      question: "Which data structure is used for implementing an LRU Cache?",
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
      question: "Which searching algorithm works best for large datasets when elements are uniformly distributed?",
      options: ["Linear Search", "Binary Search", "Jump Search", "Interpolation Search"],
      correctAnswer: "Interpolation Search",
      explanation: "Interpolation Search works better than Binary Search when the data is uniformly distributed by estimating the probable position."
    },
    {
      question: "How do you reverse a string in Java?",
      options: [
        "Using StringBuilder’s reverse() method",
        "Using recursion",
        "Using a stack",
        "All of the above"
      ],
      correctAnswer: "All of the above",
      explanation: "All methods can be used to reverse a string efficiently."
    },
    {
      question: "What will be the output of the following C code?",
      codeSnippet: `
      #include <stdio.h>
      int main() {
          int arr[] = {10, 20, 30, 40, 50};
          printf("%d", *(arr + 3));
          return 0;
      }
      `,
      options: ["10", "20", "30", "40"],
      correctAnswer: "40",
      explanation: "`*(arr + 3)` gives the 4th element of the array, which is 40."
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
      question: "Which algorithm efficiently finds the minimum spanning tree of a graph?",
      options: ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Kruskal's Algorithm", "A* Algorithm"],
      correctAnswer: "Kruskal's Algorithm",
      explanation: "Kruskal’s Algorithm efficiently finds the Minimum Spanning Tree using a greedy approach and a disjoint set."
    },
    {
      question: "What will be the output of the following Java code?",
      codeSnippet: `
      public class Main {
          public static void main(String[] args) {
              int[] arr = {1, 2, 3, 4, 5};
              System.out.println(arr[2] + arr[4]);
          }
      }
      `,
      options: ["3", "5", "8", "9"],
      correctAnswer: "8",
      explanation: "arr[2] is 3 and arr[4] is 5, so the output is 3 + 5 = 8."
    },

    {
      question: "How do you remove duplicates from an unsorted array?",
      options: [
        "Sort and remove adjacent duplicates",
        "Use a HashSet",
        "Use two loops",
        "All of the above"
      ],
      correctAnswer: "All of the above",
      explanation: "Sorting helps remove adjacent duplicates, a HashSet ensures unique elements, and two loops work but are inefficient."
    },
    {
      question: "Which of the following is the best way to detect a palindrome string?",
      options: [
        "Using a stack",
        "Reversing and comparing",
        "Using two pointers",
        "All of the above"
      ],
      correctAnswer: "All of the above",
      explanation: "A stack stores characters for LIFO comparison, reversing and comparing works, and two-pointer technique is optimal."
    },
    {
      question: "What is the best way to reverse a linked list?",
      options: [
        "Recursion",
        "Using an additional stack",
        "Iterative pointer reversal",
        "Sorting the list"
      ],
      correctAnswer: "Iterative pointer reversal",
      explanation: "Reversing a linked list efficiently requires adjusting the next pointers of each node iteratively."
    },
    {
      question: "What will be the output of the following C program?",
      codeSnippet: `
      #include <stdio.h>
      int main() {
          int a = 10;
          int *ptr = &a;
          *ptr = *ptr + 5;
          printf("%d", a);
          return 0;
      }
      `,
      options: ["10", "5", "15", "Undefined"],
      correctAnswer: "15",
      explanation: "The pointer updates the value of `a`, so `a` becomes 15."
    },
    {
      question: "How can you find the middle element of a linked list in one traversal?",
      options: [
        "Using a counter",
        "Using two pointers",
        "Using recursion",
        "Sorting the list first"
      ],
      correctAnswer: "Using two pointers",
      explanation: "A slow pointer moves one step while a fast pointer moves two steps, so when the fast pointer reaches the end, the slow one is at the middle."
    },
    {
      question: "What will be the output of the following Java code?",
      codeSnippet: `
      public class Main {
          public static void main(String[] args) {
              String s1 = "Hello";
              String s2 = new String("Hello");
              System.out.println(s1 == s2);
          }
      }
      `,
      options: ["true", "false", "Compilation error", "NullPointerException"],
      correctAnswer: "false",
      explanation: "The `==` operator checks reference equality, and `s1` and `s2` are stored in different memory locations."
    },
    {
      question: "What data structure is used to implement a priority queue?",
      options: ["Stack", "Queue", "Heap", "Linked List"],
      correctAnswer: "Heap",
      explanation: "A heap efficiently supports priority-based insertions and deletions."
    },
    {
      question: "Which algorithm finds the shortest path in a weighted graph?",
      options: [
        "Breadth-First Search",
        "Dijkstra’s Algorithm",
        "Kruskal’s Algorithm",
        "Bellman-Ford Algorithm"
      ],
      correctAnswer: "Dijkstra’s Algorithm",
      explanation: "Dijkstra’s Algorithm efficiently finds the shortest path in a weighted graph using a priority queue."
    },
    {
      question: "How can you swap two numbers without using a third variable?",
      options: [
        "Using arithmetic operations",
        "Using bitwise XOR",
        "Using division and multiplication",
        "All of the above"
      ],
      correctAnswer: "All of the above",
      explanation: "Swapping can be done with arithmetic (a = a + b; b = a - b; a = a - b), bitwise XOR, or multiplication/division."
    },
    {
      question: "What will be the output of the following C code?",
      codeSnippet: `
      #include <stdio.h>
      int main() {
          int x = 5;
          printf("%d %d %d", x++, x++, ++x);
          return 0;
      }
      `,
      options: ["5 6 8", "7 6 5", "Undefined behavior", "6 7 7"],
      correctAnswer: "Undefined behavior",
      explanation: "Modifying `x` multiple times in a single statement leads to undefined behavior in C."
    },
    {
      question: "Which sorting algorithm is most efficient for small datasets?",
      options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Heap Sort"],
      correctAnswer: "Insertion Sort",
      explanation: "For small datasets, Insertion Sort runs efficiently in O(n) time when data is nearly sorted."
    },
    {
      question: "What will be the output of the following Java code?",
      codeSnippet: `
      public class Test {
          public static void main(String[] args) {
              int x = 10;
              System.out.println(x++ + ++x);
          }
      }
      `,
      options: ["21", "22", "20", "Compilation error"],
      correctAnswer: "22",
      explanation: "`x++` returns 10, `++x` increments `x` to 12, so `10 + 12 = 22`."
    },
    {
      question: "What is the best way to find duplicates in an array?",
      options: [
        "Using a HashSet",
        "Sorting and checking adjacent elements",
        "Using nested loops",
        "All of the above"
      ],
      correctAnswer: "All of the above",
      explanation: "A HashSet provides O(n) time complexity, sorting reduces checks, and nested loops work but are inefficient."
    },
    {
      question: "Which algorithm is best suited for finding the strongly connected components of a graph?",
      options: [
        "Dijkstra's Algorithm",
        "Kosaraju’s Algorithm",
        "Bellman-Ford Algorithm",
        "Kruskal’s Algorithm"
      ],
      correctAnswer: "Kosaraju’s Algorithm",
      explanation: "Kosaraju’s Algorithm efficiently finds strongly connected components using DFS twice."
    },
    {
      question: "What will be the output of the following Java code?",
      codeSnippet: `
      public class Main {
          public static void main(String[] args) {
              String str = "java";
              str.concat("code");
              System.out.println(str);
          }
      }
      `,
      options: ["javacode", "java", "code", "Compilation error"],
      correctAnswer: "java",
      explanation: "Strings are immutable in Java. `concat()` creates a new string, but `str` remains unchanged."
    },
    {
      question: "How can you check if a binary tree is balanced?",
      options: [
        "By checking the height difference between left and right subtrees",
        "Using level order traversal",
        "By counting leaf nodes",
        "By using a priority queue"
      ],
      correctAnswer: "By checking the height difference between left and right subtrees",
      explanation: "A binary tree is balanced if the height difference between left and right subtrees is at most 1 for every node."
    },
    {
      question: "Which data structure is used to evaluate postfix expressions?",
      options: ["Queue", "Stack", "Heap", "Tree"],
      correctAnswer: "Stack",
      explanation: "A stack is used to store operands and perform operations in Last-In-First-Out order."
    },


    {
        question: "Which data structure is best suited for implementing an LRU (Least Recently Used) cache?",
        options: ["Array", "Stack", "HashMap + Doubly Linked List", "Queue"],
        correctAnswer: "HashMap + Doubly Linked List",
        explanation: "A HashMap provides O(1) lookup, and a doubly linked list maintains the order of recently used elements."
    },
    {
        question: "How do you efficiently find the kth smallest element in an unsorted array?",
        options: ["Sorting the array", "Using a min-heap", "Using quickselect", "Both min-heap and quickselect"],
        correctAnswer: "Both min-heap and quickselect",
        explanation: "Quickselect (O(n) average) and a min-heap (O(k log n)) are the best approaches."
    },
    {
        question: "What will be the output of this C code?",
        codeSnippet: `
        #include <stdio.h>
        int main() {
            int a = 5;
            printf("%d %d %d", a++, ++a, a);
            return 0;
        }
        `,
        options: ["5 7 7", "6 6 7", "Undefined behavior", "5 6 6"],
        correctAnswer: "Undefined behavior",
        explanation: "Modifying `a` multiple times in a single statement leads to undefined behavior in C."
    },
    {
        question: "Which sorting algorithm works best when the array is nearly sorted?",
        options: ["Quick Sort", "Bubble Sort", "Insertion Sort", "Merge Sort"],
        correctAnswer: "Insertion Sort",
        explanation: "Insertion Sort runs in O(n) time when the array is nearly sorted, making it highly efficient."
    },
    {
        question: "How do you detect a loop in a directed graph?",
        options: ["Using BFS", "Using DFS", "Using a priority queue", "Using a min-heap"],
        correctAnswer: "Using DFS",
        explanation: "A directed graph cycle can be detected using DFS by tracking visited and recursion stack nodes."
    },
    {
        question: "What will be the output of this Java program?",
        codeSnippet: `
        public class Main {
            public static void main(String[] args) {
                int x = 5;
                System.out.println(x++ + ++x);
            }
        }
        `,
        options: ["10", "11", "12", "Undefined behavior"],
        correctAnswer: "12",
        explanation: "First `x++` returns 5, then `++x` increases `x` to 7, so `5 + 7 = 12`."
    },
    {
        question: "Which algorithm is best for finding the largest subarray sum?",
        options: ["Merge Sort", "Kadane’s Algorithm", "Dijkstra’s Algorithm", "Bellman-Ford Algorithm"],
        correctAnswer: "Kadane’s Algorithm",
        explanation: "Kadane’s Algorithm finds the maximum subarray sum in O(n) time."
    },
    {
        question: "What is the best way to implement an efficient min/max stack?",
        options: [
            "Using two stacks",
            "Using a queue",
            "Using a HashMap",
            "Using an AVL tree"
        ],
        correctAnswer: "Using two stacks",
        explanation: "One stack stores values, and the second maintains the minimum/max value for O(1) retrieval."
    },
    {
        question: "How can you check if two strings are anagrams?",
        options: [
            "Sorting both strings and comparing",
            "Using character frequency counting",
            "Using a HashMap",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All methods work, but using character frequency counting in O(n) time is the most efficient."
    },
    {
        question: "Which traversal method is best for printing a binary search tree in sorted order?",
        options: ["Preorder", "Postorder", "Inorder", "Level-order"],
        correctAnswer: "Inorder",
        explanation: "Inorder traversal of a BST prints values in sorted order."
    },
    {
        question: "How do you check if a number is a power of two?",
        options: [
            "Using modulo operator",
            "Using bitwise AND",
            "Using a loop",
            "Using recursion"
        ],
        correctAnswer: "Using bitwise AND",
        explanation: "A number n is a power of two if `(n & (n - 1)) == 0`."
    },
    {
        question: "What will be the output of this Java program?",
        codeSnippet: `
        public class Test {
            public static void main(String[] args) {
                String s = "hello";
                s.concat("world");
                System.out.println(s);
            }
        }
        `,
        options: ["helloworld", "hello", "world", "Compilation error"],
        correctAnswer: "hello",
        explanation: "Strings are immutable in Java; `concat()` does not modify the original string."
    },
    {
        question: "How do you reverse words in a given sentence?",
        options: [
            "Using a stack",
            "Using built-in split and reverse",
            "Using recursion",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All approaches work, with stack and built-in functions being the most efficient."
    },
    {
        question: "Which algorithm efficiently finds bridges in an undirected graph?",
        options: [
            "Kruskal’s Algorithm",
            "Tarjan’s Algorithm",
            "Dijkstra’s Algorithm",
            "Bellman-Ford Algorithm"
        ],
        correctAnswer: "Tarjan’s Algorithm",
        explanation: "Tarjan’s Algorithm finds articulation points and bridges in O(V + E) time."
    },
    {
        question: "How do you implement an efficient queue using stacks?",
        options: [
            "Using two stacks",
            "Using a priority queue",
            "Using a linked list",
            "Using an array"
        ],
        correctAnswer: "Using two stacks",
        explanation: "One stack is used for enqueue operations, and the other is used for dequeue operations."
    },
    {
        question: "How do you count the number of set bits in an integer?",
        options: [
            "Using bitwise AND",
            "Using Kernighan’s Algorithm",
            "Using a loop",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "Kernighan’s Algorithm removes the rightmost set bit efficiently in O(k) time."
    },
    {
        question: "Which data structure is best for implementing a cache with fast access and eviction?",
        options: ["HashMap", "Queue", "LRU Cache (HashMap + LinkedList)", "Stack"],
        correctAnswer: "LRU Cache (HashMap + LinkedList)",
        explanation: "An LRU cache maintains order using a doubly linked list and provides O(1) lookup via a HashMap."
    },
    {
        question: "What will be the output of this Java code?",
        codeSnippet: `
        public class Main {
            public static void main(String[] args) {
                int a = 10;
                System.out.println(a++ + a++);
            }
        }
        `,
        options: ["20", "21", "19", "Undefined behavior"],
        correctAnswer: "21",
        explanation: "`a++` returns 10, then `a++` returns 11, so `10 + 11 = 21`."
    }


  ];
  
  // Function to add new questions to the array

  
