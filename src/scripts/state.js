const state = {
  editor: {
    description: null,
    root: null,
    instances: [],
    settings: {
      language: 'cpp',
      roundedSelection: false,
      scrollBeyondLastLine: false,
      minimap: { enabled: false },
      renderControlCharacters: true,
      useTabStops: true,
      fontSize: 17,
      autoIndent: true,
      lineNumbersMinChars: 3,
      fontFamily: 'Inconsolata',
      renderIndentGuides: false,
      scrollbar: { vertical: 'hidden' }
    },
    resizeAll() {
      for (e of state.editor.instances) {
        e.instance.layout();
      }
    }
  },
  progress: {
    currentUnit: 0,
    currentChapter: 0,
    update() {
      const editorBox = state.editor.root.contentItems[0].contentItems[0].contentItems[1];
      const chapter = units[state.progress.currentUnit].chapters[state.progress.currentChapter];

      for (const e of state.editor.instances) {
        e.instance.dispose();
      }
      state.editor.instances = [];

      for (const c of state.editor.root.contentItems[0].getItemsById('editorId')) {
        c.close();
      }

      for (file in chapter.files) {
        editorBox.addChild({
          type: 'component',
          id: 'editorId',
          componentName: 'editor',
          title: file,
          isClosable: false,
          componentState: { name: file, value: chapter.files[file] }
        });
      }
      state.editor.description.innerHTML = chapter.readme;
    },
    get() {
      return {
        unit: state.progress.currentUnit,
        chapter: state.progress.currentChapter
      };
    },
    set(p) {
      state.progress.currentUnit = p.unit;
      state.progress.currentChapter = p.chapter;
      state.progress.update();
    },
    reset() {
      state.progress.set({ unit: 0, chapter: 0 });
    },
    getResult() {
      return units[state.progress.currentUnit].chapters[state.progress.currentChapter].result.trim();
    },
    mountSelect(selectElement) {
      const frag = document.createDocumentFragment();
      let unitCount = 0;
      for (unit of units) {
        const elOptionGroup = frag.appendChild(document.createElement('optgroup'));
        elOptionGroup.label = unit.name;
        let chapterCount = 0;
        for (chapter of unit.chapters) {
          const elOption = elOptionGroup.appendChild(document.createElement('option'));
          elOption.label = chapter.name;
          elOption.value = unitCount * 100 + chapterCount;
          ++chapterCount;
        }
        ++unitCount;
      }
      selectElement.appendChild(frag);
    }
  },
  layout: {
    config: {
      settings: {
        showPopoutIcon: false,
        showCloseIcon: false
      },
      content: [
        {
          type: 'column',
          content: [
            {
              type: 'row',
              height: 150,
              isClosable: false,
              content: [
                {
                  type: 'component',
                  componentName: 'description',
                  isClosable: false,
                  title: 'Readme.md',
                  componentState: { name: 'header' }
                },
                {
                  type: 'stack',
                  isClosable: false,
                  content: []
                }
              ]
            },
            {
              type: 'stack',
              isClosable: false,
              content: [
                {
                  type: 'component',
                  componentName: 'output',
                  isClosable: false,
                  title: 'Output',
                  componentState: { value: '' }
                },
                {
                  type: 'component',
                  componentName: 'input',
                  isClosable: false,
                  title: 'Input',
                  componentState: { value: '' }
                },
                {
                  type: 'component',
                  componentName: 'settings',
                  isClosable: false,
                  title: 'Settings',
                  componentState: {}
                }
              ]
            }
          ]
        }
      ]
    }
  },
  compiler: {
    isCompiling: false
  }
};
