"use strict";

var _jsdom = require("jsdom");

describe('FAQ Item Functionality', function () {
  var dom;
  var document;
  var faqItems;
  beforeEach(function () {
    dom = new _jsdom.JSDOM("\n      <div class=\"faq-item\">\n        <div class=\"faq-question\">Question</div>\n        <div class=\"faq-answer\">Answer</div>\n      </div>\n    ");
    document = dom.window.document;
    faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
      item.addEventListener('click', function () {
        this.classList.toggle('active');
        this.querySelector('.faq-answer').classList.toggle('show');
      });
    });
  });
});
//# sourceMappingURL=build.test.dev.js.map
