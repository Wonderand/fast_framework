<template>
  <div ref="editor"></div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import EditorJS from '@editorjs/editorjs';

export default {
  name: 'EditorComponent',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const editor = ref(null);
    const editorContainer = ref(null);

    const initializeEditor = () => {
      editor.value = new EditorJS({
        holder: editorContainer.value,
        data: props.data,
        onChange: () => {
          editor.value.save().then((outputData) => {
            emit('update', outputData);
          }).catch((error) => {
            console.error('Saving failed: ', error);
          });
        },
      });
    };

    const destroyEditor = () => {
      if (editor.value) {
        editor.value.destroy().catch((error) => console.error('Failed to destroy editor: ', error));
      }
    };

    onMounted(() => {
      initializeEditor();
    });

    onBeforeUnmount(() => {
      destroyEditor();
    });

    return {
      editorContainer
    };
  }
};
</script>

<style scoped>
</style>
