const getMainCode = () => {
  const editor = state.editor.instances.find(i => i.name === 'main.cpp');
  return editor.instance.getValue();
};

const getExtraCode = () => {
  return state.editor.instances
    .filter(i => i.name !== 'main.cpp')
    .map(f => ({ file: f.name, code: f.instance.getValue() }));
};

const trimLines = s => {
  return s.replace(/[ \t]*\n+[ \t]*/g, '\n');
};

const getCompilerOptions = () => {
  return JSON.stringify({
    code: getMainCode(),
    codes: getExtraCode(),
    options: 'warning,optimize,boost-nothing-gcc-head,c++2a,cpp-pedantic',
    compiler: 'gcc-head',
    save: true,
    stdin: document.getElementById('input-box').value
  });
};

const checkResult = (c, r) => {
  c = c === undefined ? '' : c.trim();
  r = r === undefined ? '' : trimLines(r).trim();

  const result = state.progress.getResult();

  if (c.length === 0 && r === trimLines(result)) {
    swal('Passed', 'Answer is correct!', 'success');

    const current = state.progress.get();
    if (current.unit < units.length && current.chapter < units[current.unit].chapters.length) {
      if (current.chapter + 1 !== units[current.unit].chapters.length) {
        state.progress.set({ unit: current.unit, chapter: current.chapter + 1 });
      } else {
        state.progress.set({
          unit: current.unit + 1 === units.length ? 0 : current.unit + 1,
          chapter: 0
        });
      }
    }
  } else {
    const errorMsg = c.length === 0 ? 'Answer is incorrect!' : 'Compilation failed!';
    swal('Oops...', errorMsg, 'error');
  }
};

const compile = () => {
  if (state.compiler.isCompiling) {
    return;
  }

  const compileButton = document.getElementById('compile-button');

  state.compiler.isCompiling = true;
  compileButton.innerText = '💫';

  fetch('https://wandbox.org/api/compile.json', {
    method: 'POST',
    body: getCompilerOptions(),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(function(response) {
      state.compiler.isCompiling = false;
      return response.json();
    })
    .then(function(j) {
      const output = document.getElementById('output-box').children[0];
      compileButton.innerText = '🔥';
      output.innerText = '';
      output.innerText += j.compiler_message ? j.compiler_message + '\n\n' : '';
      output.innerText += j.program_message ? j.program_message + '\n\n' : '';
      output.innerText += '\n\tProgram Exited with status: ' + j.status;
      output.innerText += '\n\tPermalink: ' + j.url + '\n ';

      output.scrollTop = output.scrollHeight;

      checkResult(j.compiler_message, j.program_message);
    })
    .catch(function(error) {
      console.log(error);
      compileButton.innerText = '💥';
      state.compiler.isCompiling = false;
    });
};

const compileButton = document.createElement('div');
compileButton.id = 'compile-button';
compileButton.innerText = '🔥';
compileButton.onclick = compile;
document.body.appendChild(compileButton);
