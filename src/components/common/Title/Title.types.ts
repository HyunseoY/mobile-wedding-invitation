import { ColorsKey } from '../../../styles/theme';

export interface TitleProps {
  subTitle: React.ReactNode;
  title: React.ReactNode;
  subTitleColor?: ColorsKey;
  titleColor?: ColorsKey;
}
