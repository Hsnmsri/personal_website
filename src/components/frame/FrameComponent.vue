<template>
    <div class="d-flex flex-column frame-component bg-dark text-light px-3 py-3" v-if="!isHidden">
        <!-- header -->
        <div class="col-12 row align-items-center pb-2">
            <!-- back button -->
            <div class="col-auto">
                <div>
                    <button class="btn text-light rounded-0" @click="$emit('closeFrame')">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                </div>
            </div>
            <!-- title -->
            <div class="col-auto">
                <div>
                    <span>{{frameTitle}}</span>
                </div>
            </div>
        </div>
        <!-- main content -->
        <div class="overflow-y-auto">
            <slot></slot>
        </div>
    </div>
</template>
<script src="./FrameComponent.js"></script>
<style src="./FrameComponent.css"></style>