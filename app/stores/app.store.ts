export const useAppStore = defineStore('app', () => {
    const mobileBreakpointSize = 768;
    const isMobile = ref<boolean>(false);
    const mobileMenuVisibility = ref<boolean>(false);
    const contactModalVisibility = ref<boolean>(false);

    if (import.meta.client) {
        isMobile.value = window.innerWidth < mobileBreakpointSize;
    }

    function toggleMobileMenuVisibility() {
        mobileMenuVisibility.value = !mobileMenuVisibility.value;
    }

    function toggleContactModal() {
        contactModalVisibility.value = !contactModalVisibility.value;
    }

    function onWindowResize() {
        if (window.innerWidth >= mobileBreakpointSize) {
            mobileMenuVisibility.value = false;
        }
        isMobile.value = window.innerWidth < mobileBreakpointSize;
    }

    onMounted(() => {
        window.addEventListener('resize', () => onWindowResize())
    })
    onUnmounted(() => {
        window.removeEventListener('resize', () => onWindowResize())
    })

    return {
        isMobile,
        mobileMenuVisibility,
        toggleMobileMenuVisibility,
        contactModalVisibility,
        toggleContactModal
    }
})
