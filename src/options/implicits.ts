import {Option, Some} from '../../src';

export interface Optionized {
  some<T>(value: T): Option<T>;
}

declare interface String extends Optionized {}
declare interface Number extends Optionized {}

function initStringOptions() {
  // TODO: how to substitute standard type?
  (String.prototype as any).some = function() {
    return Option<string>(Some(this));
  }  
}

function initNumberOptions() {
  // TODO: how to substitute standard type?
  (Number.prototype as any).some = function() {
    return Option<number>(Some(this));
  }  
}

initNumberOptions();
initStringOptions();