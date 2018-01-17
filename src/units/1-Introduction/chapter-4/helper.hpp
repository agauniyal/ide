#include <iostream>

template <typename... Args>
void log(Args... args)
{
    ((std::cout << args << ' '), ...) << '\n';
}
