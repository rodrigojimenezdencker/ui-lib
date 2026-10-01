import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
const meta = { title: 'Components/Button', component: Button, args: { children: 'Save changes' },
  argTypes: { variant: { control: 'inline-radio', options: ['primary', 'ghost', 'danger'] }, size: { control: 'inline-radio', options: ['sm', 'md'] } },
} satisfies Meta<typeof Button>
export default meta
type S = StoryObj<typeof meta>
export const Primary: S = {}
export const Ghost: S = { args: { variant: 'ghost' } }
export const Danger: S = { args: { variant: 'danger', children: 'Delete' } }
export const Loading: S = { args: { loading: true, children: 'Saving' } }
export const Disabled: S = { args: { disabled: true } }
