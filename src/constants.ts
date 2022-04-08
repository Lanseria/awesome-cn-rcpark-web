export const AppName = 'RCPark 𝐂𝐍'

export const ColorToIcon: Record<string, string> = {
  '#50C240': 'ant-design:car-filled',
  '#F3AE1A': 'ant-design:car-twotone',
  '#C24740': 'ant-design:car-outlined',
  '#BEBEBE': 'mdi:domain-off',
}

export const Colors = Object.keys(ColorToIcon)

export const ignoredProperties = [
  '名称',
  '下载速度',
  'shortname',
  'Speedtest 链接',
  'marker-color',
  'marker-symbol',
  'referrers',
]
