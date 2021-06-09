export default function getTerm(arr, id) {
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i].id === id) {
            return arr[i]
        }
    }
    return {
        name: '',
        description: '',
        id: '',
        url: '',
        relatedWords: '',
        relatedWordsId: ''
    }
}