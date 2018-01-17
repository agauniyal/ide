# IDE
Learnyoucpp online ide - https://agauniyal.github.io/ide/

### How to develop
- clone the repo locally - `git clone https://github.com/agauniyal/ide.git`
- change directories - `cd ide`
- install all dependencies - `yarn`
- make changes inside `src` directory and run `yarn build`
- (Optional) Format c++ files with `clang-format` :)
- Open webserver on `docs/` directory and view in browser

### How to contribute lessons
- Follow steps from _How to develop_
- Make changes to `src/units/` directory only

The structure of `src/units/` directory is as follows -
```
.
└── 1-Introduction
    ├── chapter-1
    │   ├── main.cpp
    │   └── readme.md
    ...
    ├── chapter-5
    │   ├── helper.hpp
    │   ├── main.cpp
    │   ├── readme.md
    │   └── result.txt
    ...
    2-TypesAndVariables
    ...
```

- [x] Each unit must have its own top-level directory inside `src/units/` named as `{number}-{name}`.
- [x] Every chapter must be contained inside its parent unit as a directory and are to be named as `chapter-{number}.
- [x] At minimum, each chapter must contain a `main.cpp` file and a `readme.md` file.
- [x] A result.txt file, if present, is trimmed and checked for successfull program output to pass the chapters
- [x] Any other `.cpp` or `.hpp` files are opened up in different tabs.
- [x] All other files are ignored
