<template>
<div>
  Hello World
  <VSelect label="List of element" :items="schemaNames" v-model="schemaSelected"></VSelect>
  <hr>

  <pre>
    {{ JSON.stringify(schemaValue, null, 2) }}
  </pre>
</div>
</template>

<script setup lang="ts">
const schemaSelected = useState<string>('schemaSelected', () => "")

const { data } = await useFetch('/api/getSchema')

const schemaNames = computed(() => {
  return Object.keys(data.value?.schemas ?? {}).map((key) => key.replace(".json", ""))
})

const schemaValue = computed(() => data.value?.schemas[`${schemaSelected.value}.json`])
</script>

<style>
  /* Redundant unused code to test treeshaking */
  .unused-selector-app {
    color: orange;
  }
</style>