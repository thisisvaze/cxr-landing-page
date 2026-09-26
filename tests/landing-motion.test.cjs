const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const { test } = require('node:test');
const ts = require('typescript');

const root = resolve(__dirname, '..');
const source = readFileSync(resolve(root, 'src/components/global/animation-container.tsx'), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS },
}).outputText;
let reducedMotion = false;
const exportsObject = {};
new Function('require', 'exports', compiled)((name) => name === 'motion/react'
  ? { motion: { div: 'div' }, useReducedMotion: () => reducedMotion }
  : require(name), exportsObject);
const reveal = exportsObject.default;

test('reveals settle upward once, cap waiting, and respect reduced motion', () => {
  const normal = reveal({ children: 'Content', delay: 10 }).props;
  assert.deepEqual(normal.initial, { opacity: 0, y: 12 });
  assert.deepEqual(normal.whileInView, { opacity: 1, y: 0 });
  assert.equal(normal.viewport.once, true);
  assert.ok(normal.transition.delay <= 0.16);
  assert.equal(reveal({ animation: 'fadeIn' }).props.initial.y, 0);

  reducedMotion = true;
  const reduced = reveal({ children: 'Content', delay: 10 }).props;
  assert.equal(reduced.initial, false);
  assert.equal(reduced.transition.duration, 0);
  assert.equal(reduced.transition.delay, 0);
  assert.equal(reduced.children, 'Content');
});

test('every generated illustration is a full-resolution PNG', () => {
  for (const name of ['ask-anything', 'spatial-intelligence', 'natural-interactions',
    'learning-journey', 'model-library', 'mixed-reality-learning']) {
    const png = readFileSync(resolve(root, `public/images/illustrations/${name}.png`));
    assert.equal(png.subarray(1, 4).toString(), 'PNG');
    assert.equal(png.readUInt32BE(16), 1536);
    assert.equal(png.readUInt32BE(20), 1024);
  }
});
