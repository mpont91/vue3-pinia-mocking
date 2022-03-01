import { describe, it, expect, fn } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      props:
          { msg: 'Hello Vitest' },
      global: {
        plugins: [createTestingPinia(
            {
              createSpy: fn,
            }
        )],
      },
    })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
