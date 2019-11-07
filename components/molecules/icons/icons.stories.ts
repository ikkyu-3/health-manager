import { storiesOf } from '@storybook/vue'

import SelectIcon from '@/components/molecules/icons/SelectIcon.vue'

storiesOf('molecules.icons.SelectIcon', module)
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
