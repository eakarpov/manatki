export interface IOption {
  isEmpty: boolean;
  getOrElse(value: any): any;
}