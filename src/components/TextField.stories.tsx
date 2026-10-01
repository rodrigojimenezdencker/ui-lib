import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextField } from './TextField'
const meta = { title: 'Components/TextField', component: TextField, args: { label: 'Email', placeholder: 'you@example.com' } } satisfies Meta<typeof TextField>
export default meta
type S = StoryObj<typeof meta>
export const Default: S = {}
export const WithHint: S = { args: { hint: 'We never share it' } }
export const WithError: S = { args: { error: 'Enter a valid email', defaultValue: 'nope' } }
