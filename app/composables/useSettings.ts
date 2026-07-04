export function useSettings() {
    return useFetch<Record<string, string | null>>('/api/settings', { key: 'site-settings' })
}
