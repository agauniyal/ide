Now we've enough material to cover for an introduction to functions in C++. They're declared like -

```cpp
returnType name(T1 arg1, T2 arg2, T3 arg3...) {
    // body of function
    return statement;
}
```

where

* returnType is placeholder for the type of value it returns
* name is obviously the name of your function
* arg1, arg2, ... represents the parameters taken by this function along with their types T1, T2, ...
* `{}` marks the body of the function
* a return statement that returns a value from the function

As an example we've already created a function named `sum()` that takes two integer types and returns an integer as result. To call a function we write -

```cpp
returnType result = name(/* Pass parameters here */);
```

replacing name with actual function name and parameters with what you want to pass. If this function returns anything, we write another variable on left side of calling it. A function can also choose to return nothing and you don't need a return statement in that case, as we'll see in upcoming units.

Did you notice that we skipped a `return` statement in `int main(){}` even though return type is mentioned as `int`, until now? That is because you can skip it in `main()` and it is implied to be `return 0;` by default. The int value returned by main(), if any, is received by the system which chooses to use it for own purposes. A nonzero value from main() indicates failure.

### TODO

We've already created a `sum()` function that takes two integers and returns the addition of both which is then stored in `resultSum` variable. This variable is then printed on the screen along with a message. To pass this lesson, you need to -

* Declare a function named `diff()` below `sum()`, that takes two integers and returns the difference of them
* Call the `diff()` function by passing `8` and `2` to it
* Store the result of call in `resultDiff` variable

The value of `resultDiff` will be printed on the console.
