import IPlainText from './IPlainText';
import IOption from './IOption';

export default interface IOptionGroup {
  label: IPlainText;
  options: IOption[];
}
