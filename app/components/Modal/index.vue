<script setup lang="ts">
import { X } from '@lucide/vue';

interface Modal {
    modelValue: boolean;
    title?: string;
}

const props = withDefaults(defineProps<Modal>(), {
    title: ''
});

const emit = defineEmits<{
    'update:modelValue': [value: boolean];
    'close': [];
}>();

function close() {
    emit('update:modelValue', false);
    emit('close');
}

function onOverlayClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
        close();
    }
}

function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
        close();
    }
}
</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="modelValue"
                class="fixed inset-0 flex items-center justify-center w-full h-full text-white bg-secondary/20 z-100"
                @click.self="onOverlayClick" @keydown="onKeydown">
                <div class="bg-dark rounded-sm w-[90%] max-w-2xl max-h-[85%] flex flex-col">

                    <!-- HEADER -->
                    <header class="shrink-0">
                        <div class="flex items-center justify-between py-4 px-6 border-b border-b-white/10">
                            <div>
                                <h2 class="font-bold text-lg">{{ title }}</h2>
                            </div>

                            <button class="p-1 rounded-sm hover:bg-white/10 transition-colors cursor-pointer"
                                @click="close" aria-label="Close modal">
                                <X class="opacity-50 hover:opacity-100 transition-opacity" />
                            </button>
                        </div>
                    </header>
                    <!-- HEADER -->

                    <!-- BODY -->
                    <main class="flex-1 overflow-y-auto py-5 px-6">
                        <slot />
                    </main>
                    <!-- BODY -->

                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>

    .modal-enter-active,
    .modal-leave-active {
        transition: opacity 0.2s ease;
    }

    .modal-enter-active>div,
    .modal-leave-active>div {
        transition: transform 0.2s ease;
    }

    .modal-enter-from,
    .modal-leave-to {
        opacity: 0;
    }

    .modal-enter-from>div {
        transform: scale(0.95);
    }

    .modal-leave-to>div {
        transform: scale(0.95);
    }
</style>
