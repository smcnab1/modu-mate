const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const test = require('node:test');

const context = vm.createContext({ URL });
vm.runInContext(fs.readFileSync('html-output.js', 'utf8'), context);

test('exported team cards preserve text and allow only web addresses for websites', () => {
  const page = fs.readFileSync('team/generate.html', 'utf8');
  const card = page.match(/    function generateCardHTML\([\s\S]*?\n    }/)[0];
  vm.runInContext(card, context);
  const member = { name: 'Sam & Jo <team>', title: '"Lead"', website: 'file:///example' };
  const html = context.generateCardHTML(member, true);
  assert.ok(html.includes('<h1>Sam &amp; Jo &lt;team&gt;</h1>'));
  assert.ok(html.includes('&quot;Lead&quot;'));
  assert.ok(!html.includes('file:///'));
  assert.equal(context.webAddress('https://example.org/team'), 'https://example.org/team');
});
