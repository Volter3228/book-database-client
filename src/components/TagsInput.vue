<template>
  <div>
    {{ label }}:
    <q-icon name="help" color="brown-9">
      <q-tooltip anchor="top middle" self="top middle" :offset="[5, 30]" class="bg-brown-9">
        <strong>Press Enter to add</strong>
      </q-tooltip>
    </q-icon>
    <q-field outlined color="brown-9" style="max-width: 340px;" dense>
      <template v-slot:control>
        <div class="self-center full-width no-outline">
          <q-chip
            v-for="(tag, index) in tags" :key="tag" size="sm"
            removable color="brown-9" @remove="$emit('remove', index)" text-color="brown-1"
          >
            {{ tag }}
          </q-chip>
          <input
            style="border: none; outline: none; height: 100%" class="bg-transparent"
            v-model="tagString" type="text" @keypress.enter.stop="addTag"
          />
        </div>
      </template>
    </q-field>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'TagsInput',
  props: ['label', 'tags'],
  emits: ['add', 'remove'],
  setup (props, { emit }) {
    const tagString = ref('');

    const addTag = () => {
      const tag = tagString.value;
      if (tag.length >= 2 && !props.tags.includes(tag)) {
        emit('add', tag)
        tagString.value = '';
      }
    }

    return {
      tagString,
      addTag
    }
  }
}
</script>
