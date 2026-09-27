const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const { test } = require('node:test');
const ts = require('typescript');

const source = readFileSync(resolve(__dirname, '../src/lib/api-access-request.ts'), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const exportsObject = {};
new Function('exports', compiled)(exportsObject);

test('pilot request preserves the brief and rejects invalid inputs', () => {
    const data = new FormData();
    Object.entries({ name: ' Demo Founder ', email: 'founder@example.com', company: 'Science & Space',
        useCase: 'Volcanoes? 3D + diagrams\n&bcc=someone@example.com' })
        .forEach(([key, value]) => data.set(key, value));
    const request = exportsObject.buildAccessRequest(data);
    assert.equal(request.email, 'founder@example.com');
    assert.ok(request.text.includes('Name: Demo Founder\n'));
    assert.ok(request.text.includes(data.get('useCase')));
    assert.ok(request.text.includes('Product / company: Science & Space'));
    data.set('useCase', 'x'.repeat(601));
    assert.throws(() => exportsObject.buildAccessRequest(data), /use case/);
    data.set('useCase', '  ');
    assert.throws(() => exportsObject.buildAccessRequest(data), /use case/);
    data.set('email', 'invalid');
    assert.throws(() => exportsObject.buildAccessRequest(data), /valid email/);
});
