import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from './Tabs'
const meta = { title: 'Components/Tabs', component: Tabs } satisfies Meta<typeof Tabs>
export default meta
export const Basic: StoryObj<typeof meta> = { args: { tabs: [
  { id: 'a', label: 'Overview', content: 'Overview content. Use the arrow keys to move between tabs.' },
  { id: 'b', label: 'Activity', content: 'Activity content.' },
  { id: 'c', label: 'Settings', content: 'Settings content.' }] } }
