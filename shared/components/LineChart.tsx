import { useThemeColor } from '@/design-system';
import React from 'react';
import { LineChart } from 'react-native-svg-charts';

export const LineChartExample = () => {
  const color = useThemeColor('colors.notification');
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  return (
    <LineChart
      style={{ height: 200 }}
      gridMin={-20}
      gridMax={120}
      data={data}
      svg={{
        strokeWidth: 2,
        stroke: color,
      }}
      contentInset={{ top: 20, bottom: 20 }}
    />
  );
};

export default LineChartExample;
