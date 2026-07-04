<template>
    <div>

        <!-- NAVBAR -->
        <header class="fixed z-50 top-0 left-0 right-0 w-full">
            <Navbar />
        </header>
        <!-- NAVBAR -->

        <main>
            <slot />
        </main>

        <!-- FOOTER -->
        <footer>
            <Footer />
        </footer>
        <!-- FOOTER -->

    </div>
</template>
