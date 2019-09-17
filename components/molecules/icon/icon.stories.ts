import { storiesOf } from '@storybook/vue'

import SelectIcon from '@/components/molecules/icon/SelectIcon.vue'

storiesOf('Molecules.Icon.SelectIcon', module)
  .add('Selected', () => ({
    components: { SelectIcon },
    template: `<select-icon :text="text"/>`,
    data: () => {
      return { text: '1' }
    }
  }))
  .add('No Selected', () => ({
    components: { SelectIcon },
    template: `<select-icon :text="text"/>`,
    data: () => {
      return { text: '' }
    }
  }))
