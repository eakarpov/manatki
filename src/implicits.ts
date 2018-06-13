import {Option} from './options/Option';

export interface Optionized<T> {
  some(): Option<T>;
}

declare global {
  interface String extends Optionized<string> {}
  interface Number extends Optionized<number> {}
}

function initStringOptions() {
  String.prototype.some = function() {
    return Option.Some<number>(this);
  }
}

function initNumberOptions() {
  Number.prototype.some = function() {
    return Option.Some<string>(this);
  }
}

initNumberOptions();
initStringOptions();