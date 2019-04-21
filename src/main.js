import { Prompts } from "./prompt/prompts";
const checkWord = require('check-word')('en');

export class Application {
  data = {};
  async init() {
    const values = await Prompts.getValues();
    this.data = values;

  }

  encode() {
    let { text, shift } = this.data;
    let str = text.toLowerCase();
    console.log(str.split('').map(el =>
      (el.charCodeAt() < 96 || el.charCodeAt() > 123)?
       el.charCodeAt():
        ((el.charCodeAt() + shift) > 122 ? el.charCodeAt() + shift - 26 : el.charCodeAt() + shift)).map(el =>
        String.fromCharCode(el)).join(''));
  }

  decode() {
    let { text } = this.data;
    let str = text.toLowerCase();
    for (let i = 1; i <= 26; i++) {
     let res = str.split('').map(el =>
        (el.charCodeAt() < 96 || el.charCodeAt() > 123)?
         el.charCodeAt():
          ((el.charCodeAt() + i) > 122 ? el.charCodeAt() + i - 26 : el.charCodeAt() + i)).map(el =>
          String.fromCharCode(el)).join('');
          checkWord.check(res) && console.log(res);
    }
  }
}
