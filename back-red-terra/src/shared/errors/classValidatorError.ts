export interface IClassValidatorError {
  target: {
    [key: string]: any;
  };
  value: any;
  property: string;
  children: any[];
  constraints: {
    [key: string]: string;
  };
}
