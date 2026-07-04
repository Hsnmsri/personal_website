<script setup lang="ts">
interface Props {
    modelValue: string;
    type?: string;
    placeholder?: string;
    multiline?: boolean;
    rows?: number;
    required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    placeholder: '',
    multiline: false,
    rows: 4,
    required: false,
});

const emit = defineEmits<{
    'update:modelValue': [value: string];
}>();

const value = computed({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v)
});
</script>

<template>
    <div class="relative">
        <div v-if="$slots.icon" class="absolute left-3 text-secondary/50" :class="multiline ? 'top-3' : 'top-1/2 -translate-y-1/2'">
            <slot name="icon" />
        </div>

        <textarea
            v-if="multiline"
            v-model="value"
            :rows="rows"
            :placeholder="placeholder"
            :required="required"
            class="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 pr-4 text-white placeholder:text-secondary/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
            :class="$slots.icon ? 'pl-10' : 'pl-4'"
        />

        <input
            v-else
            v-model="value"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            class="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 pr-4 text-white placeholder:text-secondary/40 focus:outline-none focus:border-primary/50 transition-colors"
            :class="$slots.icon ? 'pl-10' : 'pl-4'"
        />
    </div>
</template>
