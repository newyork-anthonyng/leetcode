## Lessons learned

### XOR Operator (`^`)
The [XOR operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#(Bitwise_XOR%29) returns a `0` when 2 bits are the same, and a `1` when 2 bits are different.

| a | b | a XOR b|
| - | - | ------ |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### Bitwise operators lead to fancy one line solutions
My solution had a lot more code (3 functions 😅). But the benchmark shows that my answer wasn't super slow in comparison.

> MySolution x 1,496,543 ops/sec ±1.10% (82 runs sampled)

> OtherSolution x 1,726,999 ops/sec ±1.16% (86 runs sampled)
