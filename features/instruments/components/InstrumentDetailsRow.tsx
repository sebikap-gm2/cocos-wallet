import { DS } from '@/design-system';
import { ReactNode } from 'react';

interface InstrumentDetailsRowProps {
  title: string;
  value: ReactNode;
}

export const InstrumentDetailsRow = ({ title, value }: InstrumentDetailsRowProps) => {
  return (
    <DS.View>
      <DS.Text style={{ fontSize: 12 }}>{title}</DS.Text>
      <DS.Text type="subtitle">{value}</DS.Text>
    </DS.View>
  );
};
