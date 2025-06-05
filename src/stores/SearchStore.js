// src/stores/searchStore.js
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
    state: () => ({
        term: ''
    }),
    actions: {
        setTerm(newTerm) {
            this.term = newTerm
        }
    }
})
