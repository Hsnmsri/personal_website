export const useAppStore = defineStore('app', () => {
    const mobileBreakpointSize = 768;
    const isMobile = ref<boolean>(window.innerWidth < mobileBreakpointSize);
    const mobileMenuVisibility = ref<boolean>(false);

    /**
     * Toggle mobile menu visibility
     */
    function toggleMobileMenuVisibility() {
        mobileMenuVisibility.value = !mobileMenuVisibility.value;
    }

    /**
     * On window resize event handler
     */
    function onWindowResize() {
        // CHECK MOBILE MENU VISIBILITY
        if (window.innerWidth >= mobileBreakpointSize) {
            mobileMenuVisibility.value = false;
        }

        // IS MOBILE
        isMobile.value = window.innerWidth < mobileBreakpointSize;
    }

    // WEBHOOKS
    onMounted(() => {
        window.addEventListener('resize', () => onWindowResize())
    })
    onUnmounted(() => {
        window.removeEventListener('resize', () => onWindowResize())
    })

    return {
        isMobile,
        mobileMenuVisibility,
        toggleMobileMenuVisibility
    }
})