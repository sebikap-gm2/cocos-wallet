import { DS } from '@/design-system';
import { ReactNode } from 'react';

interface PortfolioItemDetailsRowProps {
  title: string;
  value: ReactNode;
}

export const PortfolioItemDetailsRow = ({ title, value }: PortfolioItemDetailsRowProps) => {
  return (
    <DS.View>
      <DS.Text style={{ fontSize: 12 }}>{title}</DS.Text>
      <DS.Text type="subtitle">{value}</DS.Text>
    </DS.View>
  );
};
