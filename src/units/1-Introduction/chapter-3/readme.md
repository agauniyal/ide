You should've noticed -

```cpp
#include "helper.hpp"
```

in your code by now. `#include` includes other source file into current source file at the line immediately after the directive. What this means is the content of included file(`helper.hpp` here) are copied into the current file so that you can use them in your code.

There are two syntax associated with `#include` -

* `#include <file>`
* `#include "file"`

The first one is generally used when including standard defined header files while the second one is used to include other header files inside our code. In our case we're using `header.hpp` file(you can look at its content by opening associated tab) to include a helper function called `log()`. It takes any number of arguments and prints them to your screen. Don't worry about its implementation which you can safely ignore for now.

### TODO

Since we've already introduced `log()` let's use it! Print a string to your output panel on the bottom of your screen by writing it between `log(` ... `)`. Another thing you might've noticed is like several other programming languages, statements in c++ end with a `;` always, so don't forget to terminate each statement with one!

* To use `log()` function, replace that comment with -

```cpp
log("Hello World!");
```

and execute your program.
