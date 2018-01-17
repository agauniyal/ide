There's one other thing we need to cover before we move over to functions - **Data Types**. C++ is a statically typed language and what that means is, it defines set of possible values and operations associated with our data which can be checked at compile time. For example, if we write -

```cpp
int a{20};
```

we've just declared a variable `a` of _type_ integer. Now `a` being an integer, you can perform additon/subtraction or compare it with other integers. There are several other types in C++ but we'll divide them into following two categories -

* **Fundamental** types eg. int, float, bool...
* **Compound** types eg. pointer, array, class...

In this unit we will only cover Fundamental types and leave Compound types for later.

### TODO

For this lesson, we'll introduce Fundamental integer types. Integer types differ with floating types as they're unable to store decimal digits. So something like `int a{4.5}` will fail to compile but `int a{4}` will do fine. There are two categories of integer types -

* **Signed** integers - able to store negative as well as positive numbers
* **Unsigned** integers - can only store positive numbers

You can make an integer type signed/unsigned by appending these keywords ahead of its declaration. By default, not specifying anything is assumed to be signed, for example -

```cpp
int a{-4};  // signed int
unsigned int b{4}; // unsigned int
unsigned int c{-4}; // this won't compile
```

Sometimes `int` data type is not enough to store all required integer values so C++ also provides `long int` and `long long int` at your disposal. The only difference is they're able to represent much higher range of integers. The usual rules of signedness and unsignedness apply here as well.

* To pass this test, declare an integer `a` with value `42` and print to screen.

Hint - You can use `log()` function to print your integer like this - `log(a);`
