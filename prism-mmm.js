Prism.languages.mmm = {
  'comment': /\/\/.*/,
  'string': /"[^"]*"/,

  // Order matters: more specific first
  'fn-keyword': /\bfn\b/,
  'type': /\b(int|float)\b/,
  'keyword': /\b(return|if|else|while|or|and)\b/,
  'function-call': /\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\s*\()/,  // function names
  'variable': /\b([a-zA-Z_][a-zA-Z0-9_]*)(?!\s*\()/,       // variables (not followed by ()

  'number': /\b\d+(?:\.\d+)?\b/,
  'operator': /[+\-*\/=<>]/,
  'punctuation': /[(){}\[\];,:]/,
};