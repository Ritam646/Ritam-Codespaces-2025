#include <stdio.h>
#include <limits.h>

#define INF 99999 // Define infinity as a large value

void floydWarshall(int graph[][100], int V);
void printSolution(int dist[][100], int V);

// Main function to input the number of vertices, edges, and cost matrix
int main() {
    int V, E;
    printf("Enter the number of vertices: ");
    scanf("%d", &V);

    int graph[100][100];

    // Initialize graph with INF (except diagonal elements as 0)
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++) {
            if (i == j)
                graph[i][j] = 0;
            else
                graph[i][j] = INF;
        }
    }

    printf("Enter the number of edges: ");
    scanf("%d", &E);

    printf("Enter the edges with their weights (format: u v w):\n");
    for (int i = 0; i < E; i++) {
        int u, v, w;
        scanf("%d %d %d", &u, &v, &w);
        graph[u][v] = w; // Directed graph
    }

    floydWarshall(graph, V);

    return 0;
}

// Function to implement Floyd-Warshall Algorithm
void floydWarshall(int graph[][100], int V) {
    int dist[100][100];

    // Initialize distance matrix
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++) {
            dist[i][j] = graph[i][j];
        }
    }

    // Dynamic Programming approach: Update distances using Floyd-Warshall algorithm
    for (int k = 0; k < V; k++) {
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (dist[i][k] != INF && dist[k][j] != INF && dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    printSolution(dist, V);
}

// Function to display the shortest path matrix and transitive closure
void printSolution(int dist[][100], int V) {
    printf("\nAll-Pairs Shortest Path Matrix:\n");
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++) {
            if (dist[i][j] == INF)
                printf("%7s", "INF");
            else
                printf("%7d", dist[i][j]);
        }
        printf("\n");
    }

    printf("\nTransitive Closure of the Graph (1 if reachable, 0 otherwise):\n");
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++) {
            if (dist[i][j] == INF)
                printf("%3d", 0);
            else
                printf("%3d", 1);
        }
        printf("\n");
    }
}
